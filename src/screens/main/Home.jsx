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
  return (
    <Box>
      {/* Welcome section  */}
      <Box as="section">
        <Caption />
      </Box>

      {/* Features section */}

      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center">Features</Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
            {features.map((feature) => (
              <GridItem key={feature.title}>
                <Box
                  p={6}
                  border="2px"
                  borderColor="blue.500"
                  rounded="xl"
                  transition="0.5s all"
                  _hover={{
                    boxShadow: "2xl",
                    shadow: "1px 1px 20px blue",
                    transform: "scale(1.02)",
                  }}
                  h="full"
                >
                  <VStack spacing={4} alignItems="start">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      w="full"
                      h="sm"
                    />

                    <Heading size="md" color={featureHeadingColor}>
                      {feature.title}
                    </Heading>
                    <Text textAlign="justify" fontSize="md">
                      {feature.description}
                    </Text>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Accomplishments  */}

      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center">Accomplishments</Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
            {accomplishments.map((accomplishment) => (
              <VStack
                key={accomplishment.title}
                spacing={4}
                alignItems="start"
                p={6}
                border="2px"
                borderColor="blue.500"
                rounded="xl"
                transition="0.5s all"
                _hover={{
                  boxShadow: "2xl",
                  shadow: "1px 1px 20px blue",
                  transform: "scale(1.04)",
                }}
              >
                <Heading
                  color={accomplishmentHeadingColor}
                  size="md"
                  textTransform="uppercase"
                >
                  {accomplishment.title}
                </Heading>
                <VStack>
                  {accomplishment.description.map((para, i) => (
                    <Text textAlign={"justify"} fontSize="md" key={i}>
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
        <Container maxW="container.xl">
          <Heading textAlign="center">Uniqueness Of Our Training</Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={12}>
            {uniquenessTrainings.map((uniquenessTraining) => (
              <GridItem key={uniquenessTraining.title}>
                <VStack
                  spacing={4}
                  alignItems="start"
                  p={6}
                  border="2px"
                  borderColor="blue.500"
                  rounded="xl"
                  transition="0.5s all"
                  _hover={{
                    boxShadow: "2xl",
                    shadow: "1px 1px 20px blue",
                    transform: "scale(1.04)",
                  }}
                >
                  <Heading
                    color={trainingHedingColor}
                    size="md"
                    textTransform="uppercase"
                  >
                    {uniquenessTraining.title}
                  </Heading>
                  <Text fontSize="md">{uniquenessTraining.description}</Text>
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Google Ratings  */}

      {/* <Box mt={24} p={12} bg={useColorModeValue("gray.100", "gray.700")}>
        <Container maxW={"container.xl"}>
          <VStack>
            <Heading>Google Reviews</Heading>
            <Text>We have been working with students around the world</Text>
          </VStack>
          <Box mt={12} maxW={"md"} mx="auto">
            <ReviewCarousel />
          </Box>
        </Container>
      </Box> */}

      {/* collaborators */}
      <Box mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center">Collaborators</Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
            {collaborators.map((collaborator) => (
              <GridItem key={collaborator.name}>
                <a href={collaborator.link} target={"_blank"}>
                  <Box
                    border="1px"
                    rounded="xl"
                    borderColor="blue.500"
                    p={6}
                    transition="0.5s all"
                    _hover={{
                      boxShadow: "xl",
                      shadow: "1px 1px 20px blue",
                      transform: "scale(1.02)",
                    }}
                    cursor="pointer"
                  >
                    <Heading
                      as="a"
                      href={collaborator.link}
                      target="_blank"
                      fontSize="3xl"
                      textAlign="center"
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
