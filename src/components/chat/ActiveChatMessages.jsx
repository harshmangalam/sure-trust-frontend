import { Box, Center, Spinner, VStack } from "@chakra-ui/react";
import { useChatState } from "../../contexts/chat";
import { useEffect, useRef } from "react";
import Message from "./Message";
export default function ActiveChatMessages() {
  const { activeChat, loading } = useChatState();

  const msgBodyRef = useRef();

  useEffect(() => {
    if (activeChat?.messagea) {
      console.log(msgBodyRef.current.scrollHeight);
      console.log(msgBodyRef.current.scrollTop);
      msgBodyRef.current.scrollTop = msgBodyRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  return (
    <Box
      ref={msgBodyRef}
      w="full"
      flex={1}
      px={"4"}
      overflowY="auto"
      overflowX={"hidden"}
      h={"full"}
    >
      {loading === "fetching-messages" && (
        <Center w="full" h="full">
          <Spinner size="xl" />
        </Center>
      )}
      <VStack w="full" align={"flex-start"}>
        {activeChat?.messages?.map((message) => (
          <Message message={message} />
        ))}
      </VStack>
    </Box>
  );
}
