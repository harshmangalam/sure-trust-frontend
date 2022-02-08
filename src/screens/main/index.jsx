import { Box, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import ScrollingMessages from "../../components/main/ScrollingMessages";

function MainLayout() {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.50", "auto")}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <div>
        <Header />
        <ScrollingMessages />

      </div>

      <Box py={12}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
