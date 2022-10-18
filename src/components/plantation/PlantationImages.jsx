import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Tooltip,
  useDisclosure,
  Badge,
  Box,
  Image,
  ModalFooter,
  Button,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import { useMemo } from "react";

import { BsImages } from "react-icons/bs";
export default function PlantationImages({ images }) {
  images = useMemo(
    () => images.reduce((prev, curr) => [...prev, ...curr], []),
    [images]
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip label={"Images"}>
        <Box pos={"relative"}>
          <IconButton
            aria-label="Images"
            icon={<BsImages size={24} />}
            onClick={onOpen}
            variant="ghost"
            colorScheme="whatsapp"
            rounded="full"
          />
          <Box pos="absolute" top={-2} right={-1}>
            <Badge
              colorScheme={"whatsapp"}
              w={5}
              h={5}
              display="grid"
              placeItems={"center"}
              rounded="full"
              variant="solid"
            >
              {images?.length}
            </Badge>
          </Box>
        </Box>
      </Tooltip>

      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="custom-scrollbar">
            <Grid
              gap={4}
              my={4}
              templateColumns={[
                "repeat(1,1fr)",
                "repeat(2,1fr)",
                "repeat(3,1fr)",
              ]}
            >
              {images.map((image) => (
                <GridItem key={image.id}>
                  <AspectRatio ratio={1}>
                    <Image
                      mt={2}
                      verticalAlign={"middle"}
                      rounded={"xl"}
                      src={image.url}
                      alt={image.url}
                      maxH={400}
                      cursor={"pointer"}
                      onClick={() => window.open(image.url, "_blank")}
                      objectFit="cover"
                    />
                  </AspectRatio>
                </GridItem>
              ))}
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
