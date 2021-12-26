import { Container, Grid, Heading, Box } from "@chakra-ui/react";
import DeveloperCard from "../../components/main/DeveloperCard";
import {
  developers,
  frontendManager,
  backendManager,
} from "../../data/developers";
function Developers() {
  return (
    <Container maxW={"container.xl"}>
      <Heading>Website Maintenance and Management</Heading>
      <Box mt={12}>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          gridGap={6}
        >
          <DeveloperCard developer={backendManager} />

          <DeveloperCard developer={frontendManager} />
        </Grid>
      </Box>
      <Box mt={24}>
        <Heading>Developers</Heading>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gridGap={6}
          mt={12}
        >
          {developers.map((developer) => (
            <DeveloperCard developer={developer} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Developers;
