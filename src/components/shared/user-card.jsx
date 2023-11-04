import {
  Heading,
  Text,
  useColorModeValue,
  Button,
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";

export default function UserCard({
  name,
  image,
  subtitle,
  bio,
  linkedin,
  onDragStart = () => {},
}) {
  return (
    <Box
      onDragStart={onDragStart}
      mx={2}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"lg"}
      borderWidth={"1px"}
      shadow={"md"}
    >
      <Image
        w={"full"}
        src={image}
        alt={name}
        mb={4}
        pos={"relative"}
        height={"72"}
        roundedTop={"lg"}
        objectFit={"cover"}
      />
      <VStack px={3} py={4}>
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {subtitle}
        </Text>
        <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
          {bio}
        </Text>
        {linkedin && (
          <Box pt={4}>
            <Button
              colorScheme={"blue"}
              as="a"
              href={linkedin}
              target={"_blank"}
              rounded={"full"}
            >
              Linkedin
            </Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
}
