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
  SimpleGrid,
  Image,
  ModalFooter,
  Button,
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
            <SimpleGrid columns={[1, 2, 3]} spacing={"4"}>
              {images?.map((image) => (
                <Image
                  src={image.url}
                  w="full"
                  h={"60"}
                  rounded="md"
                  objectFit={"cover"}
                />
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
