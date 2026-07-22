import { useState } from "react";
import API from "../api/api";

function Prediction() {
  const [formData, setFormData] = useState({
    temperature: "",
    wind_speed: "",
    humidity: "",
    rainfall: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictEnergy = async (e) => {
    e.preventDefault();

    try {
      const res = await API.get("/prediction/prediction/", {
        params: formData,
      });

      setResult(res.data.prediction);
    } catch (error) {
      console.log(error);
      alert("Prediction Failed");
    }
  };

  return (
    <div className="container mt-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-success fw-bold">
          🌞 Renewable Energy Prediction 🌬️
        </h1>

        <p className="lead">
          Enter the climate conditions to predict the most suitable renewable energy source.
        </p>
      </div>

      <div className="row">

        {/* Left Side */}
        <div className="col-md-7">

          <div className="card shadow-lg">

            <div className="card-header bg-success text-white">
              <h4>Climate Parameters</h4>
            </div>

            <div className="card-body">

              <form onSubmit={predictEnergy}>

                <div className="mb-3">
                  <label className="form-label">
                    🌡 Temperature (°C)
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="temperature"
                    value={formData.temperature}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    💨 Wind Speed (km/h)
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="wind_speed"
                    value={formData.wind_speed}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    💧 Humidity (%)
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="humidity"
                    value={formData.humidity}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    🌧 Rainfall (mm)
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="rainfall"
                    value={formData.rainfall}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button className="btn btn-success btn-lg">
                    Predict Energy Source
                  </button>
                </div>

              </form>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="col-md-5">

          <div className="card shadow-lg">

            <div className="card-header bg-primary text-white">
              <h4>Prediction Result</h4>
            </div>

            <div className="card-body text-center">

              {result ? (
                <>
                  <h1 style={{ fontSize: "60px" }}>
                    {result === "Solar" ? "🌞" : "🌬️"}
                  </h1>

                  <h2 className="mt-3">

                    {result === "Solar" ? (
                      <span className="badge bg-warning text-dark">
                        Solar Energy
                      </span>
                    ) : (
                      <span className="badge bg-primary">
                        Wind Energy
                      </span>
                    )}

                  </h2>

                  <p className="mt-4">

                    {result === "Solar"
                      ? "High solar potential detected based on the entered climate conditions."
                      : "High wind energy potential detected based on the entered climate conditions."}

                  </p>
                </>
              ) : (
                <>
                  <h1>🤖</h1>

                  <p className="text-muted">
                    Enter climate values and click
                    <strong> Predict Energy Source </strong>
                    to view the AI recommendation.
                  </p>
                </>
              )}

            </div>

          </div>

          <div className="card mt-4 shadow">

            <div className="card-header bg-dark text-white">
              AI Model Information
            </div>

            <div className="card-body">

              <ul className="list-group">

                <li className="list-group-item">
                  🤖 Model : Random Forest Classifier
                </li>

                <li className="list-group-item">
                  📊 Machine Learning : Supervised Learning
                </li>

                <li className="list-group-item">
                  ⚡ Prediction : Solar / Wind
                </li>

                <li className="list-group-item">
                  📈 Accuracy : 97%
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Prediction;