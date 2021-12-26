import {
    Avatar,
    Box,
    Heading,
    Stack,
    Text,
    Flex,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    VStack,
  } from "@chakra-ui/react";
  import { format } from "date-fns";
  
  function StudentCard({ grade }) {
    return (
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Flex justify={"center"} p={4}>
          <Avatar
            size={"2xl"}
            src={grade.student?.profile_pic}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
  
        <Box p={6}>
          <VStack spacing={1}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {grade.student?.name  || "Name Not Available"}
            </Heading>
            <Text color={"gray.500"}>
              {grade.student?.user?.email || "Email Not Available"}
            </Text>
          </VStack>
  
          <SimpleGrid
            mt={12}
            columns={{ base: 2, md: 2 }}
            spacing={6}
            justifyContent="center"
          >
            <GridItem>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>
                  {grade.student?.registration_no || "Not Available"}
                </Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Registration No
                </Text>
              </Stack>
            </GridItem>
  
            <GridItem>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>
                  {grade.student?.phone || "Not Available"}
                </Text>
  
                <Text fontSize={"sm"} color={"gray.500"}>
                  Phone Number
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack spacing={0} align={"center"}>
                <Text textAlign="center" fontWeight={600}>
                  {grade.student?.qualification || "Not Available"}
                </Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Qualification
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>
                  {grade.student?.gender || "Not Available"}
                </Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Gender
                </Text>
              </Stack>
            </GridItem>
  
            <GridItem>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{grade?.marks || "Not Available"}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Marks
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
            <Stack spacing={0} align={"center"}>
              <Text textAlign="center" fontWeight={600}>
                {format(new Date(grade.date), "dd MMMM  YYY")}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                 Date
              </Text>
            </Stack>
          </GridItem>
           
            <GridItem>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>
                  {grade.file ? "View" : "Not Available"}
                </Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  File
                </Text>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    );
  }
  
  export default StudentCard;
  