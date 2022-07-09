import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useAuthState } from "../../contexts/auth";
import { useChatDispatch, useChatState } from "../../contexts/chat";
import { formatDistance, subDays } from "date-fns";
import { useEffect, useRef } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function ActiveChatMessages() {
  const senderBg = useColorModeValue("gray.200", "purple.800");
  const msgBg = useColorModeValue("white", "blue.800");
  const { activeChat, isLoading } = useChatState();
  const { currentUser } = useAuthState();
  const { handleRemoveMessage } = useChatDispatch();

  const msgBodyRef = useRef();

  useEffect(() => {
    console.log(msgBodyRef.current.scrollHeight);
    console.log(msgBodyRef.current.scrollTop);
    msgBodyRef.current.scrollTop = msgBodyRef.current.scrollHeight;
  }, [activeChat?.messages]);
  return (
    <Box
      ref={msgBodyRef}
      w="full"
      flex={1}
      px={"4"}
      overflowY="auto"
      overflowX={"hidden"}
    >
      <VStack w="full" align={"flex-start"}>
        {activeChat.messages?.map((message) => (
          <Flex
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
                  <Heading fontSize={"md"}>{message.sender.name}</Heading>
                </HStack>
                {currentUser.id === message.sender.id && (
                  <IconButton
                    onClick={() => handleRemoveMessage(message._id)}
                    size={"xs"}
                    rounded={"full"}
                    aria-label="remove message"
                    icon={<AiOutlineDelete size={16} />}
                    colorScheme="red"
                    isLoading={isLoading}
                  />
                )}
              </Flex>
              <Text wordBreak={"break-word"}>{message.text}</Text>
              <Text w={"full"} textAlign="end" fontSize={"xs"}>
                {formatDistance(new Date(message.createdAt), new Date(), {
                  addSuffix: true,
                })}
              </Text>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
