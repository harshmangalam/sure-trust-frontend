import {
  Avatar,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useAuthState } from "../../contexts/auth";
import { formatDistance } from "date-fns";
import { useChatDispatch, useChatState } from "../../contexts/chat";
import { AiOutlineDelete } from "react-icons/ai";
import Linkify from "react-linkify";

export default function Message({ message }) {
  const senderBg = useColorModeValue("blue.400", "blue.600");
  const msgBg = useColorModeValue("white", "blue.800");

  const { currentUser } = useAuthState();
  const { loading } = useChatState();
  const { handleRemoveMessage } = useChatDispatch();

  return (
    <Flex
      key={message._id}
      w="full"
      justifyContent={
        message.sender.id === currentUser.id ? "flex-end" : "flex-start"
      }
    >
      <VStack
        alignItems={"flex-start"}
        shadow={"md"}
        rounded={"md"}
        maxW={"sm"}
        p={"3"}
        bg={message.sender.id === currentUser.id ? senderBg : msgBg}
        w="full"
        key={message._id}
      >
        <Flex w="full">
          <HStack flexGrow={1} w={"full"} spacing={"4"}>
            <Avatar name={message.sender.name} size={"sm"} />
            <Heading color={"white"} fontSize={"md"}>
              {message.sender.name}
            </Heading>
          </HStack>
          {currentUser.id === message.sender.id && (
            <Tooltip label="Delete Message">
              <IconButton
                onClick={() => handleRemoveMessage(message._id)}
                size={"sm"}
                rounded={"full"}
                aria-label="remove message"
                icon={<AiOutlineDelete size={20} />}
                colorScheme="blue"
                isLoading={loading === "removing-message"}
              />
            </Tooltip>
          )}
        </Flex>
        <Text wordBreak={"break-word"} color="white">
          <Linkify>{message.text}</Linkify>
        </Text>
        <Text w={"full"} textAlign="end" color="white" fontSize={"xs"}>
          {formatDistance(new Date(message.createdAt), new Date(), {
            addSuffix: true,
          })}
        </Text>
      </VStack>
    </Flex>
  );
}
