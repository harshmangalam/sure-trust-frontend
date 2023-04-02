import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Tooltip,
  useDisclosure,
  Stack,
  HStack,
  Avatar,
  Text,
  Tag,
  Badge,
  Box,
  ModalFooter,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import { HiOutlineUser } from "react-icons/hi";
import StudentCard from "./StudentCard";
export default function StudentsListModal({ students }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label={"Students"}>
        <Box pos={"relative"}>
          <IconButton
            aria-label="Students"
            icon={<HiOutlineUser size={24} />}
            onClick={onOpen}
            variant="outline"
            colorScheme="twitter"
            rounded="full"
          />
        </Box>
      </Tooltip>

      <Modal
        size={"4xl"}
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Students</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="custom-scrollbar">
            <SimpleGrid columns={[1, 2]}>
              {students.map((student) => (
                <StudentCard {...student} />
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
