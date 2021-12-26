import {
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import Error from "../../components/shared/Error";
import { useParams } from "react-router-dom";
import { useAuthState } from "../../contexts/auth";
import { fetchCourseById, fetchCourseTeachers } from "../../services";
import CourseSkeleton from "../../components/courses/CourseSkeleton";
import CourseCard from "../../components/courses/CourseCard";
import CourseTeacher from "../../components/courses/CourseTeacher";

function Course() {
  const { id } = useParams();
  const { role, isAuthenticated } = useAuthState();
  const query = useQuery(["courses", id], () => fetchCourseById(id));
  const teacherQuery = useQuery(["courseTeachers", id], () =>
    fetchCourseTeachers(id)
  );

  if (query.isLoading) {
    return <CourseSkeleton />;
  }

  if (query.isError) {
    return <Error code={500} message="Something went wrong" />;
  }

  return (
    <Box>
      <Container maxW="container.xl">
        <VStack>
          <Heading textAlign={"center"}>{query.data.course_name}</Heading>
          <Text>{query.data.prerequisites}</Text>
          {!query.data.subcourses?.length &&
            isAuthenticated &&
            role === "student" && (
              <Button colorScheme={"blue"} size={"lg"}>
                Enroll Now
              </Button>
            )}
        </VStack>

        {query.data.subcourses?.length ? (
          <Box mt={24}>
            <Heading>Sub Courses</Heading>
            <SimpleGrid mt={12} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {query.data.subcourses.map((course) => (
                <GridItem key={course.id}>
                  <CourseCard course={course} />
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>
        ) : null}

        {teacherQuery?.data && (
          <Box mt={24}>
            <Heading>Course Teachers</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
              {teacherQuery.data.map((teacher) => (
                <CourseTeacher teacher={teacher} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Container>
      {query.data.syllabus && (
        <Box
          mt={24}
          as="object"
          w="full"
          h="2xl"
          data={query.data.syllabus}
          type="application/pdf"
        >
          <Box as="iframe" src={query.data.syllabus} w="full" h="xl"></Box>
        </Box>
      )}
    </Box>
  );
}

export default Course;
