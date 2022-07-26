import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  SimpleGrid,
  GridItem,
  AspectRatio,
  List,
  ListItem,
} from "@chakra-ui/react";
import AboutUserCard from "../../components/main/AboutUserCard";
import { useQuery } from "react-query";
import { fetchBoardMembers } from "../../services/board";
import Loader from "../../components/shared/Loader";
import {
  boardOfAdvisers,
  coFounders,
  executiveMembers,
  seniorExecutives,
  narrationByFounder,
} from "../../data/about";
import satyaSaiBaba from "../../images/satya_sai_baba.jpg";
function About() {
  const { data, isLoading, isError } = useQuery("board", fetchBoardMembers);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error</p>;
  }
  return (
    <Box py={12}>
      <Box as="section" mt={12}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Birth Of The SURE Trust
          </Heading>
          <AspectRatio mx="auto" maxW="full" ratio={4 / 2}>
            <Image
              mt={12}
              rounded="md"
              src={satyaSaiBaba}
              width="100%"
              alt="Founder"
            />
          </AspectRatio>
        </Container>
      </Box>

      <Box mt={24}>
        <Container maxW="container.xl">
          <Box>
            <Heading textAlign={"center"} fontSize={"3xl"}>
              {narrationByFounder.title}
            </Heading>

            <List spacing={3} mt={6}>
              {narrationByFounder.contents.map((content, i) => (
                <ListItem key={i}>
                  <Text
                    textAlign={"justify"}
                    fontSize={"2xl"}
                    fontFamily={"Oxygen"}
                  >
                    {content}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>

      {/* board of trustees  start */}
      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Board Of Trustees
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
            {data.data?.board_of_trustees?.map((user) => (
              <GridItem key={user.id}>
                <AboutUserCard {...user} />
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      {/* board of trustees end  */}

      {/* governing council start  */}
      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Governing Council
          </Heading>

          <Box mt={12}>
            <Heading textAlign="center" fontSize="3xl">
              Senior Executive Members
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
              {data.data["Governing Council"]["senior_executives"].map(
                (user) => (
                  <GridItem key={user.id}>
                    <AboutUserCard {...user} />
                  </GridItem>
                )
              )}
            </SimpleGrid>
          </Box>

          <Box as="section" mt={12}>
            <Heading textAlign="center" fontSize="3xl">
              Executive Members
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
              {data.data["Governing Council"]["executives_members"].map(
                (user) => (
                  <GridItem key={user.name}>
                    <AboutUserCard {...user} />
                  </GridItem>
                )
              )}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      {/* Governing Council end  */}

      {/* BOARD OF ADVISORS start  */}
      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Board Of Advisors
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
            {data.data?.board_of_advisers.map((user) => (
              <GridItem key={user.id}>
                <AboutUserCard {...user} />
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* BOARD OF ADVISORS end  */}
    </Box>
  );
}

export default About;
