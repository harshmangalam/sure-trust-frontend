import { Button } from "@chakra-ui/react";
import { useAuthState } from "../../../contexts/auth";

function ToggleMeet({ meeting_code }) {
  const { currentUser } = useAuthState();
  const handleJoinClass = () => {
    localStorage.setItem("MeetCodeStudent", meeting_code);
    localStorage.setItem("MeetNameStudent", currentUser.name);
    window.open("/meet");
  };

  if (!meeting_code) {
    return null;
  }
  return (
    <Button w="full" colorScheme={"blue"} onClick={handleJoinClass}>
      Join Class
    </Button>
  );
}

export default ToggleMeet;
