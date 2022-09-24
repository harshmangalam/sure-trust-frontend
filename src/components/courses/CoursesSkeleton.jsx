import { SimpleGrid, GridItem, Skeleton, Container } from "@chakra-ui/react";
function CoursesSkelteton({ mt = "0", spacing = "6" }) {
  return (
    <SimpleGrid mt={mt} columns={{ base: 1, md: 2, lg: 3 }} spacing={spacing}>
      {[...Array(6).keys()].map((i) => (
        <GridItem key={i}>
          <Skeleton h={52} rounded="md" />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}

export default CoursesSkelteton;
