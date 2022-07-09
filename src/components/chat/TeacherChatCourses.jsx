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
  useColorModeValue,
} from "@chakra-ui/react";
import { useChatDispatch, useChatState } from "../../contexts/chat";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function TeacherChatCourses() {
  const { courses, batches, activeChat } = useChatState();
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
            {batches?.map((batch) => (
              <HStack
                rounded={"md"}
                w="full"
                cursor={"pointer"}
                onClick={() => handleFetchMessages(batch)}
                _hover={{ bg: profileBg }}
                spacing={4}
                px={2}
                as={Link}
                to={"/chat/activeChat"}
                py={4}
                bg={batch.id === activeChat?.id && profileBg}
              >
                <Avatar
                  bg={"blue.400"}
                  icon={<IoPeopleOutline color="white" size={24} />}
                  size={"md"}
                />

                <Heading fontSize={"lg"}>{batch.batch_name}</Heading>
              </HStack>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
