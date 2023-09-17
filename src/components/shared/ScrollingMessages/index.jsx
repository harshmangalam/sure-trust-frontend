import { Center, Skeleton, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { fetchNotices } from "../../../services";
import ScrollText from "./ScrollText";
import { useMemo } from "react";
export default function ScrollingMessages() {
  const { isLoading, isError, data } = useQuery("notices", fetchNotices);
  const handleDragStart = (e) => e.preventDefault();
  const notices = useMemo(() => {
    return data?.map((notice, i) => (
      <ScrollText
        onDragStart={handleDragStart}
        notice={notice}
        key={notice.id}
      />
    ));
  }, [data]);

  if (isError) return <Text>Error while loading notices...</Text>;
  if (isLoading) return <Skeleton height="40px" />;

  return (
    <Center bg={"blue.500"} color={"white"} minH={"40px"}>
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        autoPlayStrategy="default"
        mouseTracking
        items={notices}
        disableDotsControls
        disableButtonsControls
        controlsStrategy="default"
        infinite
      />
    </Center>
  );
}
