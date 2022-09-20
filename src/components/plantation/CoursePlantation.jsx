import { Box, HStack, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import PlantationImages from "./PlantationImages";
import PlantationUsers from "./PlantationUsers";

export default function CoursePlantation({ _id, plantsCount, users,images }) {
  return (
    <Box borderWidth={"1px"} rounded="lg" p={"4"} bg={useColorModeValue("white","green.800")}>
      <HStack justify="space-between" align={"start"}>
        <Stat>
          <StatLabel>{_id}</StatLabel>
          <StatNumber>{plantsCount}</StatNumber>
        </Stat>
        <PlantationUsers users={users} />
        <PlantationImages images={images} />
      </HStack>
    </Box>
  );
}
