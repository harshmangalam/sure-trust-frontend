import { Box, GridItem, SimpleGrid, Button, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CommunityServiceHero from "../../components/services-for-community/hero";
import { GiPlantWatering } from "react-icons/gi";
import { BiDonateBlood } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
export default function ServicesForCommunity() {
  const services = [
    {
      name: "Plantation",
      url: "/services-for-community/plantation",
      icon: <GiPlantWatering size={24} />,
    },
    {
      name: "Blood Donations",
      url: "/services-for-community/blood-donation",
      icon: <BiDonateBlood size={24} />,
    },
    {
      name: "Service To Senior Citizens",
      url: "/services-for-community/senior-citizen",
      icon: <HiOutlineUsers size={24} />,
    },
  ];
  return (
    <Box>
      <CommunityServiceHero />
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={4} mt={16}>
          {services.map(({ name, url, icon }) => (
            <GridItem key={name}>
              <Button
                as={Link}
                to={url}
                variant="outline"
                isFullWidth
                size="lg"
                h={16}
                colorScheme="purple"
                rounded={"full"}
                leftIcon={icon}
              >
                {name}
              </Button>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
