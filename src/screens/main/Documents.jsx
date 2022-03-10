import {
  Box,
  Button,
  Container,
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
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchDocuments } from "../../services/gallery";
import Loader from "../../components/shared/Loader";
import Error from "../../components/shared/Error";
import { useState } from "react";

export default function Documents() {
  const [pageUrl, setPageUrl] = useState("");
  const query = useQuery(["documents", pageUrl], () => fetchDocuments(pageUrl));
  const [doc, setDoc] = useState(null);

  const bg = useColorModeValue("white", "gray.700");

  if (query.isLoading) {
    return <Loader />;
  }

  if (query.isError) {
    return <Error code={500} message={query.error} />;
  }
  return (
    <Container maxW={"container.xl"} py={12}>
      <Heading>Documents</Heading>
      <SimpleGrid columns={[1,2,2,3]} spacing={6} mt={12}>
        {query.data.results.map((document) => (
          <GridItem
            bg={bg}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <VStack spacing={6}>
              <Heading fontSize={"2xl"}>{document.title}</Heading>
              <Button
                size={"sm"}
                onClick={() => setDoc(document)}
                colorScheme={"twitter"}
              >
                Open Document
              </Button>
            </VStack>
          </GridItem>
        ))}
      </SimpleGrid>

      <Box mt={6}>
        <HStack>
          <Button
            disabled={!query.data.previous}
            onClick={() => setPageUrl(query.data.previous)}
          >
            Prev
          </Button>
          <Button
            disabled={!query.data.next}
            onClick={() => setPageUrl(query.data.next)}
          >
            Next
          </Button>
        </HStack>
      </Box>
      <Modal onClose={() => setDoc(null)} size={"full"} isOpen={Boolean(doc)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{doc?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              mt={12}
              as="object"
              w="100%"
              h="70vh"
              data={doc?.file}
              type="application/pdf"
            >
              <Box as="iframe" src={doc?.file} w="full" h="70vh"></Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setDoc(null)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
