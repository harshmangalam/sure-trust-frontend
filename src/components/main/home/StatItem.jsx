import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import CountUp from "react-countup";

export default function StatItem(props) {
  const {
    title,
    stat,
    bgGradient = "linear(to-r, purple.400, blue.400)",
  } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"6"}
      shadow={"sm"}
      borderWidth={"1px"}
      borderColor={useColorModeValue("gray.300", "gray.600")}
      rounded={"lg"}
      bgGradient={bgGradient}
      color={"white"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={"xl"} fontWeight={"medium"}>
            {title}
          </StatLabel>
          <StatNumber fontSize={"3xl"} fontWeight={"bold"}>
            <CountUp duration={5} end={stat} />
            {stat > 0 && "+"}
          </StatNumber>
        </Box>
      </Flex>
    </Stat>
  );
}
