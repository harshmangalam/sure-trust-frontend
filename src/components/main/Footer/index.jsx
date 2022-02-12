import {
  Box,
  IconButton,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Tooltip,
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
          {socialLinks.map((link, i) => (
            <Tooltip key={link.name} label={link.name}>
              <IconButton
                aria-label={link.name}
                size="lg"
                isRound={true}
                icon={link.icon}
                as="a"
                href={link.link}
                target="_blank"
              />
            </Tooltip>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
