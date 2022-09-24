import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchCourses } from "../../services";
import CourseCard from "../../components/courses/CourseCard";
import CoursesSkeleton from "../../components/courses/CoursesSkeleton";
import Error from "../../components/shared/Error";
import { useState } from "react";
import CourseSchedule from "../../components/courses/CourseSchedule";
function Courses() {
  const [pageUrl, setPageUrl] = useState("");
  const query = useQuery(["courses", pageUrl], () => fetchCourses(pageUrl));

  if (query.isLoading) {
    return <CoursesSkeleton />;
  }

  if (query.isError) {
    return <Error code={500} message={query.error} />;
  }

  return (
    <Container maxW="container.xl" py={12}>
      <Flex justify={"space-between"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Courses
        </Heading>
        <CourseSchedule />
      </Flex>

      <SimpleGrid mt={12} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {query.data.results.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </SimpleGrid>
      <Box mt={12}>
        <HStack>
          <Button
            disabled={!query.data.previous}
            onClick={() => setPageUrl(query.data.previous)}
          >
            Prev
          </Button>
          <Button
            disabled={!query.data.next}
            onClick={() => setPageUrl(query.data.next)}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}

export default Courses;
