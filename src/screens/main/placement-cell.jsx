import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import UserCard from "../../components/shared/user-card";
import { useQuery } from "react-query";
import { fetchPlacementCellMembers } from "../../services";

export default function PlacementCell() {
  const { data, isLoading, isError } = useQuery(
    ["placement-cell-members"],
    fetchPlacementCellMembers
  );

  console.log("Hi");

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
          SURE Trust{" "}
          <Text as={"span"} color={"blue.400"}>
            Placement cell
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
          Volunteering Wizards
        </Heading>
        <Box mt={12}>
          <SimpleGrid spacing={6} columns={[1, 2, 3]}>
            {data?.data?.map(
              (
                { bio, designation, name, id, linkedin_url, profile_pic, role },
                i
              ) => (
                <GridItem>
                  <UserCard
                    key={id}
                    name={name}
                    bio={bio}
                    image={profile_pic}
                    subtitle={role}
                    linkedin={linkedin_url}
                  />
                </GridItem>
              )
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
