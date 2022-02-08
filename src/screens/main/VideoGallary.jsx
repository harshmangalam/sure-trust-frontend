import {
  Container,
  Image,
  Grid,
  GridItem,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";

function PhotoGallery() {
  return (
    <Container maxW={"container.xl"}>
      <Heading>Video Gallary</Heading>
      <Grid
        columnGap={2}
        rowGap={2}
        my={4}
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
      >
        {[...Array(10).keys()].map((image, i) => (
          <GridItem>
            <AspectRatio maxW="560px" ratio={1} >
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default PhotoGallery;
