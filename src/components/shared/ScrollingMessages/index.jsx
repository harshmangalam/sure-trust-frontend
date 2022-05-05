import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { fetchNotices } from "../../../services";
import ScrollText from "./ScrollText";
export default function ScrollingMessages() {
  const query = useQuery("notices", fetchNotices);

  return (
    <Box bg={"blue.500"} color={"white"} pt={2}>
      <Slider autoplay autoplaySpeed={4000} arrows={false}>
        {query.data?.map((notice, i) => (
          <ScrollText notice={notice} key={notice.id} />
        ))}
      </Slider>
    </Box>
  );
}
