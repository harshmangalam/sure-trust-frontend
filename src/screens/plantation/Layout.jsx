import { Link, Outlet } from "react-router-dom";
import { Box, Flex, HStack, IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";
import Logo from "../../components/shared/Logo";
import { RiHome2Line } from "react-icons/ri";
import ThemeToggle from "../../components/shared/ThemeToggle";
import CreatePlantation from "../../components/plantation/CreatePlantation";

export default function PlantationLayout() {
  return (
    <Box minH="100vh" bg={useColorModeValue("white","green.900")}>
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
          <Tooltip label="Home">
            <IconButton as={Link} to="/">
              <RiHome2Line size={20} />
            </IconButton>
          </Tooltip>

          <CreatePlantation />

          <ThemeToggle />
        </HStack>
      </Flex>
      <Outlet />
    </Box>
  );
}
