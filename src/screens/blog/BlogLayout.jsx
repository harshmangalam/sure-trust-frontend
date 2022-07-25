import { Box, Flex, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { RiHome2Line, RiAddLine } from "react-icons/ri";

import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/shared/Logo";
import ThemeToggle from "../../components/shared/ThemeToggle";

export default function BlogLayout() {
  return (
    <Box>
      <Flex
        as={"nav"}
        maxW="container.xl"
        mx={"auto"}
        py={2}
        justify="space-between"
        align={"center"}
        px={[2]}
      >
        <Logo />
        <HStack>
          <Tooltip label="Blog Home">
            <IconButton as={Link} to="/blog">
              <RiHome2Line size={20} />
            </IconButton>
          </Tooltip>
          <Tooltip label="Create Post">
            <IconButton as={Link} to="create-post">
              <RiAddLine size={20} />
            </IconButton>
          </Tooltip>
          <ThemeToggle />
        </HStack>
      </Flex>
      <Box as={"main"} maxW="container.xl" mx="auto" py={8}>
        <Outlet />
      </Box>
    </Box>
  );
}
