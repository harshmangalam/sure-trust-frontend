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
function Home() {
  const query = useQuery(["reviews", 1], () => fetchReviews(1));

  return (
    <Box>
      {/* Welcome section  */}
      <Box
        as="section"
        minH={"85vh"}
        display={"grid"}
        placeItems={"center"}
        bgImage="https://img.freepik.com/free-vector/abstact-hexagon-background-memphis-style_1017-31955.jpg?w=996"
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Caption />
      </Box>

      {/* Features section */}

      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Features />
        </Container>
      </Box>

      {/* Uniqueness Of Our Training  */}

      <Box as="section" my={24}>
        <Container maxW={"container.xl"}>
          <Heading fontSize={{ base: "4xl", md: "5xl" }}>
            Uniqueness Of Our Training
          </Heading>

          <SimpleGrid spacing={10} columns={[1, 1, 2, 3]} mt={12}>
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
                borderColor={"purple.500"}
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
      <Box as="section" my={24}>
        <Container maxW={"container.xl"}>
          <HStack justify={"space-between"}>
            <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
              Reviews
            </Heading>
            <Tooltip hasArrow label="More Reviews" bg="purple" color="white">
              <Link href="/reviews">
                <Avatar
                  bg={"purple"}
                  color={"white"}
                  icon={<FaChevronCircleRight size={24} />}
                />
              </Link>
            </Tooltip>
          </HStack>
          <Box mt={12}>
            <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={6}>
              {query.data?.data?.result?.data?.slice(0, 3).map((review,i) => (
                <ReviewCard {...review} key={i} />
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      {/* videos collections  */}

      <Box as="section" my={24}>
        <Container maxW={"container.xl"}>
          <HStack justify={"space-between"}>
            <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
              Videos
            </Heading>
            <Tooltip hasArrow label="More Videos" bg="purple" color="white">
              <Link href="/video-gallery">
                <Avatar
                  bg={"purple"}
                  color={"white"}
                  icon={<FaChevronCircleRight size={24} />}
                />
              </Link>
            </Tooltip>
          </HStack>
          <Box mt={12}>
            <Video />
          </Box>
        </Container>
      </Box>

      {/* collaborators */}
      <Box my={24}>
        <Container maxW="container.xl">
          <Heading fontSize={{ base: "4xl", md: "5xl" }}>Collaborators</Heading>

          <Collaborators />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
