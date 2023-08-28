import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import ServiceStat from "../../../components/services-for-community/service-stat";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useQuery } from "react-query";
import { getSeniorCitizen } from "../../../services/commuinity-service";
import Loader from "../../../components/shared/Loader";
import ServiceCard from "../../../components/services-for-community/service-card";
import { useSearchParams } from "react-router-dom";
import { fetchPlantationAllowedUsers } from "../../../services";
import { useMemo } from "react";
import { useAuthState } from "../../../contexts/auth";
import SeniorCitizenForm from "../../../components/services-for-community/senior-citizen-form";
export default function SeniorCitizen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const { data, isLoading, isError, refetch } = useQuery(
    ["senior_citizen", page],
    () => getSeniorCitizen(page)
  );
  const allowedQuery = useQuery("allowed-users", fetchPlantationAllowedUsers);
  const { isAuthenticated, currentUser } = useAuthState();

  const isAuthorized = useMemo(
    () =>
      allowedQuery?.data?.data.includes(
        String(currentUser?.id || currentUser?.user?.id)
      ),
    [currentUser, allowedQuery]
  );

  const handlePagination = (url) => {
    const u = new URL(url);
    const pageParams = u.searchParams.get("page") ?? +page - 1;
    setSearchParams({ page: pageParams });
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Flex align={"center"} justify={"space-between"} mb={8}>
          <Heading fontSize={"3xl"}>Service to Senior Citizens</Heading>
          {isAuthenticated && isAuthorized && (
            <Flex justifyContent={"flex-end"}>
              <SeniorCitizenForm refetch={refetch} />
            </Flex>
          )}
        </Flex>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <GridItem>
            <ServiceStat icon={AiOutlineFieldTime} count={1} label={"Days"} />
          </GridItem>
          <GridItem>
            <ServiceStat
              count={data?.data?.count}
              label={"Volunteers"}
              icon={FaUsers}
            />
          </GridItem>
        </SimpleGrid>

        <SimpleGrid columns={[1, 1, 2, 3]} gap={4} mt={6}>
          {data.data?.results?.map((result) => (
            <GridItem h={"full"}>
              <ServiceCard
                batch={result.batch_name ?? ""}
                course={result.course_name ?? ""}
                name={result.user_name}
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
    </Box>
  );
}
