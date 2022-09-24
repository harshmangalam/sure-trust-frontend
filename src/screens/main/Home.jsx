import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
  HStack,
  Link,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";

import Video from "../../components/main/home/Video";
import { uniquenessTrainings } from "../../data/uniquenessTrainings";

import Caption from "../../components/main/home/Caption";
import Features from "../../components/main/home/Features";
import { FaChevronCircleRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { fetchReviews } from "../../services";
import ReviewCard from "../../components/main/ReviewCard";
import Collaborators from "../../components/main/home/Collaborators";
import Hero from "../../components/main/home/Hero";
function Home() {
  const query = useQuery(["reviews", 1], () => fetchReviews(1));

  return (
    <Box>
      {/* Welcome section  */}
      <Box as="section">
        <Container maxW={"container.xl"}>
          <Hero />
        </Container>
      </Box>

      {/* Features section */}

      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Features />
        </Container>
      </Box>

      {/* Uniqueness Of Our Training  */}

      <Box as="section" mt={12}>
        <Container maxW={"container.xl"}>
          <Heading fontSize={"3xl"}>
            Uniqueness Of Our Training
          </Heading>

          <SimpleGrid spacing={4} columns={[1, 1, 2, 3]} mt={6}>
            {uniquenessTrainings.map((uniquenessTraining, i) => (
              <Box
                key={i}
                spacing={6}
                p={8}
                boxShadow={"2xl"}
                textAlign={"center"}
                rounded={"xl"}
                display={"grid"}
                placeItems={"center"}
                border="1px"
                borderColor={"blue.500"}
              >
                <Text fontSize={"xl"} textAlign={"center"}>
                  {uniquenessTraining.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/*  Ratings  */}
      <Box as="section" mt={12}>
        <Container maxW={"container.xl"}>
          <HStack justify={"space-between"}>
            <Heading textAlign="center" fontSize={"3xl"}>
              Reviews
            </Heading>
          </HStack>
          <Box mt={6}>
            <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={4}>
              {query.data?.data?.result?.data?.slice(0, 3).map((review, i) => (
                <ReviewCard {...review} key={i} />
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      {/* videos collections  */}

      <Box as="section" mt={12}>
        <Container maxW={"container.xl"}>
          <HStack justify={"space-between"}>
            <Heading textAlign="center" fontSize={"3xl"}>
              Videos
            </Heading>
          </HStack>
          <Box mt={6}>
            <Video />
          </Box>
        </Container>
      </Box>

      {/* collaborators */}

      <Box mt={12} mb={12}>
        <Container maxW="container.xl">
          <Heading fontSize={"3xl"}>Collaborators</Heading>

          <Collaborators />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
