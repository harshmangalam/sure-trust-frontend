import { Box, HStack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import PlantationUsers from "./PlantationUsers";

export default function CoursePlantation({ _id, plantsCount, users }) {
  return (
    <Box borderWidth={"1px"} rounded="lg" p={"4"}>
      <HStack justify="space-between" align={"start"}>
        <Stat>
          <StatLabel>{_id}</StatLabel>
          <StatNumber>{plantsCount}</StatNumber>
        </Stat>
        <PlantationUsers users={users} />
      </HStack>
    </Box>
  );
}
