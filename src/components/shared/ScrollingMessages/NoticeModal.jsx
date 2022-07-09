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

import {FaEye, FaLongArrowAltRight} from "react-icons/fa"

export default function NoticeModal({ notice }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        size={"xs"}
        rounded="full"
        variant="ghost"
        colorScheme={"white"}
        icon={<FaEye size={16} />}
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
              <Text wordBreak={"break-word"}>{notice.description}</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
