import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function ServiceCard({
  image,
  name,
  course,
  batch,
  role,
  subtitle,
}) {
  return (
    <Box
      maxW={"445px"}
      w={"full"}
      h={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"md"}
      rounded={"md"}
      p={6}
    >
      <Box
        onClick={() => window.open(image)}
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        cursor={"pointer"}
      >
        <Image src={image} width={"full"} alt={name} />
      </Box>
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {role}
        </Text>
        <Heading
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("gray.700", "white")}
          fontSize={"xl"}
          fontFamily={"body"}
        >
          {name}
        </Heading>
      </Stack>

      <Stack mt={6} direction={"column"} spacing={0} fontSize={"sm"}>
        {subtitle && <Text fontWeight={600}>{subtitle}</Text>}

        {course && (
          <Text color={"gray.500"}>
            {course} · {batch}
          </Text>
        )}
      </Stack>
    </Box>
  );
}
