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

export default function PlacementCell() {
  return (
    <Container maxW={"5xl"}>
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
          <Text as={"span"} color={"orange.400"}>
            Placement cell
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Action 1
          </Button>
          <Button rounded={"full"} px={6}>
            Action 2
          </Button>
        </Stack>
      </Stack>

      <Box mt={"4"}>
        <Heading fontSize={["4xl", "5xl"]} textAlign={"center"}>
          Flag Bearers
        </Heading>
        <Box mt={12}>
          <SimpleGrid spacing={6} columns={[1, 2, 3]}>
            {[...new Array(9)].map((_, i) => (
              <GridItem>
                <UserCard
                  key={i}
                  name="User 1"
                  bio={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat temporibus eos magnam error quibusdam consequatur sequi facere doloremque, dolor esse debitis distinctio rem laboriosam nisi explicabo! Molestiae, cum. Vitae!"
                  }
                  image={
                    "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  subtitle={"Engineering Manager"}
                  linkedin={"https://"}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
