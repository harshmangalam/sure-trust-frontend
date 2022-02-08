import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  Flex,
  SimpleGrid,
  GridItem,
  Button,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { links } from "./_links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import Logo from "../../shared/Logo";
import { useAuthState } from "../../../contexts/auth";
function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated } = useAuthState();
  return (
    <Box>
      <IconButton onClick={onOpen}>
        <AiOutlineMenu size={20} />
      </IconButton>
      <Drawer
        variant=""
        placement="top"
        onClose={onClose}
        isOpen={isOpen}
        allowPinchZoom={true}
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex align="center" justify="space-between">
              <Logo />
              <IconButton onClick={onClose}>
                <AiOutlineClose />
              </IconButton>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {!isAuthenticated && (
              <SimpleGrid columns={2} spacing={3}>
                <Button as={Link} to="/auth/login" variant="outline">
                  Login
                </Button>
                <Button as={Link} to="/auth/signup" variant="outline">
                  Signup
                </Button>
              </SimpleGrid>
            )}

            <SimpleGrid mt={5} column={1} spacing={3}>
              {links.map((link) => (
                <GridItem key={link.name}>
                  <Button
                    onClick={onClose}
                    size="md"
                    variant="ghost"
                    as={NavLink}
                    to={link.to}
                  >
                    {link.name}
                  </Button>
                </GridItem>
              ))}
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;
