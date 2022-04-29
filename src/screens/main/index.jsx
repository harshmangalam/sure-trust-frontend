import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import ScrollingMessages from "../../components/shared/ScrollingMessages";

function MainLayout() {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box pos={"sticky"} top={0} zIndex={100}>
        <Header />
      </Box>

      <Box flexGrow={1}>
        <ScrollingMessages />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
