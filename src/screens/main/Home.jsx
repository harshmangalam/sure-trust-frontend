import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Container,
  Image,
} from "@chakra-ui/react";

// import ReviewCarousel from "../../components/main/home/ReviewCarousel"
import { uniquenessTrainings } from "../../data/uniquenessTrainings";
import { collaborators } from "../../data/collaborators";

import Caption from "../../components/main/home/Caption";
import Features from "../../components/main/home/Features";
import Video from "../../components/main/home/Video";

function Home() {
  return (
    <Box>
      {/* Welcome section  */}
      <Box
        as="section"
        minH={"85vh"}
        display={"grid"}
        placeItems={"center"}
        bgImage="https://img.freepik.com/free-vector/abstact-hexagon-background-memphis-style_1017-31955.jpg?w=996"
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Caption />
      </Box>

      {/* Features section */}

      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Features
          </Heading>

          <Box mt={12}>
            <Features />
          </Box>
        </Container>
      </Box>

      {/* Uniqueness Of Our Training  */}

      <Box as="section" my={24}>
        <Container maxW={"container.xl"}>
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Uniqueness Of Our Training
          </Heading>

          <SimpleGrid spacing={10} columns={[1, 1, 2, 3]} mt={12}>
            {uniquenessTrainings.map((uniquenessTraining, i) => (
              <Box
                spacing={6}
                p={8}
                boxShadow={"2xl"}
                textAlign={"center"}
                rounded={"xl"}
                display={"grid"}
                placeItems={"center"}
                border="1px"
                borderColor={"purple.500"}
              >
                <Image src={uniquenessTraining.image} h="xs" w="100%" />
                <Text fontSize={"xl"} textAlign={"center"}>
                  {uniquenessTraining.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Google Ratings  */}

      {/* <Box mt={24} p={12} bg={useColorModeValue("gray.100", "gray.700")}>
        <Box maxW={"container.xl"}>
          <VStack>
            <Heading>Google Reviews</Heading>
            <Text>We have been working with students around the world</Text>
          </VStack>
          <Box mt={12} maxW={"md"} mx="auto">
            <ReviewCarousel />
          </Box>
        </Box>
      </Box> */}

      {/* collaborators */}

      {/* videos collections  */}

      <Box as="section" my={24}>
        <Container maxW={"container.xl"}>
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Videos
          </Heading>
          <Box mt={12}>
            <Video />
          </Box>
        </Container>
      </Box>

      <Box my={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Collaborators
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
            {collaborators.map((collaborator) => (
              <GridItem key={collaborator.name}>
                <a rel="noreferrer" href={collaborator.link} target={"_blank"}>
                  <Box
                    border="2px"
                    rounded="xl"
                    borderColor="pink.500"
                    p={6}
                    bgGradient="linear(to-l, purple.500, blue.500)"
                    boxShadow={"2xl"}
                    textAlign={"center"}
                    cursor="pointer"
                  >
                    <Text
                      as="a"
                      href={collaborator.link}
                      target="_blank"
                      fontSize="xl"
                      textAlign="center"
                      color="white"
                      fontWeight={"bold"}
                    >
                      {collaborator.name}
                    </Text>
                  </Box>
                </a>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
