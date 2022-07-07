import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import ActiveChatHeader from "../../components/chat/ActiveChatHeader";
import ActiveChatMessages from "../../components/chat/ActiveChatMessages";
import InputMessage from "../../components/chat/InputMessage";

export default function ActiveChat() {
  const screenBg = useColorModeValue("gray.100", "blue.900");

  return (
    <Box h={"100vh"}  bg={screenBg}>
      <VStack h={"full"} w={"full"} align={"flex-start"}>
        <ActiveChatHeader />
        <ActiveChatMessages />
        <InputMessage />
      </VStack>
    </Box>
  );
}
