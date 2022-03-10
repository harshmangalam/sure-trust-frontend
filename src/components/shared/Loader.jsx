import { Box, Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <Box pos="relative" minH="100vh">
      <Box pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
        <Spinner label="Loading..." thickness="4px" size="xl" />
      </Box>
    </Box>
  );
}

export default Loader;
