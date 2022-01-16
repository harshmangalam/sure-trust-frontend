import {
  Box,
  Text,
  Container,
  Heading,
  SimpleGrid,
  GridItem,
  Image,
  VStack,
  Button
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import r1Image from "../../assets/features/img1.svg";
function ResearchGuidance() {
  return (
    <Container maxW={"container.xl"}>
      <Heading textAlign="center">APPROACH FOR COURSE COMPLETION</Heading>
      <Box mt={24}>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <GridItem>
            <Image src={r1Image} width={"100%"} />
          </GridItem>
          <GridItem>
            <VStack  alignItems={"start"} spacing={3}>
              <Heading fontSize={"xl"}>Corner for research guidance</Heading>
              <Heading fontSize={"3xl"}>
                Cost-free &amp; Experienced Research Guidance
              </Heading>
              <Text  fontSize={"xl"}>
                Research guidance for project work, research proposal writing,
                thesis/dissertation writing will be given. You will also get
                hand-holding step by step guidance for writing research papers
                that can be published in highly acclaimed journals, totally free
                of cost.
              </Text>
              <Button as={Link} to="/contact" colorScheme={"purple"}>
                Contact Us
              </Button>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default ResearchGuidance;
