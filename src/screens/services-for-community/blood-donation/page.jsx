import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import ServiceStat from "../../../components/services-for-community/service-stat";
import { MdOutlineBloodtype } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
export default function BloodDonation() {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <SimpleGrid columns={[3]} spacing={6}>
          <GridItem>
            <ServiceStat icon={AiOutlineFieldTime} count={10} label={"Days"} />
          </GridItem>
          <GridItem>
            <ServiceStat
              count={100}
              label={"Blood donars"}
              icon={MdOutlineBloodtype}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
