import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="purple" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://images.unsplash.com/photo-1651489041436-7dd6c9e50b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Posts = () => {
  return (
    <Box maxW={"container.xl"} p="2" mt={8}>
      <Heading as="h2" marginTop="4">
        Posts
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8} mt={4}>
        {Array(12)
          .fill(0)
          .map((post) => (
            <GridItem>
              <Box>
                <Box borderRadius="lg" overflow="hidden">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
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
                  </Link>
                </Box>
                <BlogTags tags={["Engineering", "Product"]} marginTop="6" />
                <Heading fontSize="xl" marginTop="4">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Some blog title
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                 
                </Text>
                <BlogAuthor
                  name="John Doe"
                  date={new Date("2021-04-06T19:01:27Z")}
                />
              </Box>
            </GridItem>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Posts;
