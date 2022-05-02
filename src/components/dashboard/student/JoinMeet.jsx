import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../../../contexts/auth";

function JoinMeet({ batchId, courseId, meetingCode }) {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const handleJoinClass = async () => {
    try {
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

  return (
    <Button w="full" colorScheme={"blue"} onClick={handleJoinClass}>
      Join Class
    </Button>
  );
}

export default JoinMeet;
