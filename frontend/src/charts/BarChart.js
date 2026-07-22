import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

function BarChart() {

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Predictions",

        data: [15, 22, 18, 30, 26, 40],

        backgroundColor: "#198754",
      },
    ],
  };

  return (
    <div className="card shadow">

      <div className="card-header bg-primary text-white">
        <h5>Monthly Predictions</h5>
      </div>

      <div className="card-body">
        <Bar data={data} />
      </div>

    </div>
  );
}

export default BarChart;