import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchCourses, fetchCoursesSchedule } from "../../services";
import CourseCard from "../../components/courses/CourseCard";
import CoursesSkeleton from "../../components/courses/CoursesSkeleton";
import Error from "../../components/shared/Error";
import { useState } from "react";
function Courses() {
  const [courseModal, setCourseModal] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const query = useQuery(["courses", pageUrl], () => fetchCourses(pageUrl));
  const courseSchedule = useQuery("courseSchedule", fetchCoursesSchedule);

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
        <Button
          rounded={"full"}
          colorScheme={"twitter"}
          onClick={() => setCourseModal(true)}
          display={["none", "block"]}
        >
          Course Schedule
        </Button>
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

      <Modal
        onClose={() => setCourseModal(false)}
        size={"full"}
        isOpen={courseModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Course Schedule</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box
              mt={12}
              as="object"
              w="100%"
              h="70vh"
              data={courseSchedule?.data[0]?.shedule}
              type="application/pdf"
            >
              <Box
                as="iframe"
                src={courseSchedule?.data[0]?.shedule}
                w="full"
                h="70vh"
              ></Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setCourseModal(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Courses;
