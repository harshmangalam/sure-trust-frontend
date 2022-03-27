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
import EnrollCourse from "../students/EnrollCourse";
import {share} from "../../utils/share"
function CourseCard({ course }) {
  const courseCardBg = useColorModeValue("white", "gray.700");


  return (
    <Box
      key={course.id}
      p={6}
      border="2px"
      borderColor="purple.500"
      bg={courseCardBg}
      rounded="xl"
      transition="0.5s all"
      _hover={{
        boxShadow: "2xl",
        shadow: "1px 1px 20px purple",
      }}
    >
      <VStack spacing={4} align="start">
        <Heading size="md">{course.course_name}</Heading>

        <Text fontSize="md">{course.prerequisites}</Text>
        <Wrap>
          <Button
            colorScheme={"blue"}
            rounded={"full"}
            as={Link}
            to={`/courses/${course.id}`}
          >
            Explore
          </Button>
          <EnrollCourse course={course} rounded="full" size="md" />
          {course.subcourses?.length ? (
            <SubCourses subcourses={course.subcourses} />
          ) : null}

          <Button
            colorScheme={"green"}
            rounded={"full"}
            onClick={() => share("hi")}
          >
            Share
          </Button>
        </Wrap>
      </VStack>
    </Box>
  );
}

export default CourseCard;
