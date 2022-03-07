import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchVideos } from "../../../../services";

export default function Video() {
  const query = useQuery("home-videos", () => fetchVideos());

  if (query.isLoading) {
    return <p>Loading Videos...</p>;
  }

  if (query.isError) {
    return <p>Error while loading videos</p>;
  }
  return (
    <SimpleGrid zIndex="2" mt={8} columns={[1, 1, 2, 3]} spacing={10}>
      {query.data.results.slice(0,3).map((video) => (
        <GridItem>
          <Box
          rounded="xl"
            as="iframe"
            title="Sure Trust Videos"
            w="100%"
            h="sm"
            src={`https://www.youtube.com/embed/${video.video_name}`}
          ></Box>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
