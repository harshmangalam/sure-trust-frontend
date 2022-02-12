import {
  Box,
  IconButton,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { socialLinks } from "../../../data/social";
import Logo from "../../shared/Logo";

export default function SmallWithLogoLeft() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
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
          {socialLinks.map((link) => (
            <IconButton key={link.name} rounded={"full"} aria-label={link.name}>
              {link.icon}
            </IconButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
