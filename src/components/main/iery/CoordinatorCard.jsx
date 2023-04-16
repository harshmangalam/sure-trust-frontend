import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
  Wrap,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";

export default function CoordinatorCard({
  name,
  image_url,
  bio,
  linkedin_url
}) {
  return (
    <Box
      boxShadow={"md"}
      borderWidth={1}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar size={"2xl"} src={image_url} alt={name} mb={4} />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {name}
      </Heading>

      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {bio}
      </Text>

      <Wrap align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Tooltip hasArrow label={"Linkedin"}>
          <IconButton
            colorScheme="linkedin"
            as="a"
            href={linkedin_url}
            target={"_blank"}
           
            rounded={"full"}
            size={"lg"}
          >
            <BsLinkedin size={18} />
          </IconButton>
        </Tooltip>
      </Wrap>
    </Box>
  );
}
