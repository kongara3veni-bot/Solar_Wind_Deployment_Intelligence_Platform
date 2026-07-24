import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { getAnalytics } from "../api/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function AnalyticsCharts() {
  const [analytics, setAnalytics] = useState({
    total_predictions: 0,
    solar_predictions: 0,
    wind_predictions: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await getAnalytics();
      setAnalytics(res.data);
    } catch (error) {
      console.error("Analytics API Error:", error);
      alert("Unable to load analytics data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h4>Loading Analytics...</h4>
      </div>
    );
  }

  const barData = {
    labels: ["Solar", "Wind"],
    datasets: [
      {
        label: "Predictions",
        data: [
          analytics.solar_predictions,
          analytics.wind_predictions,
        ],
        backgroundColor: [
          "#28a745",
          "#007bff",
        ],
      },
    ],
  };

  const pieData = {
    labels: ["Solar", "Wind"],
    datasets: [
      {
        data: [
          analytics.solar_predictions,
          analytics.wind_predictions,
        ],
        backgroundColor: [
          "#ffc107",
          "#17a2b8",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card shadow text-center bg-primary text-white">
            <div className="card-body">
              <h5>Total Predictions</h5>
              <h2>{analytics.total_predictions}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center bg-success text-white">
            <div className="card-body">
              <h5>Solar Predictions</h5>
              <h2>{analytics.solar_predictions}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center bg-info text-white">
            <div className="card-body">
              <h5>Wind Predictions</h5>
              <h2>{analytics.wind_predictions}</h2>
            </div>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-md-6 mb-4">

          <div className="card shadow">

            <div className="card-header bg-success text-white">
              <h5>Solar vs Wind Predictions</h5>
            </div>

            <div
              className="card-body"
              style={{ height: "350px" }}
            >
              <Bar data={barData} options={options} />
            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card shadow">

            <div className="card-header bg-warning">
              <h5>Prediction Distribution</h5>
            </div>

            <div
              className="card-body"
              style={{ height: "350px" }}
            >
              <Pie data={pieData} options={options} />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsCharts;