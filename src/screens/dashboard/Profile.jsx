import {
  Avatar,
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuthState } from "../../contexts/auth";
function Profile() {
  const { currentUser, role } = useAuthState();
  return (
    <Box>
      <Container maxW={"container.md"}>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"sm"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit={"cover"}
            alt="Profile"
          />
          <Flex justify={"center"} mt={-14}>
            <Avatar
              size={"2xl"}
              src={currentUser?.profile_pic}
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <VStack spacing={1}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {currentUser.name}
              </Heading>
              <Text color={"gray.500"}>{currentUser?.user?.email}</Text>
              <Text color={"gray.500"}>{role}</Text>
              {role === "student" && (
                <Button
                  leftIcon={<FiEdit />}
                  as={Link}
                  to="/dashboard/profile/edit"
                  rounded="full"
                  size="sm"
                  colorScheme="blue"
                >
                  Edit Profile
                </Button>
              )}
            </VStack>

            <SimpleGrid
              mt={12}
              columns={{ base: 2, md: 3 }}
              spacing={6}
              justifyContent="center"
            >
              {role === "student" && (
                <GridItem>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>{currentUser?.registration_no}</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Registration No
                    </Text>
                  </Stack>
                </GridItem>
              )}
              <GridItem>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>
                    {currentUser?.phone || "Not Available"}
                  </Text>

                  <Text fontSize={"sm"} color={"gray.500"}>
                    Phone Number
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>{currentUser?.qualification}</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    Qualification
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>{currentUser?.gender}</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    Gender
                  </Text>
                </Stack>
              </GridItem>
            </SimpleGrid>

            {role === "student" && (
              <Box mt={12}>
                <Heading textAlign="center" fontSize="2xl">
                  College Details
                </Heading>
                <SimpleGrid
                  columns={{ base: 2, md: 3 }}
                  spacing={6}
                  justifyContent="center"
                  mt={12}
                >
                  <GridItem>
                    <Stack spacing={0} align={"center"}>
                      <Text fontWeight={600}>
                        {currentUser?.college_name || "Not Available"}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        College Name
                      </Text>
                    </Stack>
                  </GridItem>

                  <GridItem>
                    <Stack spacing={0} align={"center"}>
                      <Text fontWeight={600}>
                        {currentUser?.college_place || "Not Available"}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        College Place
                      </Text>
                    </Stack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={0} align={"center"}>
                      <Text fontWeight={600}>
                        {currentUser?.college_district || "Not Available"}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        College District
                      </Text>
                    </Stack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={0} align={"center"}>
                      <Text fontWeight={600}>
                        {currentUser?.college_state || "Not Available"}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        College State
                      </Text>
                    </Stack>
                  </GridItem>
                </SimpleGrid>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Profile;
