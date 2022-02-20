import { Heading, Box, Text, useColorModeValue, Image } from "@chakra-ui/react";

export default function LstMentorCard({ body }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      maxW={"xl"}
    >
      <Image
        width={"100%"}
        h={[500, 400, 400]}
        src={body.image}
        alt={body.name}
        mb={4}
      />

      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {body.mentor}
      </Heading>

      <Text
        textAlign={"justify"}
        color={useColorModeValue("gray.700", "gray.400")}
        mt={4}
      >
        {body.text}
      </Text>
    </Box>
  );
}
