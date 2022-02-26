import {
  IconButton,
  Box,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NavProfileMenu from "../../shared/NavProfileMenu";
import { FiMenu } from "react-icons/fi";
import Logo from "../../shared/Logo";
import ThemeToggle from "../../shared/ThemeToggle";
import { RiHome2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header({ onOpen }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={4}
      height={20}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        size="lg"
      />

      <Box display={{ base: "flex", md: "none" }}>
        <Logo />
      </Box>

      <HStack spacing={{ base: 4, md: 6 }}>
        <IconButton as={Link} to="/" aria-label="Home">
          <RiHome2Line />
        </IconButton>
        <ThemeToggle />

        <NavProfileMenu />
      </HStack>
    </Flex>
  );
}

export default Header;
