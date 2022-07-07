import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import TeacherChatCourses from "../../components/chat/TeacherChatCourses";
import StudentChatBatch from "../../components/chat/StudentChatBatch";
import Logo from "../../components/shared/Logo";
import ThemeToggle from "../../components/shared/ThemeToggle";
import { useAuthState } from "../../contexts/auth";

export default function Home() {
  const batchBg = useColorModeValue("white", "blue.800");
  const profileBg = useColorModeValue("gray.50", "blue.700");
  const screenBg = useColorModeValue("gray.100", "blue.900");

  const { role, currentUser } = useAuthState();
  return (
    <Box h={"100vh"}  bg={screenBg}>
      <VStack
        borderRightWidth={1}
        h={"full"}
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

          {role === "teacher" && (
            <VStack align={"flex-start"} spacing={2} px={2} py={4}>
              <TeacherChatCourses />
            </VStack>
          )}

          {role === "student" && (
            <VStack align={"flex-start"} spacing={2} px={2} py={4}>
              <StudentChatBatch />
            </VStack>
          )}
        </Box>

        <Box w="full">
          <Divider />
          <HStack bg={profileBg} spacing={4} px={2} py={4}>
            <Avatar size={"sm"} name={currentUser?.name} />
            <Heading fontSize={"lg"}>{currentUser?.name}</Heading>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
