import { Box, Container, HStack } from "@chakra-ui/react";
import StoryCard from "../../story/StoryCard";
import AliceCarousel from "react-alice-carousel";
export default function Stories() {
  const stories = [...new Array(6)].map((_, i) => (
    <Box mx={2}>
      <StoryCard key={i} />
    </Box>
  ));
  return (
    <Box as="section" mt={24}>
      <Container maxW={"container.xl"}>
        <AliceCarousel
          autoPlay
          autoPlayInterval={2000}
          autoPlayStrategy="default"
          mouseTracking
          items={stories}
          controlsStrategy="default"
          responsive={{
            0: {
              items: 1,
            },
            480: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1280: {
              items: 3,
            },
          }}
        />
      </Container>
    </Box>
  );
}
