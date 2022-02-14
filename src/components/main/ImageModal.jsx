import {
  AspectRatio,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function ImageModal({ image, setImage }) {
  return (
    <Modal
      allowPinchZoom
      orientation="vertical"
      onClose={() => setImage(null)}
      isOpen={image}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{image.image_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AspectRatio ratio={1}>
            <Image
              mt={2}
              verticalAlign={"middle"}
              rounded={"xl"}
              src={image.images}
              alt={image.image_name}
            />
          </AspectRatio>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button onClick={() => setImage(null)}>Close</Button>
            <Button as="a" href={image.images} target="_blank">
              Open in Browser
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
