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
      w={"full"}
      h={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"md"}
      rounded={"md"}
    >
      <Box
        as="img"
        loading="lazy"
        roundedTop={"md"}
        src={image}
        height={"500px"}
        alt={name}
        onClick={() => window.open(image)}
        cursor={"pointer"}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={6}>
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
    </Box>
  );
}
