import { Box, Heading, Image, Text } from "@chakra-ui/react";
import StoryAuthor from "./StoryAuthor";
import StoryTags from "./StoryTags";

export default function PostCard() {
  return (
    <Box rounded={"xl"} borderWidth={"1px"} p={4}>
      <StoryAuthor
        name="John Doe"
        createdAt={new Date("2021-04-06T19:01:27Z")}
      />
      <Heading fontSize="xl" marginTop="4">
        Some blog title
      </Heading>
      <Text as="p" fontSize="md" marginTop="2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <StoryTags tags={["ReactJs", "NodeJs"]} />
    </Box>
  );
}
