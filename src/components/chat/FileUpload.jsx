import {
  Alert,
  AlertDescription,
  AlertIcon,
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
  Tag,
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
  const inputFileRef = useRef();
  const fileRef = useRef();
  const [preview, setPreview] = useState("");
  const { uploadToCloud, uploading } = useCloudinary();
  const { handleSentMessage } = useChatDispatch();
  const { currentUser } = useAuthState();
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    fileRef.current = file;
    const size = file.size;
    if (size > 5 * 1000000) {
      setError("File size must be less than 5 mb");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const sendFile = async () => {
    try {
      const data = await uploadToCloud(fileRef.current);
      fileRef.current = null;
      setPreview("");
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
    fileRef.current = null;
    setPreview("");
  };
  return (
    <Popover defaultIsOpen={false} isLazy lazyBehavior="unmount">
      <PopoverTrigger>
        <IconButton
          title="Send Image"
          colorScheme="whatsapp"
          isRound
          variant="ghost"
          size={"md"}
          icon={<BsImages size={24} />}
          aria-label="emoji picker"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Send Image</PopoverHeader>
        <PopoverBody>
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button
            isLoading={uploading || loading === "sending-message"}
            disabled={uploading || loading}
            w={"full"}
            onClick={() => inputFileRef.current?.click()}
            leftIcon={<BsImages size={24} />}
            colorScheme="twitter"
            mt={4}
          >
            Choose Image
          </Button>

          <VisuallyHidden>
            <input
              accept="image/*"
              type={"file"}
              onChange={handleFileChange}
              ref={inputFileRef}
            />
          </VisuallyHidden>
          {preview && (
            <VStack mt={4} spacing={4}>
              <VStack spacing={1}>
                <Image src={preview} w={"full"} h={200} objectFit="contain" />

                <Tag
                  textAlign={"center"}
                  w="full"
                  colorScheme={"twitter"}
                  size={"lg"}
                >
                  {fileRef.current.name}
                </Tag>
              </VStack>

              <HStack>
                <Button
                  isLoading={uploading}
                  disabled={uploading}
                  onClick={sendFile}
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
