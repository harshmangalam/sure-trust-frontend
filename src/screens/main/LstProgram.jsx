import {
  Box,
  Button,
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
import LstForm from "../../components/main/lst/LstForm";
import LstMentorCard from "../../components/main/LstMentorCard";

import { intro, trainingModules } from "../../data/lst";
export default function LstProgram() {
  const cardBg = useColorModeValue("white", "gray.700");

  const [lst, setLst] = useState(null);

  return (
    <Box maxW="container.xl" mx="auto" px={2} py={12}>
      <LstForm />
      <Tabs isFitted variant="soft-rounded" colorScheme="purple" mt={24}>
        <TabList overflowX={"auto"} py={4} px={2} className="custom-scrollbar">
          <Tab minW={"180px"}>Lifeskills Form</Tab>
          <Tab minW={"180px"}>Gallery</Tab>
          <Tab minW={"180px"}>Get Inspired</Tab>
          <Tab minW={"180px"}>Testimonials</Tab>
          <Tab minW={"180px"}>Contact Us</Tab>
        </TabList>
        <TabPanels p={4}>
          <TabPanel>
            <Text>Lifeskills Form ---- Comming Soon</Text>
          </TabPanel>
          <TabPanel>
            <Text>Gallery ---- Comming Soon</Text>
          </TabPanel>
          <TabPanel>
            <Text>Get Inspired ---- Comming Soon</Text>
          </TabPanel>
          <TabPanel>
            <Text>Testimonials ---- Comming Soon</Text>
          </TabPanel>

          <TabPanel>
            <Text>Contact Us ---- Comming Soon</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box mt={24}>
        <Heading
          color={"#967bb6"}
          fontSize={["4xl", "5xl"]}
          textAlign={"center"}
        >
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
        <Heading
          color={"#967bb6"}
          fontSize={["4xl", "5xl"]}
          textAlign={"center"}
        >
          Life Skills Training Module
        </Heading>

        <VStack align="center" my={12} spacing={12}>
          {trainingModules.map((module, i) => (
            <VStack spacing={12} key={i}>
              <Heading textAlign={"center"} color={"#967bb6"} fontSize={"3xl"}>
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
              <Box
                loading="lazy"
                as="iframe"
                src={lst?.module}
                w="full"
                h="70vh"
              ></Box>
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
