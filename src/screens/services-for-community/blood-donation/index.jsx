import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import ServiceStat from "../../../components/services-for-community/service-stat";
import { MdOutlineBloodtype } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useQuery } from "react-query";
import { fetchBloodDonationStats } from "../../../services/commuinity-service";
import { fetchPlantationAllowedUsers } from "../../../services";
import { useMemo } from "react";
import { useAuthState } from "../../../contexts/auth";
import BloodDonationForm from "../../../components/services-for-community/blood-donation-form";
import ServiceCharts from "../../../components/services-for-community/service-charts";
import { BiBookReader } from "react-icons/bi";
import { calculateTimeDifferenceFromNow } from "../../../utils/date-time";
import CourseCard from "../../../components/services-for-community/course-card";
export default function BloodDonation() {
  const diffDays = calculateTimeDifferenceFromNow(1692748800000);
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
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Flex align={"center"} justify={"space-between"} mb={8}>
          <Heading fontSize={"3xl"}>Blood Donation</Heading>
          {isAuthenticated && isAuthorized && (
            <Flex justifyContent={"flex-end"}>
              <BloodDonationForm />
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
              count={bloodDonationStatQuery.data?.data?.Result.reduce(
                (prev, acc) => prev + acc.count,
                0
              )}
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
            <ServiceCharts
              label={"Blood donation"}
              text={"Donar"}
              payload={bloodDonationStatQuery.data.data.Result}
            />
          )}
        </Box>

        <Box py={12}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {bloodDonationStatQuery.data?.data?.Result?.length &&
              bloodDonationStatQuery.data?.data?.Result.map((data) => (
                <CourseCard
                  href={`/services-for-community/blood-donation/details/?courseName=${encodeURIComponent(
                    data.course_name
                  )}`}
                  key={data.course_name}
                  {...data}
                />
              ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
