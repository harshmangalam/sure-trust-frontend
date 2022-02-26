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

import {
  boardOfAdvisers,
  coFounders,
  executiveMembers,
  seniorExecutives,
  narrationByFounder,
} from "../../data/about";
import satyaSaiBaba from "../../images/satya_sai_baba.jpg";
function About() {
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
                    fontSize={"lg"}
                    fontFamily={"Sora"}
                  >
                    {content}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>

      {/* executive director  */}

      {/* director and cofounder  */}
      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Board Of Trustees
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
            {coFounders.map((coFounder) => (
              <GridItem key={coFounder.name}>
                <AboutUserCard {...coFounder} />
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* senior executive members */}
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
              {seniorExecutives.map((executive) => (
                <GridItem key={executive.name}>
                  <AboutUserCard {...executive} />
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>

          {/* Executive Members */}
          <Box as="section" mt={12}>
            <Heading textAlign="center" fontSize="3xl">
              Executive Members
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
              {executiveMembers.map((executive) => (
                <GridItem key={executive.name}>
                  <AboutUserCard {...executive} />
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      {/* BOARD OF ADVISORS */}
      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Board Of Advisors
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
            {boardOfAdvisers.map((advisor) => (
              <GridItem key={advisor.name}>
                <AboutUserCard {...advisor} />
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
