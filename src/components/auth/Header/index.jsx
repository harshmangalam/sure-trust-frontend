import { Box, HStack, useColorModeValue, IconButton } from "@chakra-ui/react";
import { RiHome2Line } from "react-icons/ri";
import Logo from "../../shared/Logo";
import ThemeToggle from "../../shared/ThemeToggle";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} shadow="sm" py={2}>
      <HStack px={4} justifyContent="space-between">
        <Logo />
        <HStack>
          <IconButton as={Link} to="/">
            <RiHome2Line />
          </IconButton>
          <ThemeToggle />
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;
