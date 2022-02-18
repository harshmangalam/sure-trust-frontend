import {
  Box,
  Input,
  useColorModeValue,
  Stack,
  HStack,
  VStack,
  CheckboxGroup,
  Button,
  Heading,
  FormControl,
  FormLabel,
  SimpleGrid,
  GridItem,
  FormErrorMessage,
  RadioGroup,
  Radio,
  Checkbox,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { fetchCourses, signup } from "../../services";
import { useQuery } from "react-query";
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be valid"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "confirm password must match password"),
  gender: yup.string().required("Gender is required").nullable(),
  phone: yup.string().required("Phone is required"),
  qualification: yup.string().required("Qualification is required"),
  collegeName: yup.string().required("College name is required"),
  collegePlace: yup.string().required("College place is required"),
  collegeDistrict: yup.string().required("College district is required"),
  collegeState: yup.string(),
  courseId: yup.string().required("Please select course to proceed"),
});

function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const [steps, setSteps] = useState(0);
  const [conditions, setConditions] = useState([]);
  const courseQuery = useQuery("courses", fetchCourses);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const handlePrev = () => {
    setSteps((steps) => steps - 1);
  };
  const handleNext = () => {
    setSteps((steps) => steps + 1);
  };

  const onSubmit = async ({
    email,
    password,
    name,
    gender,
    phone,
    qualification,

    collegeName,
    collegePlace,
    collegeDistrict,
    collegeState,
    courseId,
  }) => {
    console.log(courseId, typeof courseId);
    if (conditions.length !== 4) {
      setError("conditions", {
        message: "Please accept all terms and conditions",
      });
      return;
    }

    const payload = {
      email,
      password,
      name,
      gender,
      phone,
      qualification,

      college_name: collegeName,
      college_district: collegeDistrict,
      college_place: collegePlace,
      college_state: collegeState,
    };

    try {
      const data = await signup(payload);
      toast({
        title: "Account created.",
        description: `We've created  account for ${data?.email}`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      toast({
        title: "Verification",
        description: `Please check your email to verify account`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: `Error while creating your account`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });

      if (error?.response?.data?.email) {
        console.log(error.response.data.email);
        toast({
          title: "Email Error",
          description: error.response.data.email[0],
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  const renderActionButtons = () => {
    if (steps >= 0 && steps < 4) {
      return (
        <HStack justifyContent="center">
          <Button
            colorScheme={"teal"}
            leftIcon={<FaLongArrowAltLeft />}
            disabled={steps === 0}
            onClick={handlePrev}
          >
            Prev
          </Button>

          <Button
            colorScheme={"teal"}
            onClick={handleNext}
            rightIcon={<FaLongArrowAltRight />}
          >
            Next
          </Button>
        </HStack>
      );
    } else if (steps === 4) {
      return (
        <VStack justifyContent="center">
          <Button
            onClick={handlePrev}
            colorScheme={"teal"}
            leftIcon={<FaLongArrowAltLeft />}
          >
            Prev
          </Button>
          <Button
            type="submit"
            colorScheme={"purple"}
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Create Account
          </Button>
        </VStack>
      );
    }
  };

  return (
    <Box maxW="lg" mx="auto">
      <HStack mb={4} justify="space-between">
        <Text colorScheme="blue">{steps + 1} of 4 steps</Text>
        <Button colorScheme={"blue"} as={Link} to="/auth/login">
          Login
        </Button>
      </HStack>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="md"
          rounded="md"
        >
          {/* Account details  */}
          {steps === 0 && (
            <SimpleGrid spacing={6} as="section">
              <GridItem>
                <Heading fontSize="2xl">Account Details</Heading>
              </GridItem>

              <GridItem>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    {...register("password")}
                  />
                  <FormErrorMessage>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.confirmPassword}>
                  <FormLabel htmlFor="confirmPassword">
                    Confirm password
                  </FormLabel>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    {...register("confirmPassword")}
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          )}

          {/* Personal details  */}
          {steps === 1 && (
            <SimpleGrid spacing={6} as="section">
              <GridItem>
                <Heading fontSize="2xl">Personal Details</Heading>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Full name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    {...register("name")}
                  />
                  <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.phone}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    {...register("phone")}
                  />
                  <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.gender}>
                  <FormLabel htmlFor="gender">Gender</FormLabel>

                  <RadioGroup>
                    <Stack direction="row" justify="space-between">
                      <Radio type="radio" {...register("gender")} value="male">
                        Male
                      </Radio>
                      <Radio
                        type="radio"
                        {...register("gender")}
                        value="female"
                      >
                        Female
                      </Radio>
                      <Radio type="radio" {...register("gender")} value="other">
                        Other
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.qualification}>
                  <FormLabel htmlFor="qualification">Qualification</FormLabel>
                  <Input
                    type="text"
                    id="qualification"
                    name="qualification"
                    {...register("qualification")}
                  />
                  <FormErrorMessage>
                    {errors.qualification?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          )}

          {/* College details  */}

          {steps === 2 && (
            <SimpleGrid spacing={6} as="section">
              <GridItem>
                <Heading fontSize="2xl">College Details</Heading>
                <Text mt={2} fontSize="sm">
                  Only for Students
                </Text>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.collegeName}>
                  <FormLabel htmlFor="collegeName">College Name</FormLabel>
                  <Input
                    type="text"
                    id="collegeName"
                    name="collegeName"
                    {...register("collegeName")}
                  />
                  <FormErrorMessage>
                    {errors.collegeName?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.collegePlace}>
                  <FormLabel htmlFor="collegePlace">College Place</FormLabel>
                  <Input
                    type="text"
                    id="collegePlace"
                    name="collegePlace"
                    {...register("collegePlace")}
                  />
                  <FormErrorMessage>
                    {errors.collegePlace?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.collegeDistrict}>
                  <FormLabel htmlFor="collegeDistrict">
                    College District
                  </FormLabel>
                  <Input
                    type="text"
                    id="collegeDistrict"
                    name="collegeDistrict"
                    {...register("collegeDistrict")}
                  />
                  <FormErrorMessage>
                    {errors.collegeDistrict?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.collegeState}>
                  <FormLabel htmlFor="collegeState">College State</FormLabel>
                  <Input
                    type="text"
                    id="collegeState"
                    name="collegeState"
                    {...register("collegeState")}
                  />
                  <FormErrorMessage>
                    {errors.collegeState?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          )}

          {/* select course  */}

          {steps === 3 && (
            <Box>
              {errors.courseId && (
                <Alert status="error" mb={6}>
                  <AlertIcon />

                  <AlertDescription>
                    {errors.courseId?.message}
                  </AlertDescription>
                </Alert>
              )}

              <Heading fontSize="2xl">Select Course</Heading>
              <Box mt={6}>
                <FormControl isInvalid={errors.courseId}>
                  <FormLabel htmlFor="collegeState">Select course</FormLabel>
                  <Select
                    id="courseId"
                    name="courseId"
                    {...register("courseId")}
                    placeholder="Select course"
                  >
                    {courseQuery.data?.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.course_name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.courseId?.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Box>
          )}

          {/* Terms and Conditions   */}
          {steps === 4 && (
            <Box>
              {errors.conditions && (
                <Alert status="error" mb={6}>
                  <AlertIcon />

                  <AlertDescription>
                    {errors.conditions?.message}
                  </AlertDescription>
                </Alert>
              )}
              <Heading fontSize="2xl">Terms &amp; Conditions</Heading>

              <Box mt={6}>
                <CheckboxGroup onChange={(v) => setConditions(v)}>
                  <VStack alignItems="start" spacing={4}>
                    <Checkbox
                      isInvalid={!conditions.includes("condition1")}
                      type="checkbox"
                      gridGap={4}
                      value="condition1"
                    >
                      Student has to turn on video during the entire class
                    </Checkbox>

                    <Checkbox
                      isInvalid={!conditions.includes("condition2")}
                      type="checkbox"
                      gridGap={4}
                      value="condition2"
                    >
                      Attending 8 Life Skills Training sessions during the four
                      months course is mandatory for all the students.
                    </Checkbox>

                    <Checkbox
                      isInvalid={!conditions.includes("condition3")}
                      type="checkbox"
                      gridGap={4}
                      value="condition3"
                    >
                      Student should not be a full time or part-time employee
                      anywhere.
                    </Checkbox>

                    <Checkbox
                      isInvalid={!conditions.includes("condition4")}
                      type="checkbox"
                      gridGap={4}
                      value="condition4"
                    >
                      Students promise that you will learn the course with
                      commitment, regularity and punctuality, for full four
                      months duration, abiding by all the rules and discipline
                      of the SURE TRUST.
                    </Checkbox>
                  </VStack>
                </CheckboxGroup>
              </Box>
            </Box>
          )}
        </Box>

        <Box mt={12}>{renderActionButtons()}</Box>
      </Box>
    </Box>
  );
}

export default Signup;
