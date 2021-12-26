import {
  Heading,
  Avatar,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function CourseTeacher({ teacher }) {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
    >
      <Avatar size={"2xl"} src={teacher.profile_pic} alt={teacher.name} />
      <Heading fontSize={"xl"} fontFamily={"body"}>
        {teacher.name}
      </Heading>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.300")}
        fontWeight={600}
      >
        {teacher.qualification}
      </Text>
    </VStack>
  );
}
