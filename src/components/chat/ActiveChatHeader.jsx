import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { CgClose } from "react-icons/cg";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useChatState } from "../../contexts/chat";

export default function ActiveChatHeader() {
  const batchBg = useColorModeValue("white", "blue.800");
  const { activeChat } = useChatState();

  return (
    <Box w="full" bg={batchBg}>
      <HStack justify={"space-between"} px={2} py={4}>
        <HStack w="full" spacing={4}>
          <Avatar
            bg={"blue.400"}
            size={"md"}
            icon={<IoPeopleOutline color={"white"} size={24} />}
          />
          <VStack align="flex-start" spacing={0}>
            <Heading fontSize={"lg"}>{activeChat.batch_name}</Heading>
            <Text fontSize={"sm"}>{activeChat.course.course_name}</Text>
          </VStack>
        </HStack>

        <Box display={["block", "block", "none"]}>
          <Tooltip label={"close chat"}>
            <IconButton as={Link} to={"/chat"} icon={<CgClose />} />
          </Tooltip>
        </Box>
      </HStack>
      <Divider />
    </Box>
  );
}
