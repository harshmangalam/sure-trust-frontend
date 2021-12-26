import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
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
  Heading,
  FormControl,
  FormLabel,
  Box,
  Input,
  useColorModeValue,
  Stack,
  HStack,
  VStack,
  CheckboxGroup,
} from "@chakra-ui/react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthDispatch, useAuthState } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { updateStudentProfile } from "../../services";

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
  collegeName: yup.string(),
  collegePlace: yup.string(),
  collegeDistrict: yup.string(),
  collegeState: yup.string(),
});

function EditProfile() {
  const toast = useToast();
  const { currentUser } = useAuthState();
  const authDispatch = useAuthDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({
    email,
    name,
    gender,
    phone,
    qualification,

    collegeName,
    collegePlace,
    collegeDistrict,
    collegeState,
  }) => {
    const payload = {
      email,
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
      const data = await updateStudentProfile("", payload);
      authDispatch({ type: "UPDATE_PROFILE", payload: data });

      toast({
        title: "Account update.",
        description: `We've update account for ${data?.email}`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: `Error while creating your account`,
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    } finally {
      onClose();
    }
  };

  return (
    <>
      <Button size="sm" rounded="full" onClick={onOpen}>
        Edit Profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <GridItem colSpan={2}>
                  <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name">Full name</FormLabel>
                    <Input
                      type="text"
                      id="name"
                      defaultValue={currentUser.name}
                      name="name"
                      {...register("name")}
                    />
                    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      defaultValue={currentUser.user.email}
                      name="email"
                      {...register("email")}
                    />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl isInvalid={errors.gender}>
                    <FormLabel htmlFor="gender">Gender</FormLabel>

                    <RadioGroup defaultValue={currentUser.gender}>
                      <Stack direction="row" justify="space-between">
                        <Radio
                          type="radio"
                          {...register("gender")}
                          value="male"
                        >
                          Male
                        </Radio>
                        <Radio
                          type="radio"
                          {...register("gender")}
                          value="female"
                        >
                          Female
                        </Radio>
                        <Radio
                          type="radio"
                          {...register("gender")}
                          value="other"
                        >
                          Other
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage>
                      {errors.gender?.message}
                    </FormErrorMessage>
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
                      defaultValue={currentUser.qualification}
                    />
                    <FormErrorMessage>
                      {errors.qualification?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isInvalid={errors.collegeName}>
                    <FormLabel htmlFor="collegeName">College Name</FormLabel>
                    <Input
                      type="text"
                      id="collegeName"
                      name="collegeName"
                      {...register("collegeName")}
                      defaultValue={currentUser.college_name}
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
                      defaultValue={currentUser.college_place}
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
                      defaultValue={currentUser.college_district}
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
                      defaultValue={currentUser.college_state}
                    />
                    <FormErrorMessage>
                      {errors.collegeState?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={errors.phone}>
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      defaultValue={currentUser.phone}
                      {...register("phone")}
                    />
                    <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2} my={4}>
                  <Button
                    w="full"
                    type="submit"
                    colorScheme={"blue"}
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Update
                  </Button>
                </GridItem>
              </SimpleGrid>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditProfile;
