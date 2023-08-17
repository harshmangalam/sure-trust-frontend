import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

export default function StatItem(props) {
  const { title, stat, color } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"6"}
      shadow={"sm"}
      borderWidth={"1px"}
      borderColor={useColorModeValue("gray.300", "gray.600")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={"lg"} fontWeight={"medium"}>
            {title}
          </StatLabel>
          <StatNumber textColor={color} fontSize={"2xl"} fontWeight={"bold"}>
            {stat}
          </StatNumber>
        </Box>
      </Flex>
    </Stat>
  );
}
