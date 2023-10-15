import { Box, Skeleton, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { fetchNotices } from "../../../services";
import ScrollText from "./ScrollText";
import { useMemo } from "react";
export default function ScrollingMessages() {
  const { isLoading, isError, data } = useQuery("notices", fetchNotices);

  if (isError) return <Text>Error while loading notices...</Text>;
  if (isLoading) return <Skeleton height="40px" />;

  return (
    <Box bg={"blue.500"} color={"white"} py={2}>
      <Slider autoplay autoplaySpeed={4000} arrows={false}>
        {data?.map((notice, i) => (
          <ScrollText notice={notice} key={notice.id} />
        ))}
      </Slider>
    </Box>
  );
}
