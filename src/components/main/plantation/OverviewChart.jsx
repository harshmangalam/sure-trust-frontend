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
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        
        
      },
      {
        label: "Planters",
        data: plants.map((p) => p.users.length),
        borderColor: "rgb(100, 100, 200)",
        backgroundColor: "rgba(100, 100, 200, 0.5)",
      },
   
    ],
  };

  return <Bar options={options} data={data} />;
}
