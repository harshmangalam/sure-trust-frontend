import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip label="Switch Theme">
      <IconButton onClick={toggleColorMode} aria-label="Toggle Theme">
        {colorMode === "light" ? (
          <RiMoonFill size={20} />
        ) : (
          <RiSunFill size={20} />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;
