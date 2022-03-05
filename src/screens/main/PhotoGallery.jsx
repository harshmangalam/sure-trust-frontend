import {
  Container,
  Image,
  Grid,
  GridItem,
  Heading,
  AspectRatio,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import Loader from "../../components/shared/Loader";
import Error from "../../components/shared/Error";

import { fetchImages } from "../../services";
import { useState } from "react";
import ImageModal from "../../components/main/ImageModal";
function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(null);
  const [pageUrl, setPageUrl] = useState("");
  const query = useQuery(["image-gallery", pageUrl], () =>
    fetchImages(pageUrl)
  );

  if (query.isLoading) {
    return <Loader />;
  }

  if (query.isError) {
    return <Error message={"Something went wrong"} code={500} />;
  }
  return (
    <Container maxW={"container.xl"} py={12}>
      <Heading>Picture Gallery</Heading>
      <Grid
        gap={4}
        my={4}
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
      >
        {query.data.results.map((image) => (
          <GridItem key={image.id}>
            <AspectRatio ratio={1}>
              <Image
                mt={2}
                verticalAlign={"middle"}
                rounded={"xl"}
                src={image.images}
                alt={image.image_name}
                maxH={400}
                cursor={"pointer"}
                onClick={() => setCurrentImage(image)}
              />
            </AspectRatio>
          </GridItem>
        ))}
      </Grid>

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
      {currentImage && (
        <ImageModal image={currentImage} setImage={setCurrentImage} />
      )}
    </Container>
  );
}

export default PhotoGallery;
