import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

export default function StoryTags({ tags, removeTag }) {
  return (
    <HStack spacing={2} mt={8}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="purple" key={tag}>
            <TagLabel>{tag}</TagLabel>
            {removeTag && <TagCloseButton onClick={() => removeTag(tag)} />}
          </Tag>
        );
      })}
    </HStack>
  );
}
