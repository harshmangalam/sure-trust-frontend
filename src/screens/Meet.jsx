import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../contexts/auth";
import { patchBatchInformation } from "../services";
import "../styles/meet.css";
const DOMAIN = "meet.jit.si";

export default function Meet() {
  const { currentUser, classMeet, role } = useAuthState();
  let api = useRef();

  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      return navigate("/auth/", { replace: true });
    }

    if (!classMeet?.meetingCode) {
      return navigate("/dashboard/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      handleClassStart();
    } else {
      console.log("Problem while starting class.");
    }

    return () => handleClassEnd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClassStart() {
    const options = {
      roomName: classMeet?.meetingCode,
      width: "100%",
      height: "100%",
      configOverwrite: {
        prejoinPageEnabled: true,
        startWithVideoMuted: true,
        startWithAudioMuted: true,
      },
      interfaceConfigOverwrite: {
        DEFAULT_LOGO_URL:
          "https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/SURE%20INITIATIVE%20LOGO.png/:/rs=h:200,cg:true,m/qt=q:95",
        DEFAULT_WELCOME_PAGE_LOGO_URL:
          "https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/SURE%20INITIATIVE%20LOGO.png/:/rs=h:200,cg:true,m/qt=q:95",
        SHOW_JITSI_WATERMARK: false,
      },
      parentNode: document.querySelector("#jitsi-iframe"),
      userInfo: {
        displayName: currentUser.name,
      },
    };
    api.current = new window.JitsiMeetExternalAPI(DOMAIN, options);

    api.current.addEventListeners({
      videoConferenceLeft: handleClassEnd,
    });
    api.current.executeCommand("subject", "Sure Trust");
  }

  async function handleClassEnd() {
    api.current = null;
    if (role === "teacher") {
      const data = await patchBatchInformation({
        batchId: classMeet.batchId,
        courseId: classMeet.courseId,
        meetingCode: null,
      });

      dispatch({ type: "UPDATE_CLASSMEET", payload: data });
      return navigate(`/dashboard/courses/${classMeet.courseId}`, {
        replace: true,
      });
    }

    return navigate(`/dashboard/batches/`, {
      replace: true,
    });
  }

  return <Box id="jitsi-iframe" h="100vh"></Box>;
}
