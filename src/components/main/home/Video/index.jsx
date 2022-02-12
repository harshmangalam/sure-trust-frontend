import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";

export default function Video() {
  return (
    <SimpleGrid zIndex="2" mt={8} columns={[1, 1, 2, 3]} spacing={10}>
      {[...Array(3).keys()].map((video) => (
        <GridItem>
          <Box
            as="iframe"
            title="Sure Trust Videos"
            w="100%"
            h="sm"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
          ></Box>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
