import { HStack, Image, Text } from "@chakra-ui/react";

export default function BlogAuthor({ name, createdAt }) {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://images.unsplash.com/photo-1651489041436-7dd6c9e50b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="medium">{name}</Text>
      <Text>—</Text>
      <Text>{createdAt.toLocaleDateString()}</Text>
    </HStack>
  );
}
