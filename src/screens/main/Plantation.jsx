import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import CoursePlantation from "../../components/main/plantation/CoursePlantation";
import OverviewCard from "../../components/main/plantation/OverviewCard";
import { HiOutlineUser, HiPlus } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { GiPlantRoots } from "react-icons/gi";
import OverviewChart from "../../components/main/plantation/OverviewChart";

const overview = [
  { label: "Days", icon: BsCalendar2, count: 10 },
  { label: "Plantation", icon: GiPlantRoots, count: 80 },
  { label: "Users", icon: HiOutlineUser, count: 40 },
];

export default function Plantation() {
  return (
    <Container py={"16"} maxW={"container.xl"}>
      <Flex justify={"flex-end"}>
        <Button
          mb={"16"}
          colorScheme={"twitter"}
          leftIcon={<HiPlus size={24} />}
        >
          Add data
        </Button>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} spacing={"4"}>
        {overview.map((data) => (
          <OverviewCard
            label={data.label}
            count={data.count}
            icon={data.icon}
          />
        ))}
      </SimpleGrid>
      <Box w="full" h={"full"} mt={"16"}>
        <OverviewChart />
      </Box>

      <Box mt={"16"}>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
          {[...new Array(10)].map((batch) => (
            <CoursePlantation />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
