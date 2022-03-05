import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import LstMentorCard from "../../components/main/LstMentorCard";

import { intro, trainingModules } from "../../data/lst";
export default function LstProgram() {
  const cardBg = useColorModeValue("white", "gray.700");
  const tabBg = useColorModeValue("white", "gray.700");

  const [lst, setLst] = useState(null);

  return (
    <Box maxW="container.xl" mx="auto" px={2} py={12}>
      <Tabs isFitted>
        <TabList display={"flex"} flexWrap={"wrap"}>
          <Tab>Lifeskills Form</Tab>
          <Tab>Gallery</Tab>
          <Tab>Get Inspired</Tab>
          <Tab>Testimonials</Tab>
          <Tab>Contact Us</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>Lifeskills Form</Text>
          </TabPanel>
          <TabPanel>
            <Text>Gallery</Text>
          </TabPanel>
          <TabPanel>
            <Text>Get Inspired</Text>
          </TabPanel>
          <TabPanel>
            <Text>Testimonials</Text>
          </TabPanel>

          <TabPanel>
            <Text>Contact Us</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box mt={24}>
        <Heading fontSize={["4xl", "5xl"]} textAlign={"center"}>
          Introduction
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing={6} my={12}>
          {intro.map((text, i) => (
            <GridItem bg={cardBg} rounded="md" p={6} key={i} shadow={"lg"}>
              <Text
                textAlign={"justify"}
                fontSize={"lg"}
                fontWeight={500}
                lineHeight={8}
              >
                {text}
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>

      <Box my={24}>
        <Heading fontSize={["4xl", "5xl"]} textAlign={"center"}>
          Life Skills Training Module
        </Heading>

        <VStack align="center" my={12} spacing={12}>
          {trainingModules.map((module, i) => (
            <VStack spacing={12} key={i}>
              <Heading textAlign={"center"} fontSize={"3xl"}>
                {module.title}
              </Heading>
              <SimpleGrid columns={[1]} spacing={6}>
                <GridItem>
                  <SimpleGrid columns={[1]} spacing={6}>
                    {module.body.map((mod, i) => (
                      <GridItem key={i}>
                        <LstMentorCard body={mod} />
                      </GridItem>
                    ))}
                  </SimpleGrid>
                </GridItem>
                <GridItem>
                  <HStack>
                    <Button
                      colorScheme={"twitter"}
                      onClick={() => setLst(module)}
                    >
                      Module
                    </Button>
                    <Button colorScheme={"whatsapp"}>
                      Sessions Recordings
                    </Button>
                  </HStack>
                </GridItem>
              </SimpleGrid>
            </VStack>
          ))}
        </VStack>
      </Box>

      <Modal onClose={() => setLst(null)} size={"full"} isOpen={Boolean(lst)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{lst?.title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box
              mt={12}
              as="object"
              w="100%"
              h="70vh"
              data={lst?.module}
              type="application/pdf"
            >
              <Box as="iframe" src={lst?.module} w="full" h="70vh"></Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setLst(null)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
