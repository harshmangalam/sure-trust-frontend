import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Container,
  Image,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";

import { accomplishments } from "../../data/accomplishments";
import { uniquenessTrainings } from "../../data/uniquenessTrainings";
import { features } from "../../data/features";
import { collaborators } from "../../data/collaborators";

import Caption from "../../components/main/home/Caption";

function Home() {
  const featureHeadingColor = useColorModeValue("blue.500", "blue.300");
  const accomplishmentHeadingColor = useColorModeValue("pink.500", "pink.300");
  const trainingHedingColor = useColorModeValue("blue.500", "blue.300");
  const cardBg = useColorModeValue("white", "gray.700");
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
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Features
          </Heading>

          <Grid
            mt={12}
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              xl: "repeat(3,1fr)",
            }}
            gridGap={6}
          >
            {features.map((feature) => (
              <Box
                key={feature.title}
                p={4}
                bg={cardBg}
                boxShadow={"2xl"}
                rounded={"lg"}
                textAlign={"center"}
              >
                <VStack spacing={4}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    w="full"
                    h="xs"
                  />

                  <Heading
                    size="md"
                    color={featureHeadingColor}
                    textAlign={"center"}
                  >
                    {feature.title}
                  </Heading>
                  <Text textAlign={"justify"} fontSize="lg">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Accomplishments  */}

      <Box
        as="section"
        mt={24}
        py={6}
        bgImage={
          "https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=826"
        }
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPos={"center"}
      >
        <Container maxW="container.xl">
          <Heading
            textAlign="center"
            color="white"
            fontSize={{ base: "4xl", md: "5xl" }}
          >
            Accomplishments
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
            {accomplishments.map((accomplishment) => (
              <VStack
                key={accomplishment.title}
                spacing={4}
                p={4}
                rounded={"lg"}
                textAlign={"center"}
                border={1}
              >
                <Heading
                  color={accomplishmentHeadingColor}
                  size="md"
                  textTransform="uppercase"
                  textAlign={"center"}
                >
                  {accomplishment.title}
                </Heading>
                <VStack>
                  {accomplishment.description.map((para, i) => (
                    <Text
                      fontWeight={"500"}
                      textAlign={"justify"}
                      fontSize="lg"
                      color="white"
                      key={i}
                    >
                      {para}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Uniqueness Of Our Training  */}

      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Uniqueness Of Our Training
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={12}>
            {uniquenessTrainings.map((uniquenessTraining) => (
              <GridItem key={uniquenessTraining.title}>
                <VStack spacing={6} p={6} rounded="xl">
                  <Image
                    src={uniquenessTraining.image}
                    width={"100%"}
                    height="sm"
                  />
                  <Box>
                    <Heading
                      color={trainingHedingColor}
                      size="md"
                      textTransform="uppercase"
                      textAlign={"center"}
                    >
                      {uniquenessTraining.title}
                    </Heading>
                    <Text fontSize="md" textAlign={"center"}>
                      {uniquenessTraining.description}
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Google Ratings  */}

      {/* <Box mt={24} p={12} bg={useColorModeValue("gray.100", "gray.700")}>
        <Box maxW={"container.xl"}>
          <VStack>
            <Heading>Google Reviews</Heading>
            <Text>We have been working with students around the world</Text>
          </VStack>
          <Box mt={12} maxW={"md"} mx="auto">
            <ReviewCarousel />
          </Box>
        </Box>
      </Box> */}

      {/* collaborators */}
      <Box my={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Collaborators
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
            {collaborators.map((collaborator) => (
              <GridItem key={collaborator.name}>
                <a rel="noreferrer" href={collaborator.link} target={"_blank"}>
                  <Box
                    border="2px"
                    rounded="xl"
                    borderColor="blue.500"
                    p={6}
                    bg={cardBg}
                    boxShadow={"2xl"}
                    textAlign={"center"}
                    cursor="pointer"
                  >
                    <Heading
                      as="a"
                      href={collaborator.link}
                      target="_blank"
                      fontSize="xl"
                      textAlign="center"
                      color={"pink.500"}
                    >
                      {collaborator.name}
                    </Heading>
                  </Box>
                </a>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
