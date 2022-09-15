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
export default function PlantationUsers() {
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
              {[...new Array(30)].map((user) => (
                <HStack justify={"space-between"}>
                  <HStack>
                    <Avatar size={"sm"} name={"User"} />
                    <Text>User name</Text>
                  </HStack>
                  <Tag>2</Tag>
                </HStack>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
