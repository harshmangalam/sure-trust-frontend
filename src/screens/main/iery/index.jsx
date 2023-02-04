import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import DomainCard from "../../../components/main/iery/DomainCard";
import IERYCFO from "../../../components/main/iery/IERYCFO";
import IERYHero from "../../../components/main/iery/IERYHero";
export default function IERYHome() {
  return (
    <Container maxW={"container.xl"} py="8">
      <IERYHero />
      <Box mt={"24"}>
        <IERYCFO />
      </Box>
      <Box mt={"24"}>
        <Heading textAlign={"center"}>Domains</Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} mt={"12"} spacing="4">
          {[...new Array(9)].map((domain) => (
            <GridItem>
              <DomainCard />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
