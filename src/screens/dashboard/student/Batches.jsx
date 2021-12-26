import { Box, SimpleGrid, GridItem, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchStudentBatches } from "../../../services";
import Error from "../../../components/shared/Error";
import BatchCard from "../../../components/dashboard/student/BatchCard";

function Batches() {
  const batches = useQuery("studentBatches", fetchStudentBatches);

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
            <BatchCard batch={batch}  />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Batches;
