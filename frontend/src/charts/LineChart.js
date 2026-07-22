import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {

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
        label: "Accuracy",

        data: [80, 85, 88, 92, 95, 97],

        borderColor: "#DC3545",

        fill: false,

        tension: 0.3,
      },
    ],
  };

  return (
    <div className="card shadow">

      <div className="card-header bg-danger text-white">
        <h5>Model Accuracy</h5>
      </div>

      <div className="card-body">
        <Line data={data} />
      </div>

    </div>
  );
}

export default LineChart;