import { Box, SimpleGrid, Stack, Button, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import Error from "../../../components/shared/Error";
import PostCard from "../../../components/dashboard/student/PostCard";
import { fetchBatchPosts } from "../../../services";
import { IoVideocamOutline, IoAdd } from "react-icons/io5";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { useState } from "react";
function Posts() {
  const [page, setPage] = useState(1);
  const { batchId, courseId } = useParams();
  const posts = useQuery(
    ["teacherBatchPosts", batchId, page],
    () => fetchBatchPosts(batchId, page),
    { keepPreviousData: true }
  );

  if (posts.isLoading) {
    return <p>Loading...</p>;
  }

  if (posts.isError) {
    return <Error code={500} message={"Something went wrong"} />;
  }
  return (
    <Box p={4}>
      <Heading>Posts</Heading>

      <SimpleGrid
        mt={12}
        columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
        spacing={6}
      >
        {posts.data?.results.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>

      {posts.data.length ? (
        <Stack direction="row" justify={"center"} mt={6} spacing={6}>
          <Button
            colorScheme="blue"
            leftIcon={<HiOutlineArrowNarrowLeft size="24px" />}
            disabled={!posts.data?.previous}
            onClick={() => {
              if (posts.data?.previous) {
                setPage((prevPage) => prevPage - 1);
              }
            }}
          >
            Previous
          </Button>

          <Button
            colorScheme="blue"
            leftIcon={<HiOutlineArrowNarrowRight size="24px" />}
            disabled={!posts.data?.next}
            onClick={() => {
              if (posts.data?.next) {
                setPage((nextPage) => nextPage + 1);
              }
            }}
          >
            Next
          </Button>
        </Stack>
      ) : (
        <p>No Posts</p>
      )}
    </Box>
  );
}

export default Posts;
