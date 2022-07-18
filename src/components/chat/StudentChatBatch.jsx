import {
  Avatar,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useChatDispatch, useChatState } from "../../contexts/chat";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function StudentChatCourses() {
  const { batches, activeChat, loading } = useChatState();
  const { handleFetchMessages } = useChatDispatch();
  const profileBg = useColorModeValue("gray.50", "blue.700");

  if (loading === "fetching-batches") {
    return (
      <HStack spacing={4} py={4}>
        <SkeletonCircle
          startColor="pink.500"
          endColor="orange.500"
          size={12}
          flex="none"
        />
        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          width={"full"}
          height={6}
          flexGrow={1}
        />
      </HStack>
    );
  }
  return (
    <VStack w="full">
      {batches?.map((batch) => (
        <HStack
        key={batch.id}
          rounded={"md"}
          w="full"
          cursor={"pointer"}
          onClick={() => handleFetchMessages(batch)}
          _hover={{ bg: profileBg }}
          spacing={4}
          px={2}
          py={4}
          as={Link}
          to="/chat/activeChat"
          bg={batch.id === activeChat?.id && profileBg}
        >
          <Avatar
            bg={"blue.400"}
            icon={<IoPeopleOutline color="white" size={24} />}
            size={"md"}
          />
          <VStack align={"flex-start"} spacing={0}>
            <Heading fontSize={"lg"}>{batch.batch_name}</Heading>
            <Text fontSize={"sm"}>{batch.course.course_name}</Text>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
}
