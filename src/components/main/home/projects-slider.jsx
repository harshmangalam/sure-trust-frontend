// import function to register Swiper custom elements
import { Box, Container, Heading } from "@chakra-ui/react";
import { register } from "swiper/swiper-element-bundle";
import ProjectCard from "./project-card";
import { useQuery } from "react-query";
import { fetchFeaturedProjects } from "../../../services";
import { useState } from "react";
// register Swiper custom elements
register();
export default function ProjectsSlider() {
  const { data, isLoading, isError } = useQuery(
    ["featured-projects"],
    fetchFeaturedProjects
  );

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box mt={12}>
      <Container maxW={"container.xl"}>
        <Heading fontSize={"3xl"}>Projects</Heading>
        <Box mt={6}>
          <swiper-container
            slides-per-view="3"
            speed="500"
            loop="true"
            css-mode="true"
            navigation={true}
            autoplay={true}
            freeMode={true}
            class="project"
            spaceBetween={16}
          >
            {data?.data?.results?.map((project) => (
              <swiper-slide
                key={project.id}
                class="col"
                style={{ margin: "0px 16px" }}
              >
                <ProjectCard {...project} />
              </swiper-slide>
            ))}
          </swiper-container>
        </Box>
      </Container>
    </Box>
  );
}
