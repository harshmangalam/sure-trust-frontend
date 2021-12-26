import { SimpleGrid, GridItem, Skeleton, Container } from "@chakra-ui/react";
function CoursesSkelteton() {
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ base: 1, md: 2,lg:3 }} spacing={6}>
        {[...Array(6).keys()].map((i) => (
          <GridItem key={i}>
            <Skeleton h={52} rounded="md" />
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default CoursesSkelteton; 
