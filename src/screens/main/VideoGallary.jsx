import {
  Container,
  GridItem,
  Heading,
  AspectRatio,
  SimpleGrid,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import Error from "../../components/shared/Error";
import Loader from "../../components/shared/Loader";
import { fetchVideos } from "../../services";

function PhotoGallery() {
  const [pageUrl, setPageUrl] = useState("");
  const query = useQuery(["video-gallery", pageUrl], () =>
    fetchVideos(pageUrl)
  );

  if (query.isLoading) {
    return <Loader />;
  }

  if (query.isError) {
    return <Error message={"Something went wrong"} code={500} />;
  }

  return (
    <Container maxW={"container.xl"} py={12}>
      <Heading>Video Gallery</Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={6} my={4}>
        {query.data.results.map((video) => (
          <GridItem>
            <AspectRatio maxW="560px" ratio={1}>
              <Box
                as={"iframe"}
                rounded={"xl"}
                title="video"
                src={`https://www.youtube.com/embed/${video.video_name}`}
                allowFullScreen
                loading="lazy"
              ></Box>
            </AspectRatio>
          </GridItem>
        ))}
      </SimpleGrid>
      <Box mt={12}>
        <HStack>
          <Button
            disabled={!query.data.previous}
            onClick={() => setPageUrl(query.data.previous)}
          >
            Prev
          </Button>
          <Button
            disabled={!query.data.next}
            onClick={() => setPageUrl(query.data.next)}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}

export default PhotoGallery;
