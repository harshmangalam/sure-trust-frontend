import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import CoursePlantation from "../../components/main/plantation/CoursePlantation";
import OverviewCard from "../../components/main/plantation/OverviewCard";
import { HiOutlineUser } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { GiPlantRoots } from "react-icons/gi";
import OverviewChart from "../../components/main/plantation/OverviewChart";
import CreatePlantation from "../../components/main/plantation/CreatePlantation";
import { useQuery } from "react-query";
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
  };
  return (
    <Container py={"16"} maxW={"container.xl"}>
      <Flex justify={"flex-end"}>
        <CreatePlantation refetch={refetch} />
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
      {chartsQuery?.data?.data?.length > 0 ? (
        <Box w="full" h={"full"} mt={"16"}>
          <OverviewChart plants={chartsQuery?.data?.data} />
        </Box>
      ) : null}

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
