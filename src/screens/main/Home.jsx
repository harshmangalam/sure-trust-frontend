import { Box, Heading, Container } from "@chakra-ui/react";
import Features from "../../components/main/home/Features";
import Collaborators from "../../components/main/home/Collaborators";
import Hero from "../../components/main/home/Hero";
import StatsCount from "../../components/main/home/StatsData";
import ProjectsSlider from "../../components/main/home/projects-slider";
import Events from "../../components/main/home/events";
// import Stories from "../../components/main/home/Stories";

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

      <StatsCount />
      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Events />
        </Container>
      </Box>

      {/* projects slider  */}
      <ProjectsSlider />

      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Features />
        </Container>
      </Box>

      {/* stories  */}
      {/* <Stories /> */}

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
