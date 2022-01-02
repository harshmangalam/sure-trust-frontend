import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useAuthState } from "../../../contexts/auth";
import { patchBatchInformation } from "../../../services";

function Meet({ batchId, courseId }) {
  const { currentUser } = useAuthState();
  const [data, setData] = useState();
  const handleStartMeeting = async () => {
    try {
      const meetingCode = `batch${batchId} ${Date.now()}`;
      const data = await patchBatchInformation({
        batchId,
        courseId,
        meetingCode,
      });
      setData(data);

      localStorage.setItem("MeetCodeTeacher", meetingCode);
      localStorage.setItem("MeetNameTeacher", currentUser.name);
      window.open("/meet");
    } catch (error) {
      console.log(error);
    }
  };
  const handleEndMeeting = async () => {
    try {
      const data = await patchBatchInformation({
        batchId,
        courseId,
        meetingCode: null,
      });
      setData(data);
      localStorage.removeItem("MeetNameTeacher");
      localStorage.removeItem("MeetCodeTeacher");
    } catch (error) {
      console.log(error);
    }
  };

  if (data?.meeting_code) {
    return (
      <Button w="full" colorScheme={"red"} onClick={handleEndMeeting}>
        End Meet
      </Button>
    );
  }
  return (
    <Button w="full" colorScheme={"blue"} onClick={handleStartMeeting}>
      Start Meet
    </Button>
  );
}

export default Meet;
