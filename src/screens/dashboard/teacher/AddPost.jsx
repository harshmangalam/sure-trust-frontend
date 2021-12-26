import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  useColorModeValue,
  Select,
  Alert,
  AlertIcon,
  AlertDescription,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { createTeacherPost } from "../../../services";

const schema = yup.object({
  title: yup.string().required(),
  type: yup.string().required(),
  content: yup.string().required(),
});
function Login() {
  const { batchId, courseId } = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (values) => {
    try {
      const data = await createTeacherPost({ ...values, batch: batchId });

      if (data?.error) {
        console.log(data.error);
        setError("common", data);
        return;
      } else {
        navigate(`/dashboard/courses/${courseId}/batches/${batchId}/posts`);
      }
    } catch (error) {
      console.log(error);
      setError("common", { error: "Something went wrong" });
    }
  };
  return (
    <Box maxW="lg" mx="auto">
      <Box
        bg={useColorModeValue("white", "gray.700")}
        py="8"
        px={{ base: "4", md: "10" }}
        shadow="md"
        rounded="md"
      >
        {errors.common && (
          <Alert status="error" rounded="md">
            <AlertIcon />

            <AlertDescription>{errors.common?.error}</AlertDescription>
          </Alert>
        )}
        <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6" mt={6}>
          <FormControl isInvalid={errors.title}>
            <FormLabel htmlFor="title">Post Title</FormLabel>
            <Input id="title" name="title" type="text" {...register("title")} />
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.type}>
            <FormLabel htmlFor="type">Select Post Type</FormLabel>
            <Select id="type" name="type" {...register("type")}>
              <option value="">Select</option>
              <option value="assignment">Assignment</option>
              <option value="announcement">Announcement</option>
              <option value="material">Material</option>
            </Select>
            <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.content}>
            <FormLabel htmlFor="content">Post Content</FormLabel>
            <Textarea
              id="content"
              name="content"
              type="text"
              {...register("content")}
            />
            <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            size="lg"
            fontSize="md"
          >
            Create Post
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
