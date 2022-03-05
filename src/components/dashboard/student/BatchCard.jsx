import {
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Box,
  Badge,
  SimpleGrid,
  GridItem,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { exitCourse } from "../../../services";
import ToggleMeet from "./ToggleMeet";
function BatchCard({ batch }) {
  const cardBg = useColorModeValue("white", "gray.700");
  const toast = useToast();
  const navigate = useNavigate()

  const handleExitCourse = async (courseId) => {
    try {
      await exitCourse(courseId);
      toast({
        title: "Course Leave",
        description: "You have no longer access to this course",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/dashboard")
    } catch (error) {
      toast({
        title: "Course Leave",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
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
              {batch.start_date
                ? format(new Date(batch.start_date), "dd MMMM  YYY")
                : "Not Available"}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Start Date
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{batch.start_time || "Not Available"}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Start Time
            </Text>
          </Stack>
        </GridItem>

        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text textAlign="center" fontWeight={600}>
              {batch.end_date
                ? format(new Date(batch.end_date), "dd MMMM  YYY")
                : "Not Available"}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              End Date
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{batch.end_time || "Not Available"}</Text>
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

      <SimpleGrid mt={6} columns={{ base: 1, md: 2 }} spacing={6}>
        <ToggleMeet meeting_code={batch.meeting_code} />
        <Button
          colorScheme={"pink"}
          as={Link}
          to={`/courses/${batch.course?.id}`}
          width={"full"}
        >
          View Course
        </Button>

        <Button
          colorScheme={"green"}
          as={Link}
          to={`/dashboard/batches/${batch?.id}/courses/${batch.course?.id}/posts`}
          width={"full"}
        >
          Posts
        </Button>
        <Button
          colorScheme={"red"}
          onClick={() => handleExitCourse(batch.course?.id)}
          width={"full"}
        >
          Leave Course
        </Button>
      </SimpleGrid>
    </Box>
  );
}

export default BatchCard;
