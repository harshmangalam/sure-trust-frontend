import { Box, SimpleGrid, GridItem, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchTeacherBatches } from "../../../services";
import Error from "../../../components/shared/Error";
import BatchCard from "../../../components/dashboard/teacher/BatchCard";
import { useParams } from "react-router-dom";

function Batches() {
  const { courseId } = useParams();
  const batches = useQuery(["teacherBatches", courseId], () =>
    fetchTeacherBatches(courseId)
  );

  if (batches.isLoading) {
    return <p>Loading...</p>;
  }

  if (batches.isError) {
    return <Error code={500} message={"Something went wrong"} />;
  }
  return (
    <Box p={4}>
      <Heading>Batches</Heading>

      <SimpleGrid
        mt={12}
        columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
        spacing={6}
      >
        {batches.data.map((batch) => (
          <GridItem key={batch.id}>
            <BatchCard batch={batch} courseId={courseId} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Batches;
