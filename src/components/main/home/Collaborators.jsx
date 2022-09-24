import {
  Box,
  GridItem,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchCollaborators } from "../../../services";

export default function Collaborators() {
  const collaboratorHoverBg = useColorModeValue("blue.400", "blue.700");
  const query = useQuery("collabortors", () => fetchCollaborators(null));

  function getLink(link) {
    return link.startsWith("https") || link.startsWith("http")
      ? link
      : `https://${link}`;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={6}>
      {query.data?.map((collaborator, i) => (
        <GridItem key={collaborator.id}>
          <a
            rel="noreferrer"
            href={getLink(collaborator.link)}
            target={"_blank"}
          >
            <Box
              rounded="xl"
              p={6}
              _hover={{
                bg: collaboratorHoverBg,
                textColor: "white",
              }}
              borderWidth="1px"
              textAlign={"center"}
              cursor="pointer"
            >
              <Text fontSize="xl" textAlign="center" fontWeight={"bold"}>
                {collaborator.name}
              </Text>
            </Box>
          </a>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
