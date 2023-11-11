import { Container, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchStats } from "../../../services/home";
import StatItem from "./StatItem";
export default function StatsCount() {
  const { data, isLoading, isError } = useQuery("stats-count", fetchStats);
  const result = data?.data?.Result;
  if (isError) return null;
  if (isLoading) return null;

  return (
    <Container maxW={"container.xl"} mt={"4"}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 4, lg: 4 }}
      >
        <StatItem title={"Students Undergoing Training"} stat={300} />
        <StatItem title={"Students Completed Training"} stat={1000} />
        <StatItem title={"Students Placed"} stat={300} />
        <StatItem title={"Courses"} stat={result?.course_count} />
        <StatItem color="pink.500" title={"Ongoing Batches"} stat={25} />
        <StatItem title={"Trainers"} stat={result?.trainer_count} />
      </SimpleGrid>
    </Container>
  );
}
