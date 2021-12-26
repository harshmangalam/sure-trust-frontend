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
} from "@chakra-ui/react";

function StudentCard({ student }) {
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image
        h={"xs"}
        w={"full"}
        src={
          "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
        objectFit={"cover"}
      />
      <Flex justify={"center"} mt={-14}>
        <Avatar
          size={"2xl"}
          src={student?.profile_pic}
          alt={"Author"}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box>
        <VStack my={4} spacing={1}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {student.name}
          </Heading>
          <Text color={"gray.500"}>{student?.user?.email}</Text>
        </VStack>

        <SimpleGrid
          my={12}
          columns={{ base: 2, md: 2 }}
          spacing={6}
          justifyContent="center"
        >
          <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{student?.registration_no}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Registration No
              </Text>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{student?.phone || "Not Available"}</Text>

              <Text fontSize={"sm"} color={"gray.500"}>
                Phone Number
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text textAlign="center" fontWeight={600}>
                {student?.qualification}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Qualification
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{student?.gender}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Gender
              </Text>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default StudentCard;
