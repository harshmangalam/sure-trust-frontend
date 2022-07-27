import {
  Button,
  HStack,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuthState } from "../../contexts/auth";
import { useChatDispatch, useChatState } from "../../contexts/chat";
import EmojiPopver from "./EmojiPopover";
import FileUpload from "./FileUpload";
export default function InputMessage() {
  const inputBg = useColorModeValue("white", "blue.800");
  const { handleSentMessage } = useChatDispatch();
  const [text, setText] = useState("");
  const { activeChat, loading } = useChatState();
  const { currentUser } = useAuthState();

  const handleEmjojiAdd = (emoji) => {
    setText((text) => `${text} ${emoji}`);
  };

  const sendMessage = () => {
    if (!text || text.trim().length === 0) {
      return;
    }
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
  };
  return (
    <Stack
      direction={["column", "row"]}
      spacing={2}
      w="full"
      px={2}
      py={2}
      justify="center"
    >
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
      <HStack justifyContent={"flex-end"}>
        <EmojiPopver handleEmjojiAdd={handleEmjojiAdd} />
        <FileUpload />

        <Button
          isLoading={loading === "sending-message"}
          disabled={!text || text.trim().length === 0}
          onClick={sendMessage}
          rounded="full"
          colorScheme="blue"
        >
          Send
        </Button>
      </HStack>
    </Stack>
  );
}
