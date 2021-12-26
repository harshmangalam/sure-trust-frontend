import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import CourseCard from "./CourseCard";

function SubCourses({ subcourses }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button  rounded={"full"} colorScheme={"blue"} onClick={onOpen}>Sub courses</Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sub Courses</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={{base:1,md:2}} spacing={6}>
              {subcourses.map((course) => (
                <CourseCard key={course.id} course={course} />
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

export default SubCourses;
