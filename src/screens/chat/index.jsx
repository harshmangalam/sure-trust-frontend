import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { formatDistance, subDays } from "date-fns";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../components/shared/Logo";
import ThemeToggle from "../../components/shared/ThemeToggle";
import { useAuthState } from "../../contexts/auth";
import { useChatDispatch, useChatState } from "../../contexts/chat";

export default function ChatLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate("/auth", {
        replace: true,
      });
    }
  }, []);

  const [text, setText] = useState("");

  const { courses, batches, activeChat } = useChatState();
  const { handleFetchBatches, handleFetchMessages, handleSentMessage } =
    useChatDispatch();

  const authState = useAuthState();

  const screenBg = useColorModeValue("gray.100", "blue.900");
  const batchBg = useColorModeValue("white", "blue.800");
  const profileBg = useColorModeValue("gray.50", "blue.700");
  const senderBg = useColorModeValue("gray.200", "purple.800");
  const msgBg = useColorModeValue("white", "blue.800");
  const inputBg = useColorModeValue("white", "blue.800");

  return (
    <HStack spacing={0} h={"100vh"} bg={screenBg}>
      {/* batches  */}
      <VStack
        borderRightWidth={1}
        h={"full"}
        w={"sm"}
        bg={batchBg}
        justify="space-between"
        align={"flex-start"}
      >
        {/* navbar */}
        <Box w="full">
          <HStack justify={"space-between"} px={2} h={20}>
            <Logo />
            <ThemeToggle />
          </HStack>
          <Divider />

          <VStack align={"flex-start"} spacing={2} px={2} py={4}>
            <Accordion w="full">
              {courses?.map((course) => (
                <AccordionItem key={course.id}>
                  <h2>
                    <AccordionButton
                      onClick={() => handleFetchBatches(course.id)}
                    >
                      <Box flex="1" textAlign="left">
                        {course.course_name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {batches?.map((batch) => (
                      <HStack
                        rounded={"md"}
                        w="full"
                        cursor={"pointer"}
                        onClick={() => handleFetchMessages(batch)}
                        _hover={{ bg: profileBg }}
                        spacing={4}
                        px={2}
                        py={4}
                      >
                        <Avatar size={"sm"} name={batch.batch_name} />
                        <Heading fontSize={"lg"}>{batch.batch_name}</Heading>
                      </HStack>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </Box>

        <Box w="full">
          <Divider />
          <HStack bg={profileBg} spacing={4} px={2} py={4}>
            <Avatar size={"sm"} name={authState.currentUser?.name} />
            <Heading fontSize={"lg"}>{authState.currentUser?.name}</Heading>
          </HStack>
        </Box>
      </VStack>

      {activeChat && (
        <VStack h={"full"} w={"full"} align={"flex-start"}>
          {/* navbar */}
          <Box w="full" bg={batchBg}>
            <HStack w="full" spacing={4} px={2} py={4}>
              <Avatar size={"md"} name={activeChat.batch_name} />
              <VStack align="flex-start" spacing={0}>
                <Heading fontSize={"lg"}>{activeChat.batch_name}</Heading>
                <Text fontSize={"sm"}>{activeChat.course.course_name}</Text>
              </VStack>
            </HStack>
            <Divider />
          </Box>

          <Box w="full" flex={1} px={"4"} overflowY="auto" overflowX={"hidden"}>
            <VStack w="full" align={"flex-start"}>
              {activeChat.messages?.map((message) => (
                <Flex
                  w="full"
                  justifyContent={
                    message.sender.id === authState.currentUser.id
                      ? "flex-end"
                      : "flex-start"
                  }
                >
                  <VStack
                    alignItems={"flex-start"}
                    shadow={"md"}
                    rounded={"md"}
                    maxW={"sm"}
                    p={"3"}
                    bg={
                      message.sender.id === authState.currentUser.id
                        ? senderBg
                        : msgBg
                    }
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

          <HStack spacing={2} w="full" px={2} py={2}>
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
                handleSentMessage({
                  batch: activeChat.id,
                  course: activeChat.course.id,
                  sender: {
                    id: authState.currentUser.id,
                    name: authState.currentUser.name,
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
        </VStack>
      )}

      {/* show on mobile devices  */}
      <Box display={["block", "none"]}>
        <Outlet />
      </Box>
    </HStack>
  );
}
