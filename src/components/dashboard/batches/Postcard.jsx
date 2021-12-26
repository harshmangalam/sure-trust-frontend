import {
    Heading,
    Text,
    VStack,
    useColorModeValue,
    Button,
    Box,
    SimpleGrid,
    GridItem,
    Stack,
    Wrap,
  } from "@chakra-ui/react";
  import { format } from "date-fns";
  import { Link, useParams } from "react-router-dom";
  function CourseCard({ post }) {
    const { batchId, courseId } = useParams();
    const cardBg = useColorModeValue("white", "gray.700");
    return (
      <Box p={6} border="2px" borderColor="blue.500" bg={cardBg} rounded="xl">
        <VStack spacing={1}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {post.title}
          </Heading>
          <Text
            textAlign="center"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {post.content}
          </Text>
        </VStack>
  
        <SimpleGrid
          mt={12}
          columns={{ base: 1 }}
          spacing={6}
          justifyContent="center"
        >
          <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text textAlign="center" fontWeight={600}>
                {post.type}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Post Type
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text textAlign="center" fontWeight={600}>
                {post.file || "Not Available"}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Post File
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text textAlign="center" fontWeight={600}>
                {format(new Date(post.date_time), "dd MMMM  YYY")}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Posted Date
              </Text>
            </Stack>
          </GridItem>
        </SimpleGrid>
  
        <Wrap mt={6} justify="center">
          <Button
            as={Link}
            to={`/dashboard/courses/${courseId}/batches/${batchId}/posts/${post.id}/grades`}
            colorScheme="blue"
         >
            Grades
          </Button>
        </Wrap>
      </Box>
    );
  }
  
  export default CourseCard;
  