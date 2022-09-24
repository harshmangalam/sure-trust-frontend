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
    "linear(to-l, pink.400, blue.300)",
    "linear(to-l, pink.500, blue.400)"
  );
  const collaboratorHoverBg = useColorModeValue(
    "linear(to-l, blue.500, pink.400)",
    "linear(to-l, blue.400, pink.500)"
  );
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
              p={4}
              bgGradient={collaboratorBg}
              transform="scale(1.0)"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                bgGradient: collaboratorHoverBg,
              }}
              boxShadow={"2xl"}
              textAlign={"center"}
              cursor="pointer"
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
