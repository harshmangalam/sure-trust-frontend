import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Footer from "../../components/dashboard/Footer";

import { useAuthState } from "../../contexts/auth";
import { studentNavLinks, teacherNavLinks } from "../../data/dashboard";

export default function DashboardLayout() {
  const { role } = useAuthState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {role === "student" && (
        <Sidebar
          onClose={onClose}
          display={{ base: "none", md: "block" }}
          navLinks={studentNavLinks}
        />
      )}
      {role === "teacher" && (
        <Sidebar
          onClose={onClose}
          display={{ base: "none", md: "block" }}
          navLinks={teacherNavLinks}
        />
      )}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          {role === "student" && (
            <Sidebar onClose={onClose} navLinks={studentNavLinks} />
          )}
          {role === "teacher" && (
            <Sidebar onClose={onClose} navLinks={teacherNavLinks} />
          )}
        </DrawerContent>
      </Drawer>

      <Box
        display={"flex"}
        minH={"100vh"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Header onOpen={onOpen} />

        <Box
          bg={useColorModeValue("gray.100", "")}
          ml={{ base: 0, md: 60 }}
          flexGrow={1}
          py={12}
        >
          
          <Outlet />
        </Box>
        <Box ml={{ base: 0, md: 60 }}>
          <Divider />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
