import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Container,
  Image,
} from "@chakra-ui/react";

import { accomplishments } from "../../data/accomplishments";
import { uniquenessTrainings } from "../../data/uniquenessTrainings";
import { features } from "../../data/features";
import { collaborators } from "../../data/collaborators";

import Caption from "../../components/main/home/Caption";

function Home() {
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
                    transform: "scale(1.04)",
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

                    <Heading size="md">{feature.title}</Heading>
                    <Text fontSize="md">{feature.description}</Text>
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
                <Heading size="md" textTransform="uppercase">
                  {accomplishment.title}
                </Heading>
                <VStack>
                  {accomplishment.description.map((para, i) => (
                    <Text fontSize="md" key={i}>
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
                  <Heading size="md" textTransform="uppercase">
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
                <Box
                  border="2px"
                  rounded="xl"
                  borderColor="blue.500"
                  p={6}
                  transition="0.5s all"
                  _hover={{
                    boxShadow: "2xl",
                    shadow: "1px 1px 20px blue",
                    transform: "scale(1.04)",
                  }}
                  cursor="pointer"
                >
                  <Heading fontSize="xl" textAlign="center">
                    {collaborator.name}
                  </Heading>
                </Box>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
