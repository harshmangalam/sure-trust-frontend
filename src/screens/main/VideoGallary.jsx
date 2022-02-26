import {
  Container,
  Grid,
  GridItem,
  Heading,
  AspectRatio,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import Error from "../../components/shared/Error";
import Loader from "../../components/shared/Loader";
import { fetchVideos } from "../../services";

function PhotoGallery() {
  const query = useQuery("video-gallery", fetchVideos);

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
        {query.data.map((video) => (
          <GridItem>
            <AspectRatio maxW="560px" ratio={1}>
              <Box
                as={"iframe"}
                rounded={"xl"}
                title="video"
                src={`https://www.youtube.com/embed/${video.video_name}`}
                allowFullScreen
              ></Box>
            </AspectRatio>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default PhotoGallery;
