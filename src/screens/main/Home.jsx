import { Box, Heading, Text, SimpleGrid, Container } from "@chakra-ui/react";

import { uniquenessTrainings } from "../../data/uniquenessTrainings";
import Features from "../../components/main/home/Features";
import Collaborators from "../../components/main/home/Collaborators";
import Hero from "../../components/main/home/Hero";
function Home() {
  return (
    <Box>
      {/* Welcome section  */}
      <Box as="section">
        <Container maxW={"container.xl"}>
          <Hero />
        </Container>
      </Box>

      {/* Features section */}

      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Features />
        </Container>
      </Box>

      {/* Uniqueness Of Our Training  */}

      <Box as="section" mt={12}>
        <Container maxW={"container.xl"}>
          <Heading fontSize={"3xl"}>Uniqueness Of Our Training</Heading>

          <SimpleGrid spacing={4} columns={[1, 1, 2, 3]} mt={6}>
            {uniquenessTrainings.map((uniquenessTraining, i) => (
              <Box
                key={i}
                spacing={6}
                p={8}
                boxShadow={"2xl"}
                textAlign={"center"}
                rounded={"xl"}
                display={"grid"}
                placeItems={"center"}
                border="1px"
                borderColor={"blue.500"}
              >
                <Text fontSize={"xl"} textAlign={"center"}>
                  {uniquenessTraining.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* collaborators */}

      <Box mt={12} mb={12}>
        <Container maxW="container.xl">
          <Heading fontSize={"3xl"}>Collaborators</Heading>
          <Collaborators />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
