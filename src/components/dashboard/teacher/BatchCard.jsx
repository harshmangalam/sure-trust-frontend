import {
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Box,
  Wrap,
  Badge,
  SimpleGrid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
function BatchCard({ courseId, batch }) {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Box p={6} border="2px" borderColor="blue.500" bg={cardBg} rounded="xl">
      <VStack spacing={1}>
        <Heading>{batch.batch_name}</Heading>
        <Text>
          <Badge colorScheme={batch.is_active ? "green" : "red"}>
            {batch.is_active ? "Active" : "Not Active"}
          </Badge>
        </Text>
      </VStack>

      <SimpleGrid
        mt={12}
        columns={{ base: 2, md: 2 }}
        spacing={6}
        justifyContent="center"
      >
        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{batch.students?.length}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Total Students
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{batch.limit}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Students Limit
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text textAlign="center" fontWeight={600}>
              {format(new Date(batch.start_date), "dd MMMM  YYY")}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Start Date
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{batch.start_time}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Start Time
            </Text>
          </Stack>
        </GridItem>

        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text textAlign="center" fontWeight={600}>
              {format(new Date(batch.end_date), "dd MMMM  YYY")}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              End Date
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{batch.end_time}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              End Time
            </Text>
          </Stack>
        </GridItem>

        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>
              {batch.meeting_code || "Not Available"}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Meeting Code
            </Text>
          </Stack>
        </GridItem>
      </SimpleGrid>

      <Wrap mt={6} justify="center">
        <Button
          colorScheme={"blue"}
          rounded={"full"}
          as={Link}
          to={`/dashboard/courses/${courseId}/batches/${batch.id}/students`}
        >
          Students
        </Button>

        <Button
          colorScheme={"green"}
          rounded={"full"}
          as={Link}
          to={`/dashboard/courses/${courseId}/batches/${batch.id}/posts`}
        >
          Posts
        </Button>

        <Button
          colorScheme={"purple"}
          rounded={"full"}
          as={Link}
          to={`/dashboard/courses/${courseId}/batches/${batch.id}/assignment-posts`}
        >
          Assigment Posts
        </Button>
      </Wrap>
    </Box>
  );
}

export default BatchCard;
