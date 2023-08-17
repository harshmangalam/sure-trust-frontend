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
  Input,
  useToast,
  Box,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import * as yup from "yup";
import { createSeniorCitizen, fetchCoursesForSignup } from "../../services";
import { RiAddLine } from "react-icons/ri";
import ImageUpload from "../shared/ImageUpload";

const schema = yup.object({
  batch_name: yup.string(),
  course_name: yup.string(),
  user_name: yup.string().required(),
  user_role: yup.string().required(),
});

const userRoles = [
  { value: "STUDENT", name: "Student" },
  { value: "TRAINER", name: "Trainer" },
  { value: "BOARD_MEMBER", name: "Board menber" },
  { value: "IERY_MENTOR", name: "IERY mentor" },
  { value: "IERY_INTERN", name: "IERY Intern" },
];

export default function SeniorCitizenForm({ refetch }) {
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
      const data = await createSeniorCitizen({
        ...values,
        image_url: images[0].url,
        public_id: images[0].publicId,
        course_name: values.course_name ?? undefined,
        batch_name: values.batch_name ?? undefined,
      });
      if (data.data) {
        toast({
          status: "success",
          description: "Data saved",
        });
        reset();
        setImages([]);
        refetch();
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
          Add Data
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="6">
              <FormControl isInvalid={errors.course_name}>
                <FormLabel>Course name</FormLabel>
                <Select
                  {...register("course_name")}
                  placeholder="Select course"
                >
                  {courseQuery?.data?.map((course) => (
                    <option value={course.course_name}>
                      {course.course_name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.course_name?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.batch_name}>
                <FormLabel>Batch name</FormLabel>
                <Input {...register("batch_name")} />
                <FormErrorMessage>
                  {errors.batch_name?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.user_name}>
                <FormLabel>User name</FormLabel>
                <Input {...register("user_name")} />
                <FormErrorMessage>{errors.user_name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.user_role}>
                <FormLabel>User role</FormLabel>
                <Select {...register("user_role")} placeholder="User role">
                  {userRoles.map(({ name, value }) => (
                    <option value={value}>{name}</option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.user_role?.message}</FormErrorMessage>
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
