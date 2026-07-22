import { useEffect, useState } from "react";
import API from "../api/api";

function DashboardCards() {

  const [stats, setStats] = useState({
    users: 0,
    datasets: 0,
    predictions: 0,
    solar: 0,
    wind: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/dashboard/");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">

      <div className="col-md-4 mb-4">
        <div className="card shadow text-center p-4 bg-primary text-white">
          <h2>👤</h2>
          <h4>Users</h4>
          <h1>{stats.users}</h1>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow text-center p-4 bg-success text-white">
          <h2>📂</h2>
          <h4>Datasets</h4>
          <h1>{stats.datasets}</h1>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow text-center p-4 bg-warning">
          <h2>🤖</h2>
          <h4>Predictions</h4>
          <h1>{stats.predictions}</h1>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow text-center p-4 bg-info text-white">
          <h2>🌞</h2>
          <h4>Solar Predictions</h4>
          <h1>{stats.solar}</h1>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow text-center p-4 bg-dark text-white">
          <h2>🌬️</h2>
          <h4>Wind Predictions</h4>
          <h1>{stats.wind}</h1>
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;