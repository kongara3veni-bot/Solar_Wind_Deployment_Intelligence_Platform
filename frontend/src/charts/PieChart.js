import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart() {

  const data = {
    labels: ["Solar", "Wind"],

    datasets: [
      {
        label: "Prediction Distribution",

        data: [75, 25],

        backgroundColor: [
          "#FFC107",
          "#0D6EFD",
        ],

        borderColor: [
          "#FFFFFF",
          "#FFFFFF",
        ],

        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="card shadow">

      <div className="card-header bg-success text-white">
        <h5>Solar vs Wind Prediction</h5>
      </div>

      <div className="card-body">
        <Pie data={data} />
      </div>

    </div>
  );
}

export default PieChart;