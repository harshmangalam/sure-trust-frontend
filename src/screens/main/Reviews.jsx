import ReviewCard from "../../components/main/ReviewCard";
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  GridItem,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useState } from "react";
import { fetchReviews } from "../../services/reviews";
import Loader from "../../components/shared/Loader";

export default function Reviews() {
  const [page, setPage] = useState(1);
  const query = useQuery(["reviews", page], () => fetchReviews(page));

  if (query.isLoading) {
    return <Loader />;
  }

  if (query.isError) {
    return <p>Error.</p>;
  }

  const links = query.data.data?.result?.links;
  const reviews = query.data.data?.result?.data;

  console.log(links);
  return (
    <Container maxW={"container.xl"} py={12}>
      <Heading textAlign="center" fontSize={["4xl", "5xl"]}>
        Reviews
      </Heading>
      <Box mt={24}>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={6}>
          {reviews.map((review, i) => (
            <GridItem key={review.id} h={"100%"}>
              <ReviewCard {...review} />
            </GridItem>
          ))}
        </SimpleGrid>

        <HStack mt={12} justify={"center"}>
          <Button disabled={!links.prev} onClick={() => setPage((p) => p - 1)}>
            Previous
          </Button>
          <Button disabled={!links.next} onClick={() => setPage((p) => p + 1)}>
            Next
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}
