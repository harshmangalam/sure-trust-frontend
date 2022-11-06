import { Box, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import PostCard from "../../components/blog/PostCard";

const Posts = () => {
  return (
    <Box maxW={"container.xl"} p="2">
      <Heading as="h2" marginTop="4">
        Posts
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8} mt={4}>
        {Array(6)
          .fill(0)
          .map((post) => (
            <GridItem>
              <PostCard />
            </GridItem>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Posts;
