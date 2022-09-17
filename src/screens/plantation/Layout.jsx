import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function PlantationLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
