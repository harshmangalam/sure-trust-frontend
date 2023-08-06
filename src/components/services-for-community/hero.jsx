import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

export default function CommunityServiceHero() {
  return (
    <Box
      bgGradient="linear(to-l,#FF0080, #7928CA)"
      minH={"60vh"}
      display="grid"
      placeItems="center"
      color={"white"}
    >
      <Container maxW="container.md">
        <Stack as={Box} textAlign={"center"} spacing={"4"}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Services For <Text as={"span"}>Community</Text>
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            asperiores libero in esse optio laudantium dolor saepe hic
            accusantium cupiditate earum, voluptatibus sunt, tempore, laborum
            modi quasi nemo nobis! Ducimus.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
