import { Heading, VStack, useColorModeValue, Box, Tag } from "@chakra-ui/react";
import BatchCourse from "../../components/batches/BatchCourse";
function BatchCard({ batch }) {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Box
      key={batch.id}
      p={6}
      border="2px"
      borderColor="blue.500"
      bg={cardBg}
      rounded="xl"
    >
      <VStack spacing={4} align="start">
        <Heading size="md">{batch.batch_name}</Heading>

        <Tag variant="solid" colorScheme="blue">
          {batch.students.length} / {batch.limit}
        </Tag>

        <BatchCourse course={batch.course} />
      </VStack>
    </Box>
  );
}

export default BatchCard;
