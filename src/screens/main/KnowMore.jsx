import {
  Box,
  Container,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import {
  brochure,
  eligibility,
  modalities,
  uniqueness,
} from "../../data/knowMore";
function KnowMore() {
  return (
    <Container maxW={"container.xl"}>
      <Heading textAlign="center">APPROACH FOR COURSE COMPLETION</Heading>

      <Box mt={24}>
        <Heading fontSize={"3xl"} textAlign={"center"}>
          {modalities.title}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
          {modalities.items.map((item, i) => (
            <GridItem key={item}>
              <Box border="2px" rounded="xl" borderColor="blue.500" p={6}>
                <Heading fontSize={"xl"}>{item.subHeading}</Heading>
                <Text>{item.heading}</Text>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>

      <Box mt={24}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {eligibility.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={3} size={"xl"}>
                {eligibility.items.map((item, i) => (
                  <ListItem key={i}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {uniqueness.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={3} size={"xl"}>
                {uniqueness.items.map((item, i) => (
                  <ListItem key={i}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box mt={24}>
        <Heading textAlign={"center"} textTransform={"capitalize"} fontSize={"3xl"}>{brochure.title}</Heading>
        <Box
          mt={12}
          as="object"
          w="full"
          h="2xl"
          data={brochure.content}
          type="application/pdf"
        >
          <Box as="iframe" src={brochure.content} w="full" h="xl"></Box>
        </Box>
      </Box>
    </Container>
  );
}

export default KnowMore;
