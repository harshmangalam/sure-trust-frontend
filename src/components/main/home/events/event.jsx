import {
  Badge,
  Divider,
  HStack,
  Image,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { format, getDate, parseISO } from "date-fns";
export default function Event({
  name,
  image,
  about,
  event_date,
  event_start_time,
  event_end_time,
  event_place,
  event_url,
}) {
  const dateObject = parseISO(event_date);
  return (
    <>
      <ListItem as={"a"} href={"/"} target="_blank" w="full" display={"block"}>
        <HStack px={4} justifyContent={"space-between"}>
          <HStack align={"start"} spacing={"12"}>
            <VStack>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {getDate(dateObject)}
              </Text>
              <Text fontSize={"sm"} fontWeight={"light"}>
                {format(dateObject, "MMM")}
              </Text>
            </VStack>
            <VStack align={"flex-start"}>
              <Text fontSize={"sm"} fontWeight={"light"}>
                {format(dateObject, "MMMM dd, yyyy")}, {event_start_time} -{" "}
                {event_end_time}
              </Text>
              <Text fontSize={"xl"} fontWeight={"medium"}>
                {name}
              </Text>

              <Text fontWeight={"light"} maxW={"2xl"} fontSize={"sm"}>
                {about}
              </Text>
              <Badge variant="subtle" colorScheme="purple">
                {event_place}
              </Badge>
            </VStack>
          </HStack>
          <Image src={image} w="52" h="52" alt={name} rounded={"xl"} />
        </HStack>
      </ListItem>
      <Divider />
    </>
  );
}
