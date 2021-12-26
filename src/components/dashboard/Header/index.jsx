import {
  IconButton,
  Box,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NavProfileMenu from "../../shared/NavProfileMenu"
import { FiMenu } from "react-icons/fi";
import Logo from "../../shared/Logo";
import Notification from "../../shared/Notification";
import ThemeToggle from "../../shared/ThemeToggle";
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
        <Notification />
        <ThemeToggle />

        <NavProfileMenu />
      </HStack>
    </Flex>
  );
}

export default Header;
