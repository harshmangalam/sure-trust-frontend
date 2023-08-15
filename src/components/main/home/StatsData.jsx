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
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 8 }}>
        <StatItem title={"Students Ongoing"} stat={"1,000+"} />
        <StatItem title={"Students Placed"} stat={"100+"} />
        <StatItem title={"Courses"} stat={result?.course_count} />
        <StatItem title={"Batches"} stat={result?.batch_count} />
        <StatItem title={"Trainers"} stat={result?.trainer_count} />
      </SimpleGrid>
    </Container>
  );
}
