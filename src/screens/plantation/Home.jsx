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
  fetchPlantationCharts,
  fetchPlantationCounts,
  fetchPlantationLists,
} from "../../services";

export default function PlantationHome() {
  const countsQuery = useQuery("plantationCounts", fetchPlantationCounts);
  const plantations = useQuery("plantations", fetchPlantationLists);
  const chartsQuery = useQuery("charts", fetchPlantationCharts);

  const date1 = new Date(2022, 8, 1);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const refetch = () => {
    countsQuery.refetch();
    plantations.refetch();
    chartsQuery.refetch();
  };
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

          <CreatePlantation refetch={refetch} />

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
