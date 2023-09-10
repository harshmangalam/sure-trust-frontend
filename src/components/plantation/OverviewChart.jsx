import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sure Trust Plantation",
    },
  },
};

export default function OverviewChart({ plants }) {
  const labels = plants.map((p) => p._id);
  const data = {
    labels,
    datasets: [
      {
        label: "Plants",
        data: plants.map((p) => p.plantsCount),
        backgroundColor: "#38A169",
      },
      {
        label: "Planters",
        data: plants.map((p) => p.users.length),
        backgroundColor: "#68D391",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
