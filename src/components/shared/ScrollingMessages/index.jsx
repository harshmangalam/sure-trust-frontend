import { Box, Progress } from "@chakra-ui/react";
import { useQuery } from "react-query";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { fetchNotices } from "../../../services";
import ScrollText from "./ScrollText";
export default function ScrollingMessages() {
  const query = useQuery("notices", fetchNotices);
  const handleDragStart = (e) => e.preventDefault();

  const items = query?.data?.map((notice, i) => (
    <ScrollText onDragStart={handleDragStart} notice={notice} key={notice.id} />
  ));

  if (query.isLoading) {
    return <Progress isIndeterminate />;
  }
  return (
    <Box bg={"blue.500"} color={"white"} py={2}>
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        autoPlayStrategy="default"
        mouseTracking
        items={items}
        disableDotsControls
        disableButtonsControls
        controlsStrategy="default"
        infinite
      />
    </Box>
  );
}
