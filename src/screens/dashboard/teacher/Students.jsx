import { Box, GridItem, SimpleGrid, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchTeacherBatchStudents } from "../../../services";

import Error from "../../../components/shared/Error";
import StudentCard from "../../../components/dashboard/teacher/StudentCard";
import { useParams } from "react-router-dom";
function Students() {
  const { batchId } = useParams();
  const students = useQuery(["teacherBatchStudents", batchId], () =>
    fetchTeacherBatchStudents(batchId)
  );

  if (students.isLoading) {
    return <p>Loading...</p>;
  }

  if (students.isError) {
    return <Error code={500} message="Something went wrong" />;
  }
  return (
    <Box p={4}>
      <Heading>Students</Heading>
      <SimpleGrid mt={12} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {students.data.map((student) => (
          <GridItem key={student.id}>
            <StudentCard student={student} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Students;
