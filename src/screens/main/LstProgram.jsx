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
    <Box maxW="container.xl" mx="auto" px={2} py={12}>
      <Box>
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

        <Box py={12}>
          {trainingModules.map((module, i) => (
            <Box py={12}>
              <Heading fontSize={"3xl"}>{module.title}</Heading>
              <SimpleGrid columns={[1, 2]} spacing={6} my={6}>
                {module.body.map((mod, i) => (
                  <GridItem key={i}>
                    <LstMentorCard body={mod} />
                  </GridItem>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
