import {
  Container,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Tooltip,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { contacts, address } from "../../data/contact";
import { socialLinks } from "../../data/social";
import { BsSubtract } from "react-icons/bs";

export default function Contact() {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Container maxW="container.xl" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
        <GridItem>
          <Box textAlign="center">
            <Heading>Contact</Heading>

            <Box py={4}>
              <SimpleGrid columns={1} spacing={3}>
                {contacts.map((contact, i) => (
                  <GridItem key={i}>
                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={contact.icon}
                      as="a"
                      href={contact?.link}
                    >
                      {contact.text}
                    </Button>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Box>

            <Box my={4} maxW="sm" textAlign="center" mx="auto">
              <Text fontWeight="bold">{address.text}</Text>
            </Box>

            <Wrap justify="center" my={4}>
              {socialLinks.map((link, i) => (
                <WrapItem key={i}>
                  <Tooltip label={link.name}>
                    <IconButton
                      aria-label={link.name}
                      size="lg"
                      isRound={true}
                      icon={link.icon}
                      as="a"
                      href={link.link}
                      target="_blank"
                    />
                  </Tooltip>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg={cardBg} borderRadius="lg" p={6}>
            <Box>
              <VStack spacing={5}>
                <FormControl id="subject">
                  <FormLabel>Subject</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsSubtract />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="description">
                  <FormLabel>Description</FormLabel>
                  <Textarea rows={8} />
                </FormControl>
                <FormControl id="submit" float="right">
                  <Button variant="solid" colorScheme="blue">
                    Submit
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
