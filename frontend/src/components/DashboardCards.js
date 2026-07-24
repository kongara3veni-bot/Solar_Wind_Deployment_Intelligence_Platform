import { useEffect, useState } from "react";
import { getDashboard } from "../api/api";

function DashboardCards() {
  const [stats, setStats] = useState({
    users: 0,
    datasets: 0,
    predictions: 0,
    solar: 0,
    wind: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await getDashboard();
      setStats(res.data);
    } catch (error) {
      console.error("Dashboard API Error:", error);
      alert("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h4>Loading Dashboard...</h4>
      </div>
    );
  }

  return (
    <div className="row">

      <div className="col-md-4 mb-4">
        <div className="card shadow text-center p-4 bg-primary text-white">
          <h2>👤</h2>
          <h5>Total Users</h5>
          <h1>{stats.users}</h1>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow text-center p-4 bg-success text-white">
          <h2>📂</h2>
          <h5>Total Datasets</h5>
          <h1>{stats.datasets}</h1>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow text-center p-4 bg-warning text-dark">
          <h2>🤖</h2>
          <h5>Total Predictions</h5>
          <h1>{stats.predictions}</h1>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow text-center p-4 bg-info text-white">
          <h2>🌞</h2>
          <h5>Solar Predictions</h5>
          <h1>{stats.solar}</h1>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow text-center p-4 bg-dark text-white">
          <h2>🌬️</h2>
          <h5>Wind Predictions</h5>
          <h1>{stats.wind}</h1>
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;