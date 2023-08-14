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
  Badge,
  Box,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

import { HiOutlineUser } from "react-icons/hi";
export default function PlantationUsers({ users }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label={"Users"}>
        <Box pos={"relative"}>
          <IconButton
            aria-label="Users"
            icon={<HiOutlineUser size={24} />}
            onClick={onOpen}
            variant="ghost"
            colorScheme="whatsapp"
            rounded="full"
          />
          <Box pos="absolute" top={-2} right={-1}>
            <Badge
              colorScheme={"whatsapp"}
              w={5}
              h={5}
              display="grid"
              placeItems={"center"}
              rounded="full"
              variant="solid"
            >
              {users.length}
            </Badge>
          </Box>
        </Box>
      </Tooltip>

      <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Planters</ModalHeader>
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
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
