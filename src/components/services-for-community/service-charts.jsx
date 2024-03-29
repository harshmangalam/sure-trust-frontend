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

export default function ServiceCharts({ payload, label, text }) {
  const options = {
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
        text: text,
      },
    },
  };
  const labels = payload.map((p) => p.course_name);
  const data = {
    labels,
    datasets: [
      {
        label,
        data: payload.map((p) => p.count),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
        fill: false,
        borderWidth: 2, // Border width
        barPercentage: 0.2, // Adjust this value to customize bar width
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
