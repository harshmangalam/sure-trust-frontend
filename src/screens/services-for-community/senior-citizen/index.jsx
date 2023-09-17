import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import ServiceStat from "../../../components/services-for-community/service-stat";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useQuery } from "react-query";
import { fetchSeniorCitizenStats, fetchAllowedUsers } from "../../../services";
import { useMemo } from "react";
import { useAuthState } from "../../../contexts/auth";
import ServiceCharts from "../../../components/services-for-community/service-charts";
import { BiBookReader } from "react-icons/bi";
import { calculateTimeDifferenceFromNow } from "../../../utils/date-time";
import CourseCard from "../../../components/services-for-community/course-card";
import SeniorCitizenForm from "../../../components/services-for-community/senior-citizen-form";
import { FaUsers } from "react-icons/fa";
export default function BloodDonation() {
  const diffDays = calculateTimeDifferenceFromNow(1692748800000);
  const query = useQuery(["senior-citizen-graphs"], fetchSeniorCitizenStats);
  const allowedQuery = useQuery("allowed-users", fetchAllowedUsers);
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
          <Heading fontSize={"3xl"}>Senior Citizen</Heading>
          {isAuthenticated && isAuthorized && (
            <Flex justifyContent={"flex-end"}>
              <SeniorCitizenForm />
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
              color="blue.800"
              count={query.data?.data?.Result.reduce(
                (prev, acc) => prev + acc.count,
                0
              )}
              label={"Volunteers"}
              icon={FaUsers}
            />
          </GridItem>
          <GridItem>
            <ServiceStat
              color="blue.800"
              count={query.data?.data?.Result?.length}
              label={"Courses"}
              icon={BiBookReader}
            />
          </GridItem>
        </SimpleGrid>

        {query.isError && <div>Error while loading graphs</div>}
        {query.isLoading && <div>Loading graphs...</div>}
        <Box py={12}>
          {query.data?.data && (
            <ServiceCharts
              text={"Senior citizen"}
              label={"Volunteers"}
              payload={query.data.data.Result}
            />
          )}
        </Box>

        <Box py={12}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {query.data?.data?.Result?.length &&
              query.data?.data?.Result.map((data) => (
                <CourseCard
                  href={`/services-for-community/senior-citizen/${data.course_name}`}
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
