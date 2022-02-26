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

export default function DeveloperCard({ developer }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={developer.image}
        alt={developer.name}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {developer.name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {developer.position}
      </Text>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {developer.education}
      </Text>

      <Wrap align={"center"} justify={"center"} direction={"row"} mt={6}>
        {developer.links.map((link,i) => (
          <Tooltip hasArrow label={link.name} key={i}>
            <IconButton
              colorScheme={link.color}
              as="a"
              href={link.url}
              target={"_blank"}
              key={link.name}
              rounded={"full"}
              size={"lg"}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Wrap>
    </Box>
  );
}
