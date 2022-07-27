import {
  Button,
  HStack,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsImages } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import useCloudinary from "../../hooks/useCloudinary";
import { useChatDispatch, useChatState } from "../../contexts/chat";
import { useAuthState } from "../../contexts/auth";
export default function FileUpload() {
  const { activeChat, loading } = useChatState();
  const fileRef = useRef();
  const imageRef = useRef();
  const [localImage, setLocalImage] = useState("");
  const { uploadToCloud, uploading } = useCloudinary();
  const { handleSentMessage } = useChatDispatch();
  const { currentUser } = useAuthState();

  const handleImageChange = (e) => {
    imageRef.current = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setLocalImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const sendImage = async () => {
    try {
      const data = await uploadToCloud(imageRef.current);
      imageRef.current = null;
      setLocalImage("");
      handleSentMessage(activeChat.roomId, {
        batch: activeChat.id,
        course: activeChat.course.id,
        sender: {
          id: currentUser.id,
          name: currentUser.name,
        },

        file: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveImage = () => {
    imageRef.current = null;
    setLocalImage("");
  };
  return (
    <Popover defaultIsOpen={false} isLazy lazyBehavior="unmount">
      <PopoverTrigger>
        <IconButton
          title="Image"
          colorScheme="whatsapp"
          isRound
          variant="solid"
          size={"sm"}
          icon={<BsImages size={24} />}
          aria-label="emoji picker"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Image</PopoverHeader>
        <PopoverBody>
          <Button
            isLoading={uploading || loading === "sending-message"}
            disabled={uploading || loading}
            isFullWidth
            onClick={() => fileRef.current?.click()}
            leftIcon={<BsImages size={24} />}
            colorScheme="twitter"
          >
            Choose Image
          </Button>
          <VisuallyHidden>
            <input
              type={"file"}
              accept="image/*"
              onChange={handleImageChange}
              ref={fileRef}
            />
          </VisuallyHidden>
          {localImage && (
            <VStack mt={4} spacing={4}>
              <Image src={localImage} w={"full"} h={200} objectFit="contain" />
              <HStack>
                <Button
                  isLoading={loading === "sending-message"}
                  onClick={sendImage}
                  size="sm"
                  colorScheme={"twitter"}
                >
                  Send Image
                </Button>
                <Tooltip label="Delete Image">
                  <IconButton
                    size="sm"
                    colorScheme={"red"}
                    icon={<AiOutlineDelete size={24} />}
                    onClick={handleRemoveImage}
                  />
                </Tooltip>
              </HStack>
            </VStack>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
