import { Box, SimpleGrid, GridItem, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchTeacherCourses } from "../../../services";
import CoursePostSkeleton from "../../../components/courses/CoursePostSkeleton";
import Error from "../../../components/shared/Error";
import CourseCard from "../../../components/dashboard/teacher/CourseCard";
function Courses() {
  const courses = useQuery("teacherCourses", fetchTeacherCourses);

  if (courses.isLoading) {
    return <CoursePostSkeleton />;
  }

  if (courses.isError) {
    return <Error code={500} message={"Something went wrong"} />;
  }
  return (
    <Box p={4}>
      <Heading>Courses</Heading>
      <SimpleGrid  mt={12} columns={{ base: 1, md: 1, lg: 2, xl: 3 }} spacing={6}>
        {courses.data.map((course) => (
          <GridItem key={course.id}>
            <CourseCard course={course} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Courses;
