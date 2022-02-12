import {
  Box,
  Text,
  Heading,
  VStack,
  Image,
  Container,
  SimpleGrid,
  GridItem,
  Wrap,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
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
            BIRTH OF THE SURE INITIATIVE
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
          <Box p={6} border="2px" borderColor="blue.500" rounded="xl">
            <Heading fontSize={"3xl"}>{narrationByFounder.title}</Heading>
            <VStack mt={6} spacing={4}>
              {narrationByFounder.contents.map((content, i) => (
                <Text key={i} textAlign={"justify"}>
                  {content}
                </Text>
              ))}
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* executive director  */}

      {/* director and cofounder  */}
      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            BOARD OF TRUSTEES
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
            {coFounders.map((coFounder) => (
              <GridItem key={coFounder.name}>
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
                  h="full"
                >
                  <Image
                    src={coFounder.image}
                    alt={coFounder.name}
                    w="full"
                    h="sm"
                  />

                  <Heading size="md">{coFounder.name}</Heading>
                  <VStack spacing={0}>
                    <Text fontSize="xl">{coFounder?.subHeading}</Text>
                    <Text fontSize="md">{coFounder.bio}</Text>
                  </VStack>
                  <Wrap>
                    {coFounder.links.map((link) => (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={link.url}
                        key={link.url}
                      >
                        <Badge variant="subtle" colorScheme="green">
                          {link.name}
                        </Badge>
                      </a>
                    ))}
                  </Wrap>
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* senior executive members */}
      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            GOVERNING COUNCIL
          </Heading>

          <Box mt={12}>
            <Heading textAlign="center" fontSize="3xl">
              Senior Executive Members
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
              {seniorExecutives.map((executive) => (
                <GridItem key={executive.name}>
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
                    h="full"
                  >
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      w="full"
                      h="sm"
                    />

                    <Heading size="md">{executive.name}</Heading>
                    <Text fontSize="md">{executive.bio}</Text>
                    <Wrap>
                      {executive.links.map((link) => (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={link.url}
                          key={link.url}
                        >
                          <Badge variant="subtle" colorScheme="green">
                            {link.name}
                          </Badge>
                        </a>
                      ))}
                    </Wrap>
                  </VStack>
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
                    h="full"
                  >
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      w="full"
                      h="sm"
                    />

                    <Heading size="md">{executive.name}</Heading>
                    <Text fontSize="md">{executive.bio}</Text>
                    <Wrap>
                      {executive.links.map((link) => (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={link.url}
                          key={link.url}
                        >
                          <Badge variant="subtle" colorScheme="green">
                            {link.name}
                          </Badge>
                        </a>
                      ))}
                    </Wrap>
                  </VStack>
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
            BOARD OF ADVISORS
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={12}>
            {boardOfAdvisers.map((advisor) => (
              <GridItem key={advisor.name}>
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
                  h="full"
                >
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    w="full"
                    h="sm"
                  />

                  <Heading size="md">{advisor.name}</Heading>
                  <Heading size="sm">{advisor.title}</Heading>
                  <Text fontSize="md">{advisor.bio}</Text>
                  <Wrap>
                    {advisor.links.map((link) => (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={link.url}
                        key={link.url}
                      >
                        <Badge variant="subtle" colorScheme="green">
                          {link.name}
                        </Badge>
                      </a>
                    ))}
                  </Wrap>
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
