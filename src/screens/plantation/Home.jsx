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
  HStack,
  Tooltip,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuthState } from "../../contexts/auth";
import CoursePlantation from "../../components/plantation/CoursePlantation";
import OverviewCard from "../../components/plantation/OverviewCard";
import { HiOutlineUser } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { GiPlantRoots } from "react-icons/gi";
import OverviewChart from "../../components/plantation/OverviewChart";
import { useQuery } from "react-query";
import Logo from "../../components/shared/Logo";
import { RiHome2Line } from "react-icons/ri";
import ThemeToggle from "../../components/shared/ThemeToggle";
import CreatePlantation from "../../components/plantation/CreatePlantation";
import {
  fetchPlantationAllowedUsers,
  fetchPlantationCharts,
  fetchPlantationCounts,
  fetchPlantationLists,
} from "../../services";
import { useMemo } from "react";

export default function PlantationHome() {
  const { isAuthenticated, currentUser } = useAuthState();
  const countsQuery = useQuery("plantationCounts", fetchPlantationCounts);
  const plantations = useQuery("plantations", fetchPlantationLists);
  const chartsQuery = useQuery("charts", fetchPlantationCharts);
  const allowedQuery = useQuery("allowed-users", fetchPlantationAllowedUsers);

  const date1 = Number(process.env.REACT_APP_PLANTATION_START_DATE);
  const date2 = Date.now()
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const refetch = () => {
    countsQuery.refetch();
    plantations.refetch();
    chartsQuery.refetch();
  };

  const isAuthorized = useMemo(
    () => allowedQuery?.data?.data.includes(String(currentUser?.id || currentUser?.user?.id)),
    [currentUser, allowedQuery]
  );

  return (
    <Box minH="100vh">
      <Flex
        as={"nav"}
        maxW="container.xl"
        mx={"auto"}
        py={2}
        justify="space-between"
        align={"center"}
        px={[2]}
      >
        <Logo />
        <HStack>
          <Tooltip label="Home">
            <IconButton as={Link} to="/">
              <RiHome2Line size={20} />
            </IconButton>
          </Tooltip>

          {isAuthenticated && isAuthorized && (
            <CreatePlantation refetch={refetch} />
          )}

          <ThemeToggle />
        </HStack>
      </Flex>
      <Container py={"16"} maxW={"container.xl"}>
        <Heading fontSize={"3xl"}>
          Plantation Project - Each One Plant One
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={"4"} mt={"8"}>
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
    </Box>
  );
}
