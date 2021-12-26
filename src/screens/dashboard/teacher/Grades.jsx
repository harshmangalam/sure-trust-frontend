import { Box, SimpleGrid, Heading, GridItem } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Error from "../../../components/shared/Error";
import PostGradeCard from "../../../components/dashboard/teacher/PostGradeCard";
import { fetchTeacherBatchGrades } from "../../../services";

function Grades() {
  const { postId } = useParams();
  const grades = useQuery(["teacherBatchGrades", postId], () =>
    fetchTeacherBatchGrades(postId)
  );

  if (grades.isLoading) {
    return <p>Loading...</p>;
  }

  if (grades.isError) {
    return <Error code={500} message={"Something went wrong"} />;
  }
  return (
    <Box p={4}>
      <Heading>Grades</Heading>
      <SimpleGrid mt={12}columns={{ base: 1, md: 1, lg: 2, xl: 3 }} spacing={6}>
        {grades.data.map((grade) => (
          <GridItem key={grade.id}>
            <PostGradeCard grade={grade} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Grades;
