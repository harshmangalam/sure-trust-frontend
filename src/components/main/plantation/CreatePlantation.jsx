import { HiPlus } from "react-icons/hi";
import { createPlantation, fetchCoursesForSignup } from "../../../services";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  ModalFooter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "react-query";
const schema = yup.object({
  batch: yup.string().required(),
  course: yup.string().required(),
  user: yup.string().required(),
  plants: yup.string().required(),
});

export default function CreatePlantation({ refetch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const courseQuery = useQuery("courses", fetchCoursesForSignup);

  const onSubmit = async (values) => {
    try {
      await createPlantation(values);
      refetch();
      toast({
        status: "success",
        description: "Data saved",
      });
      reset();
      onClose();
    } catch (error) {
      toast({
        status: "error",
        description: "Error while saving data",
      });
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        mb={"16"}
        colorScheme={"twitter"}
        leftIcon={<HiPlus size={24} />}
      >
        Add data
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="6">
              <FormControl isInvalid={errors.course}>
                <FormLabel>Course name</FormLabel>
                <Select {...register("course")} placeholder="Select course">
                  {courseQuery?.data?.map((course) => (
                    <option value={course.course_name}>
                      {course.course_name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.batch}>
                <FormLabel>Batch name</FormLabel>
                <Input {...register("batch")} />
                <FormErrorMessage>{errors.batch?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.user}>
                <FormLabel>Planted by</FormLabel>
                <Input {...register("user")} />
                <FormErrorMessage>{errors.user?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.plants}>
                <FormLabel>Total plants</FormLabel>
                <NumberInput min={1}>
                  <NumberInputField {...register("plants")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>{errors.plants?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" variant="ghost">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
