import { Box, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";
import { notices } from "../../../data/notice";
import ScrollText from "./ScrollText";
export default function ScrollingMessages() {
  const bgColor = useColorModeValue("pink.300", "gray.600");
  const textColor = useColorModeValue("gray.800", "gray.100");



  return (
    <Box bg={bgColor} color={textColor} py={2}>
      <Slider autoplay autoplaySpeed={3000} arrows={false}>
        {notices.map((text, i) => (
          <ScrollText text={text} key={i} />
        ))}
      </Slider>
    </Box>
  );
}
