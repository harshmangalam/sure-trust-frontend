import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      minH={"200px"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.700"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title, url }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar
        as="a"
        href={url}
        target={"_blank"}
        rel="noreferrer"
        src={src}
        alt={name}
        mb={2}
      />
      <Stack
        as="a"
        href={url}
        target={"_blank"}
        rel="noreferrer"
        spacing={-1}
        align={"center"}
      >
        <Text fontWeight={600}>{name}</Text>

        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function ReviewCard({
  reviewer_name,
  reviewer_picture_url,
  supplier,
  url,
  rating,
  text,
}) {
  return (
    <Testimonial>
      <TestimonialContent>
        <TestimonialHeading>{reviewer_name}</TestimonialHeading>
        <TestimonialText>{text}</TestimonialText>
        <Flex mt={2} color={"yellow.500"}>
          {[...Array(Math.round(rating)).keys()].map((r) => (
            <AiFillStar />
          ))}
        </Flex>
      </TestimonialContent>
      <TestimonialAvatar
        src={reviewer_picture_url}
        name={"Jane Cooper"}
        title={`${supplier}  review`}
        url={url}
      />
    </Testimonial>
  );
}
