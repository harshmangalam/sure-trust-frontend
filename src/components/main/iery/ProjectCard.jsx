import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  HStack,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { useMemo } from "react";
import StudentsListModal from "./StudentsListModal";
import { FaGithub } from "react-icons/fa";
export default function ProjectCard({
  project_name,
  domain,
  description,
  STUDENTS,
  poster_url,
  github_url,
}) {
  const admin = useMemo(() => {
    const student = STUDENTS?.filter((student) => student.is_admin);
    if (student?.length) {
      return student[0];
    }
    return null;
  }, [STUDENTS]);
  return (
    <Center>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={poster_url}
            alt={domain}
            w={"full"}
            maxH={"400px"}
            h="full"
            objectFit="cover"
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {domain}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {project_name}
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
        </Stack>
        <HStack justify={"space-between"}>
          {admin && (
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar name={admin.name} src={admin.image_url} alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{admin.name}</Text>
                <Text color={"gray.500"}>Project leader</Text>
              </Stack>
            </Stack>
          )}
          <HStack>
            <StudentsListModal students={STUDENTS} />
            {github_url && (
              <Tooltip label="Github">
                <IconButton
                  rounded="full"
                  target="_blank"
                  as={"a"}
                  href={github_url}
                  cursor={"pointer"}
                >
                  <FaGithub />
                </IconButton>
              </Tooltip>
            )}
          </HStack>
        </HStack>
      </Box>
    </Center>
  );
}
