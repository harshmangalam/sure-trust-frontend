import {
  Box,
  Input,
  useColorModeValue,
  Stack,
  Button,
  FormControl,
  FormLabel,
  SimpleGrid,
  GridItem,
  FormErrorMessage,
  RadioGroup,
  Radio,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthDispatch, useAuthState } from "../../contexts/auth";
import { updateStudentProfile } from "../../services";
const schema = yup.object({
  name: yup.string().required("Name is required"),

  gender: yup.string().required("Gender is required").nullable(),
  phone: yup.string().required("Phone is required"),
  qualification: yup.string().required("Qualification is required"),
  collegeName: yup.string(),
  collegePlace: yup.string(),
  collegeDistrict: yup.string(),
  collegeState: yup.string(),
});

function EditProfile() {
  const { currentUser } = useAuthState();
  const authDispatch = useAuthDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({
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
      const data = await updateStudentProfile(
        currentUser.registration_no,
        payload
      );

      toast({
        title: "Account Updated.",
        description: `We've updated  account for ${data?.name}`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      authDispatch({ type: "UPDATE_PROFILE", payload: data });

      navigate("/dashboard/profile");
    } catch (error) {
      console.log(error);
      toast({
        title: "Account Error",
        description: `Error while updating your account`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="lg" mx="auto">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="md"
          rounded="md"
        >
          <SimpleGrid spacing={6} as="section">
            <GridItem>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Full name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                  defaultValue={currentUser.name}
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
                  defaultValue={currentUser.phone}
                />
                <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={errors.gender}>
                <FormLabel htmlFor="gender">Gender</FormLabel>

                <RadioGroup defaultValue={currentUser.gender}>
                  <Stack direction="row" justify="space-between">
                    <Radio type="radio" {...register("gender")} value="male">
                      Male
                    </Radio>
                    <Radio type="radio" {...register("gender")} value="female">
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
                  defaultValue={currentUser.qualification}
                />
                <FormErrorMessage>
                  {errors.qualification?.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </SimpleGrid>

          <SimpleGrid spacing={6} as="section">
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
              <Button
                type="submit"
                colorScheme={"purple"}
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Update Account
              </Button>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default EditProfile;
