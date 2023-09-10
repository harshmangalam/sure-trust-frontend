// import function to register Swiper custom elements
import { Box, Container, Heading } from "@chakra-ui/react";
import { register } from "swiper/swiper-element-bundle";
import ProjectCard from "./project-card";
import { useQuery } from "react-query";
import { fetchFeaturedProjects } from "../../../services";

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
            speed="500"
            loop="true"
            css-mode="true"
            navigation={true}
            space-between="30"
            slides-per-view="2"
            centered-slides="true"
            autoplay={true}
            free-mode={true}
          >
            {data?.data?.results?.map((project) => (
              <swiper-slide key={project.id} class="col">
                <ProjectCard {...project} />
              </swiper-slide>
            ))}
          </swiper-container>
        </Box>
      </Container>
    </Box>
  );
}
