import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

export default function IERYHero() {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl" }}
        >
          <Text as={"span"} color={"blue.400"}>
            SURE Trust - IERY
          </Text>
          <br />
          <Text as={"span"} position={"relative"}>
            Innovation & Entrepreneurship Hub for Educated Rural Youth
          </Text>
        </Heading>
        <Text maxW={"md"} fontSize={"lg"}>
          Gain hands-on experience through executive-led internships which are
          open to 3rd/4th year B.Tech, MCA, MBA, and PG/Ph.D. students.
        </Text>
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Blob
          h={"150%"}
          position={"absolute"}
          top={"-20%"}
          left={0}
          zIndex={-1}
          color={useColorModeValue("blue.100", "blue.300")}
        />

        <Box
          position={"relative"}
          height={"300px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
        >
          <Box
            align={"center"}
            w={"100%"}
            h={"300px"}
            as={"iframe"}
            rounded={"xl"}
            title="video"
            src={`https://www.youtube.com/embed/YTu-pnGVgJQ`}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
