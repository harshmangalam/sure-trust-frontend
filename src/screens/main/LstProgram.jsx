import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LstMentorCard from "../../components/main/LstMentorCard";

import { intro, trainingModules } from "../../data/lst";
export default function LstProgram() {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Box maxW="container.xl" mx="auto" px={2}>
      <Box>
        <Heading fontSize={"3xl"}>Introduction</Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={6} my={6}>
          {intro.map((text, i) => (
            <GridItem bg={cardBg} rounded="md" p={6} key={i} shadow={"lg"}>
              <Text textAlign={"justify"} fontSize={"lg"} fontWeight={500}>
                {text}
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>

      <Box my={12}>
        <Heading fontSize={"3xl"}>LIFE SKILLS TRAINING MODULE</Heading>
        <Accordion allowToggle my={6}>
          {trainingModules.map((module, i) => (
            <AccordionItem key={i}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {module.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={[1, 2]} spacing={6}>
                  {module.body.map((mod, i) => (
                    <GridItem key={i}>
                      <LstMentorCard body={mod} />
                    </GridItem>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}
