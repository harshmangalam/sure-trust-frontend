import {
  Divider,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { BsInfoCircleFill } from "react-icons/bs";
import CourseCard from "../courses/CourseCard";
export default function BatchInfoModal({
  batch_name,
  course,
  students,
  is_active,
  limit,
  meeting_code,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label="Batch Info">
        <IconButton
          colorScheme={"twitter"}
          onClick={onOpen}
          size="sm"
          rounded="full"
          aria-label="Batch info"
          icon={<BsInfoCircleFill size={24} />}
        />
      </Tooltip>

      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{batch_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CourseCard course={course} />
            <VStack mt={8} align="start" divider={<Divider />}>
              <HStack justify="space-between" w={"full"}>
                <Text fontSize={"lg"}>Total Students</Text>
                <Tag size={"lg"}>{students.length}</Tag>
              </HStack>
              <HStack justify="space-between" w={"full"}>
                <Text fontSize={"lg"}>Batch Limit</Text>
                <Tag size={"lg"}>{limit}</Tag>
              </HStack>
              <HStack justify="space-between" w="full">
                <Text fontSize={"lg"}>Batch Status</Text>

                {is_active ? (
                  <Tag colorScheme={"blue"}>Active</Tag>
                ) : (
                  <Tag colorScheme={"red"}>Not Active</Tag>
                )}
              </HStack>

              <HStack justify="space-between" w={"full"}>
                <Text fontSize={"lg"}>Class Status</Text>
                {meeting_code ? (
                  <Tag colorScheme={"blue"}>Started</Tag>
                ) : (
                  <Tag colorScheme={"red"}>Not Started</Tag>
                )}
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
