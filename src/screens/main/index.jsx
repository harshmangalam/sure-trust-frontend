import { Box, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";

function MainLayout() {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.50", "auto")}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Header />

      <Box py={12}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
