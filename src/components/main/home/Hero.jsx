import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { useAuthState } from "../../../contexts/auth";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
export default function Hero() {
  const { isAuthenticated } = useAuthState();

  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        >
          <Text as={"span"} position={"relative"} color={"blue.400"}>
            SURE Trust
          </Text>
          <br />
          <Text as={"span"}>Skill Upgradation for Rural-youth Empowerment</Text>
        </Heading>

        <Wrap spacing={4}>
          {!isAuthenticated ? (
            <Button
              as={Link}
              to="/auth/signup"
              colorScheme="blue"
              rounded={"full"}
              px={6}
            >
              Get Started
            </Button>
          ) : (
            <Button
              as={Link}
              to="/dashboard"
              colorScheme="blue"
              rounded={"full"}
              px={6}
            >
              Dashboard
            </Button>
          )}

          <Button
            as={Link}
            to="/courses"
            colorScheme="purple"
            rounded={"full"}
            px={6}
          >
            Explore Courses
          </Button>
        </Wrap>
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
          color={useColorModeValue("purple.100", "purple.300")}
        />

        <Box
          w="full"
          as={"iframe"}
          loading="lazy"
          height="400"
          src="www.youtube.com/embed/GaSnKf9Hr6w"
        />
      </Flex>
    </Stack>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"full"}
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
