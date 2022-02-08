import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LstMentorCard({ body }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={body.image}
        alt={body.name}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {body.mentor}
      </Heading>

      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {body.text}
      </Text>
    </Box>
  );
}
