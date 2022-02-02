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
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  fetchStudentData,
  loginStudent,
  fetchTeacherData,
} from "../../services";

import { useAuthDispatch } from "../../contexts/auth";
import axios from "axios";
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
  login_as: yup.string().required("Select login type"),
});
function Login() {
  const toast = useToast();
  const authDispatch = useAuthDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({ email, password, login_as }) => {
    try {
      const data = await loginStudent({
        email,
        password,
        login_as,
      });

      if (data?.error) {
        console.log(data.error);
        setError("common", data);
        return;
      }

      if (data.token) {
        axios.defaults.headers.common["Authorization"] = `Token ${data.token}`;
      }

      if (login_as === "student") {
        // remove already existing one
        localStorage.removeItem("student");
        // save user data to local storage
        localStorage.setItem("student", JSON.stringify(data));
        const studentData = await fetchStudentData(data);
        authDispatch({ type: "SET_CURRENTUSER", payload: studentData });
        authDispatch({ type: "SET_CURRENTUSER_ROLE", payload: "student" });
        toast({
          title: "Student Login",
          description: `You have successfully loggedin`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        return navigate("/dashboard");
      }

      if (login_as === "teacher") {
        localStorage.setItem("teacher", JSON.stringify(data));
        const teacherData = await fetchTeacherData(data);
        authDispatch({ type: "SET_CURRENTUSER", payload: teacherData });
        authDispatch({ type: "SET_CURRENTUSER_ROLE", payload: "teacher" });
        toast({
          title: "Teacher Login",
          description: `You have successfully loggedin`,
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        return navigate("/dashboard");
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
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.login_as}>
            <FormLabel htmlFor="login_as">Select Login As</FormLabel>
            <Select id="login_as" name="login_as" {...register("login_as")}>
              <option value="">Select</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </Select>
            <FormErrorMessage>{errors.login_as?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            size="lg"
            fontSize="md"
          >
            Sign in
          </Button>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Button variant="ghost" as={Link} size="sm" to="/auth/signup">
              Not have an account ? Sign up
            </Button>
            <Button
              variant="ghost"
              as="a"
              size="sm"
              href={`${process.env.REACT_APP_BASEURL}/users/reset_password/`}
              target={"_blank"}
            >
              Forgotton password
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
