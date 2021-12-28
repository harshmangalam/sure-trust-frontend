import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
export default function PostFile({ file }) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Button colorScheme="purple" onClick={onOpen}>
        Open File
      </Button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="100vh">
          <ModalHeader>Post File</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as="object" w="full" h="full" data={file}>
              <Box as="iframe" src={file} w="full" h="full"></Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" as="a" target="_blank" href={file} download colorScheme="blue" mr={3}>
              Open in Browser
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
