import { Box, Heading, Image, Text } from "@chakra-ui/react";
import PostAuthor from "./PostAuthor";
import PostTags from "./PostTags";

export default function PostCard({ poster, title, tags, removeTag }) {
  return (
    <Box>
      <Box borderRadius="lg" overflow="hidden">
        {poster && (
          <Image
            transform="scale(1.0)"
            src={poster}
            alt="some text"
            objectFit="contain"
            width="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        )}
      </Box>
      <PostTags tags={tags} removeTag={removeTag} />
      <Heading fontSize="xl" marginTop="4">
        {title}
      </Heading>
      <Text as="p" fontSize="md" marginTop="2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, rem
        aliquid laboriosam facilis modi, cumque necessitatibus magni nulla
        incidunt quibusdam tempora laborum quis labore laudantium dolorum non
        error aspernatur sint illum dolorem repellendus quaerat. Debitis, quae
        vel. Porro illum cumque sint quibusdam distinctio dignissimos aliquid
        molestias debitis nostrum, ipsam voluptates repellendus. Maiores odit
        necessitatibus magni, laboriosam laudantium totam suscipit voluptatibus
        rerum! Recusandae libero facilis cum dicta! Alias minus nobis iusto non
        unde? Harum at pariatur illo aliquid fugiat, eum aspernatur nesciunt.
        Dolor omnis officiis illum at accusantium, nemo neque eaque alias
        praesentium in necessitatibus, sunt ea dolore, mollitia sequi. Repellat!
      </Text>
      <PostAuthor
        name="John Doe"
        createdAt={new Date("2021-04-06T19:01:27Z")}
      />
    </Box>
  );
}
