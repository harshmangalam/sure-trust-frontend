import {
  Box,
  HStack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PlantationUsers from "./PlantationUsers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function CoursePlantation() {
  const labels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [12, 23, 12, 23, 43, 22, 33, 2, 33, 55, 67, 56],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <Box borderWidth={"1px"} rounded="lg" p={"4"}>
      <HStack justify="space-between" align={"start"}>
        <Stat>
          <StatLabel>Fullstack development</StatLabel>
          <StatNumber>10</StatNumber>
        </Stat>
        <PlantationUsers />
      </HStack>
      <Box my={"2"}>
        <Line options={options} data={data} />
      </Box>
    </Box>
  );
}
