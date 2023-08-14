import { Box, Heading, Container } from "@chakra-ui/react";
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
