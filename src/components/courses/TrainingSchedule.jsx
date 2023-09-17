import { useQuery } from "react-query";
import { fetchCoursesSchedule } from "../../services";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function TrainingSchedule() {
  const { onClose, isOpen, onOpen } = useDisclosure();

  const courseSchedule = useQuery("courseSchedule", fetchCoursesSchedule);

  return (
    <>
      <Button onClick={onOpen}>Training Schedule</Button>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Training Schedule</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box
              mt={12}
              as="object"
              w="100%"
              h="70vh"
              data={courseSchedule?.data?.[0]?.shedule}
            >
              <Box
                as="iframe"
                src={courseSchedule?.data?.[0]?.shedule}
                w="full"
                h="70vh"
                loading="lazy"
              ></Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
