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
  IconButton,
} from "@chakra-ui/react";

import {FaLongArrowAltRight} from "react-icons/fa"

export default function NoticeModal({ notice }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        size={"sm"}
        variant="solid"
        colorScheme={"blue"}
        icon={<FaLongArrowAltRight size={20} />}
      />

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
