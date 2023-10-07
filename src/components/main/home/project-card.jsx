import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
export default function ProjectCard({
  project_name,
  poster_url,
  domain_name,
  onDragStart,
  github_url,
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
        <HStack justifyContent={"space-between"} gap={4}>
          <Stack flex={1}>
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
          {github_url && (
            <IconButton
              target="_blank"
              as={"a"}
              href={github_url}
              flex={"none"}
            >
              <FaGithub />
            </IconButton>
          )}
        </HStack>
      </Box>
    </Center>
  );
}
