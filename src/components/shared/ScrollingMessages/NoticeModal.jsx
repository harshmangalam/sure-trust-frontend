import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export default function NoticeModal({ notice }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        size={"md"}
        variant="outline"
        colorScheme={"white"}
      >
        View
      </Button>

      <Modal
        allowPinchZoom
        orientation="vertical"
        onClose={onClose}
        isOpen={isOpen}
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notice</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align={"start"}>
              <Heading fontSize={"lg"}>{notice.title}</Heading>
              <Text>{notice.description}</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
