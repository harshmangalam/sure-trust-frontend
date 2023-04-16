import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CoordinatorCard from "../../../components/main/iery/CoordinatorCard";
import ProjectCard from "../../../components/main/iery/ProjectCard";
import { fetchDomainDetails } from "../../../services/iery";

export default function IeryDomain() {
  const { id } = useParams();
  const { data } = useQuery(["domains", id], () => fetchDomainDetails(id), {
    enabled: !!id,
  });

  return (
    <Container maxW={"container.xl"} py={6}>
      <Box>
        <Heading fontSize={"3xl"}>Mentors</Heading>
        <SimpleGrid columns={[1, 2, 3]} mt={4} spacing={4}>
          {data?.data?.COORDINATORS.map((user) => (
            <CoordinatorCard key={user.id} {...user} />
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={10}>
        <Heading fontSize={"3xl"}>Projects</Heading>
        <SimpleGrid columns={[1, 2, 3]} mt={4} spacing={4}>
          {data?.data?.PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              domain={data?.data?.RESULT?.domain_name}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
