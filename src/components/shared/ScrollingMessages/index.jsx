import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { notices } from "../../../data/notice";
import ScrollText from "./ScrollText";
export default function ScrollingMessages() {
  return (
    <Box bg={"purple.500"} color={"white"} py={2}>
      <Slider autoplay autoplaySpeed={4000} arrows={false}>
        {notices.map((text, i) => (
          <ScrollText text={text} key={i} />
        ))}
      </Slider>
    </Box>
  );
}
