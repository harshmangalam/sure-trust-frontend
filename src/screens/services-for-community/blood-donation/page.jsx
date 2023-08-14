import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import ServiceStat from "../../../components/services-for-community/service-stat";
import { MdOutlineBloodtype } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useQuery } from "react-query";
import { getBloodDonation } from "../../../services/commuinity-service";
import Loader from "../../../components/shared/Loader";
export default function BloodDonation() {
  const { data, isLoading, isError } = useQuery(
    "getBloodDonation",
    getBloodDonation
  );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <SimpleGrid columns={[3]} spacing={6}>
          <GridItem>
            <ServiceStat icon={AiOutlineFieldTime} count={1} label={"Days"} />
          </GridItem>
          <GridItem>
            <ServiceStat
              count={data?.data?.count}
              label={"Blood donars"}
              icon={MdOutlineBloodtype}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
