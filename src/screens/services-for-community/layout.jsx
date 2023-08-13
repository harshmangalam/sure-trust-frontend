import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/shared/Logo";
import { RiHome2Line } from "react-icons/ri";
import ThemeToggle from "../../components/shared/ThemeToggle";
export default function ServicesForCommunityLayout() {
  return (
    <Flex minH={"100vh"} direction={"column"} alignItems={"flex-start"}>
      <Flex
        as={"nav"}
        maxW="container.xl"
        mx={"auto"}
        py={2}
        justify="space-between"
        align={"center"}
        px={[2]}
        w={"100%"}
      >
        <Logo />
        <HStack>
          <Tooltip label="Home">
            <IconButton as={Link} to="/">
              <RiHome2Line size={20} />
            </IconButton>
          </Tooltip>

          <ThemeToggle />
        </HStack>
      </Flex>
      <Box flex={1} w="full" py={6}>
        <Outlet />
      </Box>
    </Flex>
  );
}
