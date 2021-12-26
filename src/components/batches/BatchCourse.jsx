import { Heading, Text, VStack, Box, Tag } from "@chakra-ui/react";

function BatchCourse({ course }) {
  return (
    <Box>
      <VStack spacing={4} align="start">
        <Heading size="md">{course.course_name}</Heading>

        <VStack spacing={1} align={"start"}>
          <Tag>Prerequisites</Tag>
          <Text fontSize="md">{course.prerequisites}</Text>
        </VStack>
      </VStack>
    </Box>
  );
}

export default BatchCourse;
