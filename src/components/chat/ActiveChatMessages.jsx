import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useAuthState } from "../../contexts/auth";
import { useChatState } from "../../contexts/chat";
import { formatDistance, subDays } from "date-fns";

export default function ActiveChatMessages() {
  const senderBg = useColorModeValue("gray.200", "purple.800");
  const msgBg = useColorModeValue("white", "blue.800");
  const { activeChat } = useChatState();
  const { currentUser } = useAuthState();
  return (
    <Box w="full" flex={1} px={"4"} overflowY="auto" overflowX={"hidden"}>
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
              <HStack spacing={"4"}>
                <Avatar name={message.sender.name} size={"sm"} />
                <Heading fontSize={"md"}>{message.sender.name}</Heading>
              </HStack>
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
