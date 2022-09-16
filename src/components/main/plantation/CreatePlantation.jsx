import { HiPlus } from "react-icons/hi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  batch: yup.string().required(),
  course: yup.string().required(),
  user: yup.string().required(),
  plants: yup.string().required(),
});

export default function CreatePlantation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {};

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
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.batch}>
                <FormLabel>Batch name</FormLabel>
                <Select {...register("batch")} placeholder="Select batch">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <FormErrorMessage>{errors.batch?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.user}>
                <FormLabel>Planted by</FormLabel>
                <Select {...register("user")} placeholder="Select user">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
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
