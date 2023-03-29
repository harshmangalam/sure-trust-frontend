import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function DomainCard() {
  const collaboratorHoverBg = useColorModeValue("blue.400", "blue.700");
  return (
    <Link to="/iery/1">
      <Box
        rounded="xl"
        p={6}
        _hover={{
          bg: collaboratorHoverBg,
          textColor: "white",
        }}
        borderWidth="1px"
        textAlign={"center"}
        cursor="pointer"
      >
        <Text fontSize="lg" textAlign="center">
          Web Development
        </Text>
      </Box>
    </Link>
  );
}
