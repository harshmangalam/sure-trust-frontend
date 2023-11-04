import { Container, Heading, Stack, Text, Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchPlacementCellMembers } from "../../services";
import UsersCarousel from "../../components/shared/users-carousel";

export default function PlacementCell() {
  const { data } = useQuery(
    ["placement-cell-members"],
    fetchPlacementCellMembers
  );

  return (
    <Container maxW={"container.xl"} w="full">
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          SURE Trust <br />
          <Text as={"span"} color={"blue.400"}>
            Placement Assistance Cell
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          A placement cell connects students with job opportunities and helps
          them secure employment by facilitating recruitment activities and
          providing career guidance.
        </Text>
      </Stack>

      <Box my={"4"}>
        <Heading fontSize={["3xl", "4xl"]} textAlign={"center"}>
          Volunteering Team
        </Heading>
        <Box mt={12}>
          <UsersCarousel
            users={data?.data?.map(
              ({
                bio,
                designation,
                name,
                id,
                linked_url,
                profile_pic,
                role,
              }) => ({
                id,
                name,
                image: profile_pic,
                subtitle: designation,
                bio,
                linkedin: linked_url,
              })
            )}
          />
        </Box>
      </Box>
    </Container>
  );
}
