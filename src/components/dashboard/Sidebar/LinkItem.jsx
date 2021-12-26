import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

function LinkItem({ link, onClose }) {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? "seagreen" : "",
        };
      }}
      to={link.to}
      onClick={onClose}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue("blue.400", "gray.700"),
          color: "white",
        }}
      >
        {link.icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={link.icon}
          />
        )}
        {link.name}
      </Flex>
    </NavLink>
  );
}

export default LinkItem;
