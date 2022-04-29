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
  const collaboratorBg = useColorModeValue(
    "linear(to-l, purple.400, blue.300)",
    "linear(to-l, purple.900, blue.300)"
  );
  const collaboratorHoverBg = useColorModeValue(
    "linear(to-l, blue.500, purple.400)",
    "linear(to-l, blue.800, purple.400)"
  );
  const query = useQuery("collabortors", () => fetchCollaborators(null));

  function getLink(link) {
    return link.startsWith("https") || link.startsWith("http")
      ? link
      : `https://${link}`;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
      {query.data?.map((collaborator, i) => (
        <GridItem key={collaborator.id}>
          <a rel="noreferrer" href={getLink(collaborator.link)} target={"_blank"}>
            <Box
              rounded="xl"
              p={4}
              bgGradient={collaboratorBg}
              boxShadow={"2xl"}
              textAlign={"center"}
              cursor="pointer"
              _hover={{
                bgGradient: collaboratorHoverBg,
              }}
            >
              <Text
                fontSize="xl"
                textAlign="center"
                color="white"
                fontWeight={"bold"}
              >
                {collaborator.name}
              </Text>
            </Box>
          </a>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
