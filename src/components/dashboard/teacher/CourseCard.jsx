import {
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CourseCard({ course, children }) {
  const courseCardBg = useColorModeValue("white", "gray.700");
  return (
    <Box
      key={course.id}
      p={6}
      border="2px"
      borderColor="blue.500"
      bg={courseCardBg}
      rounded="xl"
    >
      <VStack spacing={4} align="start">
        <Heading size="md">{course.course_name}</Heading>

        <Text fontSize="md">{course.prerequisites}</Text>

        <Button
          colorScheme="blue"
          as={Link}
          to={`/dashboard/courses/${course.id}`}
        >
          View Course
        </Button>
      </VStack>
    </Box>
  );
}

export default CourseCard;
