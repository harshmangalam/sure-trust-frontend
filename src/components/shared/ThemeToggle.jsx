import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton onClick={toggleColorMode} aria-label="Toggle Theme">
      {colorMode === "light" ? <RiMoonFill size={20} /> : <RiSunFill size={20} />}
    </IconButton>
  );
}

export default ThemeToggle;
