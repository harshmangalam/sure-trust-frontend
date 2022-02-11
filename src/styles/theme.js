import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  fonts: { body: "Oxygen, sans-serif", heading: "Oswald, sans-serif" },
});

export default theme;
