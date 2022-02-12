import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  fonts: {  heading: "'Sora', sans-serif" },
});

export default theme;
