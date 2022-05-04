import { Box, Heading, Image, Text } from "@chakra-ui/react";
import PostAuthor from "./PostAuthor";
import PostTags from "./PostTags";

export default function PostCard() {
  return (
    <Box>
      <Box borderRadius="lg" overflow="hidden">
        <Image
          transform="scale(1.0)"
          src={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          }
          alt="some text"
          objectFit="contain"
          width="100%"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>
      <PostTags tags={["ReactJs", "NodeJs"]} />
      <Heading fontSize="xl" marginTop="4">
        Some blog title
      </Heading>
      <Text as="p" fontSize="md" marginTop="2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <PostAuthor
        name="John Doe"
        createdAt={new Date("2021-04-06T19:01:27Z")}
      />
    </Box>
  );
}
