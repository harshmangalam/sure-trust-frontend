import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function ProjectCard({
  project_name,
  poster_url,
  domain_name,
  onDragStart,
}) {
  return (
    <Center onDragStart={onDragStart} mx={2}>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        p={6}
        shadow={"md"}
        overflow={"hidden"}
        rounded={"xl"}
        borderWidth={"1px"}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image
            src={poster_url}
            alt={project_name}
            w={"full"}
            h={400}
            objectFit="cover"
            loading="lazy"
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"xs"}
            letterSpacing={1.1}
          >
            {domain_name}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            {project_name}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
