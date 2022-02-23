import { Box, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ScrollingMessages from "../../components/shared/ScrollingMessages";
import Header from "../../components/auth/Header";
import Footer from "../../components/auth/Footer";

function AuthLayout() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "auto")}
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box pos={"sticky"} top={0} zIndex={100}>
        <Header />
        <ScrollingMessages />
      </Box>
      <Box as="main" py={12} px={4}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default AuthLayout;
