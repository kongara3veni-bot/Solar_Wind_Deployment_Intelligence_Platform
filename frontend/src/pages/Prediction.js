import { useState } from "react";
import { predictEnergy } from "../api/api";

function Prediction() {
  const [formData, setFormData] = useState({
    temperature: "",
    wind_speed: "",
    humidity: "",
    rainfall: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePrediction = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await predictEnergy(formData);
      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="text-success fw-bold">
          🌞 Renewable Energy Prediction 🌬️
        </h1>

        <p className="lead">
          Enter climate conditions to predict the best renewable energy source.
        </p>
      </div>

      <div className="row">

        {/* Left Side */}

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-header bg-success text-white">
              <h4>Climate Parameters</h4>
            </div>

            <div className="card-body">

              <form onSubmit={handlePrediction}>

                <div className="mb-3">
                  <label>Temperature (°C)</label>

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
                  <label>Wind Speed (km/h)</label>

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
                  <label>Humidity (%)</label>

                  <input
                    type="number"
                    className="form-control"
                    name="humidity"
                    value={formData.humidity}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label>Rainfall (mm)</label>

                  <input
                    type="number"
                    className="form-control"
                    name="rainfall"
                    value={formData.rainfall}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  className="btn btn-success w-100"
                  disabled={loading}
                >
                  {loading ? "Predicting..." : "Predict Energy Source"}
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h4>Prediction Result</h4>
            </div>

            <div className="card-body">

              {result ? (

                <>

                  <h2 className="text-center">

                    {result.prediction === "Solar" ? "🌞 Solar Energy" : "🌬️ Wind Energy"}

                  </h2>

                  <hr />

                  <table className="table table-bordered">

                    <tbody>

                      <tr>
                        <th>Confidence</th>
                        <td>{result.confidence}%</td>
                      </tr>

                      <tr>
                        <th>Solar Score</th>
                        <td>{result.solar_score}</td>
                      </tr>

                      <tr>
                        <th>Wind Score</th>
                        <td>{result.wind_score}</td>
                      </tr>

                      <tr>
                        <th>CO₂ Saved</th>
                        <td>{result.co2_saved}</td>
                      </tr>

                      <tr>
                        <th>Annual Output</th>
                        <td>{result.annual_output}</td>
                      </tr>

                      <tr>
                        <th>Tilt Angle</th>
                        <td>{result.tilt_angle}</td>
                      </tr>

                      <tr>
                        <th>Panel Type</th>
                        <td>{result.panel_type}</td>
                      </tr>

                      <tr>
                        <th>Installation Cost</th>
                        <td>{result.installation_cost}</td>
                      </tr>

                      <tr>
                        <th>Payback Period</th>
                        <td>{result.payback_period}</td>
                      </tr>

                    </tbody>

                  </table>

                  <div className="alert alert-success">

                    <strong>Recommendation:</strong>

                    <br />

                    {result.recommendation}

                  </div>

                  <div className="card">

                    <div className="card-header">
                      Reasons
                    </div>

                    <div className="card-body">

                      <ul>

                        {result.reason.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}

                      </ul>

                    </div>

                  </div>

                </>

              ) : (

                <div className="text-center">

                  <h1>🤖</h1>

                  <p>
                    Enter climate values and click Predict.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Prediction;