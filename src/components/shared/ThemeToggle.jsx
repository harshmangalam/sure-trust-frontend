import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton onClick={toggleColorMode}>
      {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
    </IconButton>
  );
}

export default ThemeToggle;
