import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  IconButton,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../components/shared/Logo";
import ThemeToggle from "../../components/shared/ThemeToggle";
import { useAuthState } from "../../contexts/auth";
import { useChatState } from "../../contexts/chat";
import TeacherChatCourses from "../../components/chat/TeacherChatCourses";
import StudentChatBatch from "../../components/chat/StudentChatBatch";

import ActiveChatHeader from "../../components/chat/ActiveChatHeader";
import ActiveChatMessages from "../../components/chat/ActiveChatMessages";
import InputMessage from "../../components/chat/InputMessage";
import { RiDashboardLine } from "react-icons/ri";

export default function ChatLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate("/auth", {
        replace: true,
      });
    }
  }, []);

  const { activeChat } = useChatState();

  const authState = useAuthState();

  const screenBg = useColorModeValue("gray.100", "blue.900");
  const batchBg = useColorModeValue("white", "blue.800");
  const profileBg = useColorModeValue("gray.50", "blue.700");

  return (
    <>
      <Box h={"100vh"} bg={screenBg} display={["none", "none", "block"]}>
        <HStack spacing={0} h="full">
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

              {authState?.role === "teacher" && (
                <VStack align={"flex-start"} spacing={2} px={2} py={4}>
                  <TeacherChatCourses />
                </VStack>
              )}

              {authState?.role === "student" && (
                <VStack align={"flex-start"} spacing={2} px={2} py={4}>
                  <StudentChatBatch />
                </VStack>
              )}
            </Box>

            <Box w="full">
              <Divider />
              <HStack w="full" bg={profileBg} spacing={4} px={2} py={4}>
                <HStack flexGrow={1}>
                  <Avatar size={"sm"} name={authState.currentUser?.name} />
                  <Heading fontSize={"lg"}>
                    {authState.currentUser?.name}
                  </Heading>
                </HStack>
                <Tooltip label={"Dashboard"}>
                  <IconButton
                    as={Link}
                    to="/dashboard"
                    aria-label="Dashboard"
                    icon={<RiDashboardLine size={24} />}
                  />
                </Tooltip>
              </HStack>
            </Box>
          </VStack>

          {activeChat && (
            <VStack h={"full"} w={"full"} align={"flex-start"}>
              <ActiveChatHeader />
              <ActiveChatMessages />
              <InputMessage />
            </VStack>
          )}
        </HStack>
      </Box>

      {/* show on mobile devices  */}
      <Box display={["block", "block", "none"]}>
        <Outlet />
      </Box>
    </>
  );
}
