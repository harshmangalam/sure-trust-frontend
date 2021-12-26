import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Error from "../../../components/shared/Error";
import PostCard from "../../../components/dashboard/teacher/PostCard";
import { fetchTeacherBatchAssignmentPosts } from "../../../services";

function Posts() {
  const { batchId } = useParams();
  const assignmentPosts = useQuery(
    ["teacherBatchAssignmentPosts", batchId],
    () => fetchTeacherBatchAssignmentPosts(batchId)
  );

  if (assignmentPosts.isLoading) {
    return <p>Loading...</p>;
  }

  if (assignmentPosts.isError) {
    return <Error code={500} message={"Something went wrong"} />;
  }
  return (
    <Box p={4}>
      <Heading>Assigment Posts</Heading>
      <SimpleGrid
        mt={12}
        columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
        spacing={6}
      >
        {assignmentPosts.data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Posts;
