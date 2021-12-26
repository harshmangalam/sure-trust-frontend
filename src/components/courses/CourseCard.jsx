import {
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Box,
  Wrap,
} from "@chakra-ui/react";
import SubCourses from "./SubCourses";
import { Link } from "react-router-dom";
function CourseCard({ course }) {
  const courseCardBg = useColorModeValue("white", "gray.700");
  return (
    <Box
      key={course.id}
      p={6}
      border="2px"
      borderColor="blue.500"
      bg={courseCardBg}
      rounded="xl"
      transition="0.5s all"
      _hover={{
        boxShadow: "2xl",
        shadow: "1px 1px 20px blue",
      }}
    >
      <VStack spacing={4} align="start">
        <Heading size="md">{course.course_name}</Heading>

        <Text fontSize="md">{course.prerequisites}</Text>
        <Wrap>
          <Button colorScheme={"blue"} rounded={"full"} as={Link} to={`/courses/${course.id}`}>
            Explore
          </Button>
          {course.subcourses?.length ? (
            <SubCourses subcourses={course.subcourses} />
          ) : null}
        </Wrap>
      </VStack>
    </Box>
  );
}

export default CourseCard;
