import {
  Box,
  chakra,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { useQuery } from "react-query";
import { fetchFeatures } from "../../../../services";
const backgrounds = `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`;

function TestmonialCard(props) {
  const { title, description, index } = props;

  return (
    <Flex
      boxShadow={"lg"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"md"}
      p={8}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",

        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.99)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        backgroundImage: backgrounds,
      }}
    >
      <Stack>
        <Heading textAlign={"left"} fontSize={"xl"}>
          {title}
        </Heading>
        <chakra.p
          fontWeight={"medium"}
          fontSize={"18px"}
          pb={4}
          textAlign={"justify"}
        >
          {description}
        </chakra.p>
      </Stack>
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  const { data, isLoading, isError } = useQuery("features", fetchFeatures);

  if (isError) {
    return <p>Error loading features</p>;
  }

  if (isLoading) {
    return <p>Loading features...</p>;
  }
  return (
    <Flex
      textAlign={"center"}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}></Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"4"} mx={"auto"}>
        {data?.map((feature, index) => (
          <TestmonialCard {...feature} index={index} key={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
