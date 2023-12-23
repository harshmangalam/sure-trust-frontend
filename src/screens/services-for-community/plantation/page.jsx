import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
} from "@chakra-ui/react";
import { useAuthState } from "../../../contexts/auth";
import CoursePlantation from "../../../components/plantation/CoursePlantation";
import OverviewCard from "../../../components/plantation/OverviewCard";
import { HiOutlineUser } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { GiPlantRoots } from "react-icons/gi";
import OverviewChart from "../../../components/plantation/OverviewChart";
import { useQuery } from "react-query";
import CreatePlantation from "../../../components/plantation/CreatePlantation";
import {
  fetchPlantationAllowedUsers,
  fetchPlantationCharts,
  fetchPlantationCounts,
  fetchPlantationLists,
} from "../../../services";
import { useMemo } from "react";
import { calculateTimeDifferenceFromNow } from "../../../utils/date-time";

export default function PlantationHome() {
  const { isAuthenticated, currentUser } = useAuthState();
  const countsQuery = useQuery("plantationCounts", fetchPlantationCounts);
  const plantations = useQuery("plantations", fetchPlantationLists);
  const chartsQuery = useQuery("charts", fetchPlantationCharts);
  const allowedQuery = useQuery("allowed-users", fetchPlantationAllowedUsers);
  const diffDays = calculateTimeDifferenceFromNow(1665253800000);

  const refetch = () => {
    countsQuery.refetch();
    plantations.refetch();
    chartsQuery.refetch();
  };

  const isAuthorized = useMemo(
    () =>
      allowedQuery?.data?.data?.allowedUsers?.includes(
        String(currentUser?.id || currentUser?.user?.id)
      ),
    [currentUser, allowedQuery]
  );

  return (
    <Container maxW={"container.xl"}>
      <Flex align={"center"} justify={"space-between"} mb={8}>
        <Heading fontSize={"3xl"}>
          Plantation Project - Each One Plant Two
        </Heading>
        {isAuthenticated && isAuthorized && (
          <Flex justifyContent={"flex-end"}>
            <CreatePlantation refetch={refetch} />
          </Flex>
        )}
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={"4"}>
        <OverviewCard label={"Days"} count={diffDays} icon={BsCalendar2} />
        <OverviewCard
          label={"Plants"}
          count={countsQuery?.data?.data?.plants}
          icon={GiPlantRoots}
        />
        <OverviewCard
          label={"Planters"}
          count={countsQuery?.data?.data?.users}
          icon={HiOutlineUser}
        />
      </SimpleGrid>
      <Tabs my={"16"} colorScheme="whatsapp">
        <TabList>
          <Tab>Course</Tab>
          <Tab>Batch</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {chartsQuery?.data?.data && (
              <OverviewChart plants={chartsQuery.data.data} />
            )}
          </TabPanel>
          <TabPanel>
            {plantations?.data?.data && (
              <OverviewChart plants={plantations.data.data} />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>

      {plantations?.data?.data?.length > 0 ? (
        <Box mt={"16"}>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
            {plantations?.data?.data?.map((p) => (
              <CoursePlantation {...p} />
            ))}
          </SimpleGrid>
        </Box>
      ) : null}
    </Container>
  );
}
