import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import CoordinatorCard from "../../../components/main/iery/CoordinatorCard";
import ProjectCard from "../../../components/main/iery/ProjectCard";

export default function IeryDomain() {
  return (
    <Container maxW={"container.xl"} py={6}>
      <Box>
        <Heading fontSize={"3xl"}>Coordinators</Heading>
        <SimpleGrid columns={[1, 2, 3]} mt={4} spacing={4}>
          {[...new Array(3)].map((user) => (
            <CoordinatorCard
              bio={
                "Executive Director and Founder - SURE Trust; Retd Professor-Dept of Management & Commerce, SSSIHL, Puttaparthi"
              }
              profileImage="https://platform.suretrustforruralyouth.com/media/gallery/radha_mam.webp"
              linkedinUrl={
                "https://www.linkedin.com/in/prof-radhakumari-challa-a3850219b"
              }
              name="Prof. Radhakumari Challa"
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={10}>
        <Heading fontSize={"3xl"}>Projects</Heading>
        <SimpleGrid columns={[1, 2, 3]} mt={4} spacing={4}>
          {[...new Array(9)].map((project) => (
            <ProjectCard />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
