import {
  Box,
  IconButton,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../shared/Logo";

export default function SmallWithLogoLeft() {
  return (
    <Box bg={useColorModeValue("white", "gray.700")}>
      <Container
        as={Stack}
        maxW="container.xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>SURE Trust &copy; {new Date().getFullYear()}</Text>
        <Stack direction={"row"} spacing={6}>
          <IconButton rounded={"full"}>
            <FaTwitter />
          </IconButton>
          <IconButton rounded={"full"}>
            <FaYoutube />
          </IconButton>
          <IconButton rounded={"full"}>
            <FaInstagram />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
