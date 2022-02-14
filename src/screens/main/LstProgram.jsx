import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LstMentorCard from "../../components/main/LstMentorCard";

import { intro, trainingModules } from "../../data/lst";
export default function LstProgram() {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Box maxW="container.xl" mx="auto" px={2} py={12}>
      <Box>
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList>
            <Tab>Lifeskills Form</Tab>
            <Tab>Get Inspired</Tab>
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
              <Text>Get Inspired</Text>
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
      </Box>
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

        <SimpleGrid columns={1} spacing={6} mt={12}>
          {trainingModules.map((module, i) => (
            <GridItem key={i}>
              <Heading fontSize={"3xl"}>{module.title}</Heading>
              <SimpleGrid columns={[1]} spacing={6} my={6}>
                {module.body.map((mod, i) => (
                  <GridItem key={i}>
                    <LstMentorCard body={mod} />
                  </GridItem>
                ))}
              </SimpleGrid>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
