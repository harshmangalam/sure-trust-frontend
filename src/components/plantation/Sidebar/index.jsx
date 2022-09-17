import { Box, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";

import LinkItem from "./LinkItem";
import Logo from "../../shared/Logo";

function Sidebar({ onClose, navLinks, ...rest }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box mt={2}>
        {navLinks.map((link) => (
          <LinkItem onClose={onClose} key={link.name} link={link} />
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;
