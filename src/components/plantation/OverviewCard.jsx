import {
  Box,
  HStack,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

export default function OverviewCard({ label, count, icon }) {
  return (
    <Box
      borderWidth={"1px"}
      rounded="lg"
      p={"4"}
      bg={useColorModeValue("white", "green.800")}
    >
      <HStack justify={"space-between"} align="start">
        <Stat>
          <StatLabel>{label}</StatLabel>
          <StatNumber>{count}</StatNumber>
        </Stat>
        <Icon as={icon} fontSize="3xl" />
      </HStack>
    </Box>
  );
}
