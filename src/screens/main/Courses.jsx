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
import { fetchCoursesByCategory } from "../../services";
import CourseCard from "../../components/courses/CourseCard";
import CoursesSkeleton from "../../components/courses/CoursesSkeleton";
import Error from "../../components/shared/Error";
import TrainingSchedule from "../../components/courses/TrainingSchedule";
import FilterCourse from "../../components/courses/FilterCourse";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const query = useQuery(["courses", category, page], () =>
    fetchCoursesByCategory(page, category)
  );

  const handlePagination = (url) => {
    const u = new URL(url);
    const page = u.searchParams.get("page");
    setSearchParams({ category, page: page });
  };

  useEffect(() => {
    setSearchParams({ category: "NON MEDICAL", page: 1 });
  }, []);

  return (
    <Container maxW="container.xl" py={12}>
      <Flex direction={["column", "column", "row"]} justify={"space-between"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Courses
        </Heading>

        <Flex
          direction={["column", "column", "row"]}
          gap={4}
          flexGrow={1}
          justify={["center", "center", "flex-end"]}
        >
          <TrainingSchedule />
          <FilterCourse />
        </Flex>
      </Flex>

      {query?.data && (
        <SimpleGrid mt={12} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {query.data.results.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </SimpleGrid>
      )}
      {query.isLoading && <CoursesSkeleton mt={12} spacing={6} />}
      {query.isError && <Error code={500} message={query.error} />}
      {query?.data && (
        <Box mt={12}>
          <HStack>
            <Button
              disabled={!query.data.previous}
              onClick={() => handlePagination(query.data.previous)}
            >
              Prev
            </Button>
            <Button
              disabled={!query.data.next}
              onClick={() => handlePagination(query.data.next)}
            >
              Next
            </Button>
          </HStack>
        </Box>
      )}
    </Container>
  );
}

export default Courses;
