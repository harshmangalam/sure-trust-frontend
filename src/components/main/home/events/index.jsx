import { Box, Heading, List } from "@chakra-ui/react";
import Event from "./event";
import { useQuery } from "react-query";
import { fetchEvents } from "../../../../services";

export default function Events() {
  const { isLoading, isError, data } = useQuery(["events"], fetchEvents);
  if (isLoading) return <p>Loading Events...</p>;
  if (isError) return <p>Error...</p>;
  if (!data.data?.length) return null;
  return (
    <Box>
      <Heading fontSize={"3xl"}>Events</Heading>
      <List spacing={6} mt={8}>
        {data.data.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </List>
    </Box>
  );
}
