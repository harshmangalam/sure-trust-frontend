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
      text: "Blood Donation",
    },
  },
};

export default function ServiceCharts({ payload }) {
  const labels = payload.map((p) => p.course_name);
  const data = {
    labels,
    datasets: [
      {
        label: "Donars",
        data: payload.map((p) => p.count),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
        fill: false,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
