import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  SimpleGrid,
  AspectRatio,
  List,
  ListItem,
} from "@chakra-ui/react";
import AboutUserCard from "../../components/main/AboutUserCard";
import { useQuery } from "react-query";
import { fetchBoardMembers } from "../../services/board";
import Loader from "../../components/shared/Loader";
import { narrationByFounder } from "../../data/about";
import satyaSaiBaba from "../../images/satya_sai_baba.jpg";
import UsersCarousel from "../../components/shared/users-carousel";
function About() {
  const { data, isLoading, isError } = useQuery("board", fetchBoardMembers);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error</p>;
  }
  return (
    <Box py={12}>
      <Box as="section" mt={12}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Birth Of The SURE Trust
          </Heading>
          <AspectRatio mx="auto" maxW="full" ratio={4 / 2}>
            <Image
              mt={12}
              rounded="md"
              src={satyaSaiBaba}
              width="100%"
              alt="Founder"
            />
          </AspectRatio>
        </Container>
      </Box>

      <Box mt={24}>
        <Container maxW="container.xl">
          <Box>
            <Heading textAlign={"center"} fontSize={"3xl"}>
              {narrationByFounder.title}
            </Heading>

            <List spacing={3} mt={6}>
              {narrationByFounder.contents.map((content, i) => (
                <ListItem key={i}>
                  <Text
                    textAlign={"justify"}
                    fontSize={"2xl"}
                    fontFamily={"Oxygen"}
                  >
                    {content}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>

      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Board Of Trustees
          </Heading>
          <UsersCarousel
            users={data.data?.board_of_trustees?.map((user) => ({
              id: user.id,
              name: user.name,
              image: user.image,
              subtitle: null,
              bio: user.about,
              linkedin: user.linked_in_url,
            }))}
          />
        </Container>
      </Box>

      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Governing Council
          </Heading>

          <Box mt={12}>
            <Heading textAlign="center" fontSize="3xl">
              Senior Executive Members
            </Heading>

            <UsersCarousel
              users={data.data["Governing Council"]["senior_executives"]?.map(
                (user) => ({
                  id: user.id,
                  name: user.name,
                  image: user.image,
                  subtitle: null,
                  bio: user.about,
                  linkedin: user.linked_in_url,
                })
              )}
            />
          </Box>

          <Box as="section" mt={12}>
            <Heading textAlign="center" fontSize="3xl">
              Executive Members
            </Heading>
            <UsersCarousel
              users={data.data["Governing Council"]["executives_members"]?.map(
                (user) => ({
                  id: user.id,
                  name: user.name,
                  image: user.image,
                  subtitle: null,
                  bio: user.about,
                  linkedin: user.linked_in_url,
                })
              )}
            />
          </Box>
        </Container>
      </Box>

      <Box as="section" mt={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Board Of Advisors
          </Heading>
          <UsersCarousel
            users={data.data?.board_of_advisers?.map((user) => ({
              id: user.id,
              name: user.name,
              image: user.image,
              subtitle: null,
              bio: user.about,
              linkedin: user.linked_in_url,
            }))}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default About;
