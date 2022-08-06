import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  Tag,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useChatDispatch, useChatState } from "../../contexts/chat";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function TeacherChatCourses() {
  const { courses, batches, activeChat, loading } = useChatState();
  const { handleFetchBatches, handleFetchMessages } = useChatDispatch();
  const profileBg = useColorModeValue("gray.50", "blue.700");

  return (
    <Accordion w="full">
      {courses?.map((course) => (
        <AccordionItem key={course.id}>
          <h2>
            <AccordionButton onClick={() => handleFetchBatches(course.id)}>
              <Box flex="1" textAlign="left">
                {course.course_name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {loading === "fetching-batches" && (
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
            )}
            <VStack spacing={2} align={"flex-start"}>
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
                  as={Link}
                  to={"/chat/activeChat"}
                  py={2}
                  bg={batch.id === activeChat?.id && profileBg}
                >
                  <Avatar
                    bg={"blue.400"}
                    icon={<IoPeopleOutline color="white" size={24} />}
                    size={"md"}
                  />

                  <Heading flex={1} fontSize={"lg"}>{batch.batch_name}</Heading>
                  <Tooltip label={`${batch.students.length} Students`}>
                    <Tag colorScheme={"blue"}>{batch.students.length}</Tag>
                  </Tooltip>
                </HStack>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
