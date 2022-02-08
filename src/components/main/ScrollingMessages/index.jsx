import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import ScrollText from "./ScrollText";

export default function ScrollingMessages() {
  const bgColor = useColorModeValue("pink.300", "gray.600");
  const textColor = useColorModeValue("gray.800", "gray.100");
  return (
    <Box bg={bgColor} color={textColor} fontWeight={"bold"} py={1}>
      <marquee>
        <HStack spacing="100px">
          <ScrollText>Service to Youth is Service to Nation.</ScrollText>
          <ScrollText>
            Do a course and Secure an Internship or a Job.
          </ScrollText>
          <ScrollText>
            Support a student or a trainer and avail 80G benefit.
          </ScrollText>
          <ScrollText>
            SURE Trust -- <i>Grama Seva</i> of Sustainable Nature.
          </ScrollText>
        </HStack>
      </marquee>
    </Box>
  );
}
