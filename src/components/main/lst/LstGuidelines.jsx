import {
  Box,
  Button,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { guidelines } from "../../../data/lst";
import { MdCheckCircle } from "react-icons/md";
export default function LstGuidelines() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} rounded={"full"} size={"lg"} px={6}>
        Read Guidelines
      </Button>

      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay bg="purple.300" backdropFilter="blur(12px)" />
        <ModalContent>
          <ModalHeader>LST Guidelines</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text py={4}>{guidelines.headerText}</Text>
            <List spacing={4} my={4}>
              {guidelines.lists.map((item) => (
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="purple.400" />
                  <Box as={"span"} color="purple.400" fontWeight={"bold"}>
                    {item.title} :
                  </Box>
                  <Box as="span" ml={2}>
                    {item.content}
                  </Box>
                </ListItem>
              ))}
            </List>
            <Text py={4}>{guidelines.footerText}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
