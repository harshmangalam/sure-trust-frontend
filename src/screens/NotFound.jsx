import { Flex, Heading, Text, Button, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuthState } from "../contexts/auth";
export default function NotFound() {
  const { isAuthenticated } = useAuthState();
  return (
    <Flex h="100vh" align="center" justify="center" direction="column">
      <Heading
        display="inline-block"
        size="4xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>

      <Text fontSize="2xl" color={"gray.500"} mb={6}>
        Not Found
      </Text>

      <Wrap>
        <Button
          as={Link}
          to="/"
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
        {isAuthenticated && (
          <Button
            as={Link}
            to="/dashboard"
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Go to Dashboard
          </Button>
        )}
      </Wrap>
    </Flex>
  );
}
