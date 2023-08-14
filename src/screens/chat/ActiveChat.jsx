import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActiveChatHeader from "../../components/chat/ActiveChatHeader";
import ActiveChatMessages from "../../components/chat/ActiveChatMessages";
import InputMessage from "../../components/chat/InputMessage";
import { useChatState } from "../../contexts/chat";

export default function ActiveChat() {
  const screenBg = useColorModeValue("gray.100", "blue.900");
  const { activeChat } = useChatState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!activeChat) {
      navigate("/chat");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChat]);
  return (
    <Box h={"100vh"} bg={screenBg}>
      {activeChat && (
        <VStack h={"full"} w={"full"} align={"flex-start"}>
          <ActiveChatHeader />
          <ActiveChatMessages />
          <InputMessage />
        </VStack>
      )}
    </Box>
  );
}
