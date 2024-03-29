import {
  Box,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CourseCard({ course_name, count, href }) {
  return (
    <Box
      as={Link}
      to={href}
      borderWidth={"1px"}
      rounded="lg"
      p={"4"}
      _hover={{
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <HStack justify="space-between" align={"start"}>
        <Stat>
          <StatLabel>{course_name}</StatLabel>
          <StatNumber>{count}</StatNumber>
        </Stat>
      </HStack>
    </Box>
  );
}
