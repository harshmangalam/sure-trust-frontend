import { Box, IconButton, Image, Tooltip } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";

export default function FileView({ file }) {
  return (
    <Box>
      <Image src={file.url} width="full" height={200} objectFit="contain" />
      <Tooltip label="Preview">
        <IconButton
          mt={2}
          colorScheme="blue"
          aria-label="Preview"
          icon={<AiOutlineEye size={24} />}
          size={"sm"}
          as="a"
          href={file.url}
          target="_blank"
        />
      </Tooltip>
    </Box>
  );
}
