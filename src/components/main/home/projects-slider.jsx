// import function to register Swiper custom elements
import { Box, Container, Heading } from "@chakra-ui/react";
import { register } from "swiper/swiper-element-bundle";
import ProjectCard from "./project-card";
// register Swiper custom elements
register();
export default function ProjectsSlider() {
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
            {[...new Array(12)].map((_, i) => (
              <swiper-slide key={i} class="col" style={{ margin: "0px 8px" }}>
                <ProjectCard
                  domain={"Web Development"}
                  projectName={
                    "Building a website for newly started Super Speciality Hospital"
                  }
                  videoLink={"https://www.youtube.com/embed/GaSnKf9Hr6w"}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </Box>
      </Container>
    </Box>
  );
}
