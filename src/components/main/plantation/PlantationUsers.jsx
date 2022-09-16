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
} from "@chakra-ui/react";

import { HiOutlineUser } from "react-icons/hi";
export default function PlantationUsers({ users }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label={"Users"}>
        <IconButton
          aria-label="Users"
          icon={<HiOutlineUser size={24} />}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Users</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="custom-scrollbar">
            <Stack spacing={"3"}>
              {users.map((user) => (
                <HStack justify={"space-between"}>
                  <HStack>
                    <Avatar size={"sm"} name={user} />
                    <Text>{user}</Text>
                  </HStack>
                </HStack>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
