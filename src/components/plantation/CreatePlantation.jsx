import { createPlantation, fetchCoursesForSignup } from "../../services";
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
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "react-query";
import { RiAddLine } from "react-icons/ri";
import ImageUpload from "../shared/ImageUpload/index";
import { useState } from "react";

const schema = yup.object({
  batch: yup.string(),
  course: yup.string(),
  user: yup.string().required(),
  plants: yup.string().required(),
});

export default function CreatePlantation({ refetch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState([]);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },

    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const courseQuery = useQuery("courses", fetchCoursesForSignup);

  const onSubmit = async (values) => {
    try {
      const data = await createPlantation({ ...values, images });
      if (data.data) {
        refetch();
        toast({
          status: "success",
          description: "Data saved",
        });
        reset();
        setImages([]);
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast({
        status: "error",
        description: "Error while saving data",
      });
    }
  };

  return (
    <>
      <Box>
        <Button onClick={onOpen} leftIcon={<RiAddLine size={20} />}>
          Add Plantation
        </Button>
      </Box>

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

              <ImageUpload images={images} setImages={setImages} />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              disabled={isSubmitting}
              colorScheme="red"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              disabled={isSubmitting}
              isLoading={isSubmitting}
              type="submit"
              variant="ghost"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
