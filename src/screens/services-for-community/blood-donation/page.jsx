import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import ServiceStat from "../../../components/services-for-community/service-stat";
import { MdOutlineBloodtype } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useQuery } from "react-query";
import {
  fetchBloodDonationStats,
  getBloodDonation,
} from "../../../services/commuinity-service";
import Loader from "../../../components/shared/Loader";
import ServiceCard from "../../../components/services-for-community/service-card";
import { useSearchParams } from "react-router-dom";
import { fetchPlantationAllowedUsers } from "../../../services";
import { useMemo } from "react";
import { useAuthState } from "../../../contexts/auth";
import BloodDonationForm from "../../../components/services-for-community/blood-donation-form";
import ServiceCharts from "../../../components/services-for-community/service-charts";
import { BiBookReader } from "react-icons/bi";
import { calculateTimeDifferenceFromNow } from "../../../utils/date-time";
export default function BloodDonation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const diffDays = calculateTimeDifferenceFromNow(1665253800000);
  const page = searchParams.get("page") ?? 1;
  const { data, isLoading, isError, refetch } = useQuery(
    ["blood_donations", page],
    () => getBloodDonation(page)
  );
  const bloodDonationStatQuery = useQuery(
    ["blood_donation_graphs"],
    fetchBloodDonationStats
  );
  const allowedQuery = useQuery("allowed-users", fetchPlantationAllowedUsers);
  const { isAuthenticated, currentUser } = useAuthState();

  const isAuthorized = useMemo(
    () =>
      allowedQuery?.data?.data.includes(
        String(currentUser?.id || currentUser?.user?.id)
      ),
    [currentUser, allowedQuery]
  );

  const handlePagination = (url) => {
    const u = new URL(url);
    const pageParams = u.searchParams.get("page") ?? +page - 1;
    setSearchParams({ page: pageParams });
  };

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
        <Flex align={"center"} justify={"space-between"} mb={8}>
          <Heading fontSize={"3xl"}>Blood Donation</Heading>
          {isAuthenticated && isAuthorized && (
            <Flex justifyContent={"flex-end"}>
              <BloodDonationForm refetch={refetch} />
            </Flex>
          )}
        </Flex>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <GridItem>
            <ServiceStat
              icon={AiOutlineFieldTime}
              count={diffDays}
              label={"Days"}
            />
          </GridItem>
          <GridItem>
            <ServiceStat
              color="red.800"
              count={data?.data?.count}
              label={"Blood donars"}
              icon={MdOutlineBloodtype}
            />
          </GridItem>
          <GridItem>
            <ServiceStat
              color="blue.800"
              count={bloodDonationStatQuery.data?.data?.Result?.length}
              label={"Courses"}
              icon={BiBookReader}
            />
          </GridItem>
        </SimpleGrid>

        {bloodDonationStatQuery.isError && (
          <div>Error while loading graphs</div>
        )}
        {bloodDonationStatQuery.isLoading && <div>Loading graphs...</div>}
        <Box py={12}>
          {bloodDonationStatQuery.data?.data && (
            <ServiceCharts payload={bloodDonationStatQuery.data.data.Result} />
          )}
        </Box>

        <SimpleGrid columns={[1, 1, 2, 3]} gap={4} mt={6}>
          {data.data?.results?.map((result) => (
            <GridItem h={"full"}>
              <ServiceCard
                batch={result.batch_name ?? ""}
                course={result.course_name ?? ""}
                name={result.donar_name}
                role={result.user_role?.split("_").join(" ")}
                image={result.image_url}
              />
            </GridItem>
          ))}
        </SimpleGrid>
        <Box mt={6}>
          <HStack>
            <Button
              disabled={!data.data.previous}
              onClick={() => handlePagination(data.data.previous)}
            >
              Prev
            </Button>
            <Button
              disabled={!data.data.next}
              onClick={() => handlePagination(data.data.next)}
            >
              Next
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
