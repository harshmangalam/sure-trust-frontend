import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "./project-card";
import { useQuery } from "react-query";
import { fetchFeaturedProjects } from "../../../services";
import { Box, Container, Heading } from "@chakra-ui/react";

export default function ProjectsSlider() {
  const { data } = useQuery(["featured-projects"], fetchFeaturedProjects);
  const handleDragStart = (e) => e.preventDefault();

  const items = data?.data?.results?.map((project) => (
    <ProjectCard onDragStart={handleDragStart} key={project.id} {...project} />
  ));

  return (
    <Container maxW={"container.xl"}>
      <Box mt={12}>
        <Heading fontSize={"3xl"}>Internship Projects</Heading>
        <Box mt={6}>
          <AliceCarousel
            autoPlay
            autoPlayInterval={2000}
            autoPlayStrategy="default"
            mouseTracking
            items={items}
            controlsStrategy="default"
            responsive={{
              0: {
                items: 1,
              },
              480: {
                items: 1,
              },
              768: {
                items: 2,
              },
              1280: {
                items: 3,
              },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
