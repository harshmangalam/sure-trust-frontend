import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../../../contexts/auth";
import { patchBatchInformation } from "../../../services";

function Meet({ batchId, courseId }) {
  const { classMeet } = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const handleStartMeeting = async () => {
    try {
      const meetingCode = `batch${batchId} ${Date.now()}`;
      await patchBatchInformation({
        batchId,
        courseId,
        meetingCode,
      });

      dispatch({
        type: "UPDATE_CLASSMEET",
        payload: {
          batchId,
          courseId,
          meetingCode,
        },
      });
      navigate("/meet");
    } catch (error) {
      console.log(error);
    }
  };
  const handleEndMeeting = async () => {
    try {
      await patchBatchInformation({
        batchId,
        courseId,
        meetingCode: null,
      });

      dispatch({
        type: "UPDATE_CLASSMEET",
        payload: {
          batchId,
          courseId,
          meetingCode: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (classMeet?.meetingCode) {
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
