import {
  Container,
  Grid,
  GridItem,
  Heading,
  AspectRatio,
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
      <Grid
        columnGap={2}
        rowGap={2}
        my={4}
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
      >
        {query.data.map((video) => (
          <GridItem>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe title="naruto" src={video.videos} allowFullScreen />
            </AspectRatio>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default PhotoGallery;
