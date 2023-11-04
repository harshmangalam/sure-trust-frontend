import {
  Box,
  HStack,
  Flex,
  Button,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../../shared/ThemeToggle";
import MobileMenu from "./MobileMenu";
import Logo from "../../shared/Logo";
import DesktopMenu from "./DesktopMenu";
import { RiHome2Line } from "react-icons/ri";
import { useAuthState } from "../../../contexts/auth";
import NavProfileMenu from "../../shared/NavProfileMenu";
import { FaGithub } from "react-icons/fa";
function Header() {
  const { isAuthenticated } = useAuthState();

  return (
    <Box as="header" bg={useColorModeValue("white", "gray.700")}>
      <Box shadow="sm" as="nav" py="2" px={{ base: 4, md: 8 }} mx="auto">
        <Flex justify="space-between" align="center">
          <Logo />

          <HStack>
            {/* display on larger screen  */}
            <HStack display={{ base: "none", md: "flex" }} spacing={4}>
              <Button variant="ghost" as={NavLink} to="/iery">
                IERY
              </Button>
              <Button
                display={["none", "none", "none", "none", "flex"]}
                variant="ghost"
                as={NavLink}
                to="/placement-cell"
              >
                Placement Assistance Cell
              </Button>
              {!isAuthenticated && (
                <HStack spacing={2}>
                  {authLinks.map((link) => (
                    <Button
                      variant="ghost"
                      key={link.name}
                      as={NavLink}
                      to={link.to}
                    >
                      {link.name}
                    </Button>
                  ))}
                </HStack>
              )}
              <IconButton as={NavLink} to="/" aria-label="Home">
                <RiHome2Line size={20} />
              </IconButton>
              <IconButton
                as={"a"}
                href="https://github.com/sure-trust"
                target="_blank"
              >
                <FaGithub size={20} />
              </IconButton>
              <DesktopMenu />
              <ThemeToggle />
              {isAuthenticated && <NavProfileMenu />}
            </HStack>

            {/* display on smaller screen  */}
            <HStack display={{ base: "flex", md: "none" }}>
              <IconButton as={NavLink} to="/" aria-label="Home">
                <RiHome2Line size={20} />
              </IconButton>
              <IconButton
                as={"a"}
                href="https://github.com/sure-trust"
                target="_blank"
              >
                <FaGithub size={20} />
              </IconButton>
              <ThemeToggle />
              <MobileMenu />
              {isAuthenticated && <NavProfileMenu />}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;

const authLinks = [
  { name: "Login", to: "/auth/login" },
  { name: "Signup", to: "/auth/signup" },
];
