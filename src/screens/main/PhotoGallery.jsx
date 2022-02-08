import { Container, Image, Grid, GridItem, Heading } from "@chakra-ui/react";

function PhotoGallery() {
  return (
    <Container maxW={"container.xl"}>
      <Heading>Picture Gallary</Heading>
      <Grid
        columnGap={2}
        my={4}
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
      >
        {[...Array(10).keys()].map((image, i) => (
          <GridItem>
            <Image
              mt={2}
              verticalAlign={"middle"}
              rounded={"xl"}
              src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default PhotoGallery;
