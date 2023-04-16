import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import DomainCard from "../../../components/main/iery/DomainCard";
// import IERYCFO from "../../../components/main/iery/IERYCFO";
import IERYHero from "../../../components/main/iery/IERYHero";
import { fetchDomains } from "../../../services/iery";
export default function IERYHome() {
  const { data } = useQuery(["domains"], fetchDomains);
  return (
    <Container maxW={"container.xl"} py="8">
      <IERYHero />
      {/* <Box mt={"24"}>
        <IERYCFO />
      </Box> */}
      <Box mt={"24"}>
        <Heading textAlign={"center"}>Domains</Heading>
        {data?.data?.domain_list?.length ? (
          <SimpleGrid columns={[1, 2, 3, 4]} mt={"12"} spacing="4">
            {data?.data?.domain_list?.map((domain) => (
              <GridItem key={domain.id}>
                <DomainCard {...domain} />
              </GridItem>
            ))}
          </SimpleGrid>
        ) : (
          <Text textAlign="center" textColor="GrayText" mt="6">
            No domains
          </Text>
        )}
      </Box>
    </Container>
  );
}
