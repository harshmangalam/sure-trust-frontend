import { Link, Outlet } from "react-router-dom";
import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import Logo from "../../components/shared/Logo";
import { Tooltip } from "chart.js";
import { RiHome2Line } from "react-icons/ri";
import ThemeToggle from "../../components/shared/ThemeToggle";
import CreatePlantation from "../../components/main/plantation/CreatePlantation";

export default function PlantationLayout() {
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
          <CreatePlantation />

          <ThemeToggle />
        </HStack>
      </Flex>
      <Outlet />
    </Box>
  );
}
