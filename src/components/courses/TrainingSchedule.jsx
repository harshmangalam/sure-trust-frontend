import { useQuery } from "react-query";
import { useState } from "react";
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
} from "@chakra-ui/react";

export default function TrainingSchedule() {
  const [courseModal, setCourseModal] = useState(false);

  const courseSchedule = useQuery("courseSchedule", fetchCoursesSchedule);

  return (
    <>
      <Button
        rounded={"full"}
        colorScheme={"pink"}
        onClick={() => setCourseModal(true)}
        display={["none", "block"]}
      >
        Training Schedule
      </Button>

      {courseSchedule.data && (
        <Modal
          onClose={() => setCourseModal(false)}
          size={"full"}
          isOpen={courseModal}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Course Schedule</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Box
                mt={12}
                as="object"
                w="100%"
                h="70vh"
                data={courseSchedule?.data[0]?.shedule}
              >
                <Box
                  as="iframe"
                  src={courseSchedule?.data[0]?.shedule}
                  w="full"
                  h="70vh"
                ></Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setCourseModal(false)}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
