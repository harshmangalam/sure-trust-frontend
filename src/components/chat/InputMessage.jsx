import { Button, HStack, Input, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { useAuthState } from "../../contexts/auth";
import { useChatDispatch, useChatState } from "../../contexts/chat";

export default function InputMessage() {
  const inputBg = useColorModeValue("white", "blue.800");
  const { handleSentMessage } = useChatDispatch();
  const [text, setText] = useState("");
  const { activeChat } = useChatState();
  const { currentUser } = useAuthState();
  return (
    <HStack spacing={2} w="full" px={2} py={2} justify="center">
      <Input
        placeholder="Start typing message..."
        rounded="full"
        autoFocus
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        bg={inputBg}
        size="lg"
      />
      <Button
        onClick={() => {
          handleSentMessage(activeChat.roomId, {
            batch: activeChat.id,
            course: activeChat.course.id,
            sender: {
              id: currentUser.id,
              name: currentUser.name,
            },
            text,
          });
          setText("");
        }}
        rounded="full"
        colorScheme="blue"
      >
        Send
      </Button>
    </HStack>
  );
}