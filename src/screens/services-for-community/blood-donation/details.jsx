import {
  Box,
  Button,
  Container,
  GridItem,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import ServiceCard from "../../../components/services-for-community/service-card";
import { useQuery } from "react-query";
import { getBloodDonation } from "../../../services";
import { useSearchParams } from "react-router-dom";

export default function BloodDonationDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const courseName = searchParams.get("courseName");
  console.log(courseName);
  const page = searchParams.get("page") ?? 1;
  const { data, isLoading, isError } = useQuery(
    ["blood-donations", courseName, page],
    () => getBloodDonation(page, courseName)
  );

  const handlePagination = (url) => {
    const u = new URL(url);
    const pageParams = u.searchParams.get("page") ?? +page - 1;
    setSearchParams({ page: pageParams });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <Container maxW={"container.xl"}>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={4} mt={6}>
        {data.data?.results?.map((result) => (
          <GridItem h={"full"}>
            <ServiceCard
              batch={result.batch_name ?? ""}
              course={result.course_name ?? ""}
              name={result.donar_name}
              role={result.user_role?.split("_").join(" ")}
              image={result.image_url}
            />
          </GridItem>
        ))}
      </SimpleGrid>
      <Box mt={6}>
        <HStack>
          <Button
            disabled={!data.data.previous}
            onClick={() => handlePagination(data.data.previous)}
          >
            Prev
          </Button>
          <Button
            disabled={!data.data.next}
            onClick={() => handlePagination(data.data.next)}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}
