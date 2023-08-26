import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ProjectCard({ projectName, domain, videoLink }) {
  return (
    <Center>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        p={6}
        shadow={"md"}
        overflow={"hidden"}
        rounded={"xl"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Box
            align={"center"}
            w={"100%"}
            h={"full"}
            as={"iframe"}
            roundedTop={"xl"}
            title="video"
            src={videoLink}
            allowFullScreen
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
            {projectName}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
