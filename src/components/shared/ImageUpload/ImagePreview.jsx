import { Box, IconButton, Image, Tag, Tooltip } from "@chakra-ui/react";
import { RiCloseLine } from "react-icons/ri";
import useCloudinary from "../../../hooks/useCloudinary";

export default function ImagePreview({ image }) {
  const { removeImage, removing } = useCloudinary();
  return (
    <Box pos="relative">
      <Image rounded="md" src={image.url} w={"full"} h={"40"} />

      <Box pos={"absolute"} bottom={"2"} left={"2"} right={"2"}>
        <Tag variant={"solid"} colorScheme={"whatsapp"}>{image.original_filename}</Tag>
      </Box>

      <Box pos={"absolute"} top={"2"} right={"2"}>
        <Tooltip label="Remove image">
          <IconButton
            isLoading={removing}
            rounded="full"
            colorScheme={"red"}
            size="sm"
            icon={<RiCloseLine size={20} />}
            aria-label="remove-image"
            onClick={() => removeImage()}
            disabled={removing}
          />
        </Tooltip>
      </Box>
    </Box>
  );
}
