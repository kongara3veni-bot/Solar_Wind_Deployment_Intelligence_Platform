import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <div className="container mt-5">

      {/* Dashboard Header */}
      <div className="text-center mb-5">

        <h1 className="fw-bold text-success">
          📊 Dashboard
        </h1>

        <p className="lead text-muted">
          Welcome to the Solar Wind Deployment Intelligence Platform
        </p>

      </div>

      {/* Statistics Cards */}
      <DashboardCards />

      {/* Quick Actions */}
      <div className="row mt-5">

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">

            <div className="card-body text-center">

              <h1>📂</h1>

              <h4>Upload Dataset</h4>

              <p>
                Upload climate datasets for AI analysis.
              </p>

              <a href="/upload" className="btn btn-success">
                Upload Now
              </a>

            </div>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">

            <div className="card-body text-center">

              <h1>🤖</h1>

              <h4>Run Prediction</h4>

              <p>
                Predict whether Solar or Wind energy is suitable.
              </p>

              <a href="/prediction" className="btn btn-primary">
                Predict
              </a>

            </div>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">

            <div className="card-body text-center">

              <h1>📜</h1>

              <h4>Prediction History</h4>

              <p>
                View all previously generated AI predictions.
              </p>

              <a href="/history" className="btn btn-warning">
                View History
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* AI Information */}
      <div className="card shadow mt-5">

        <div className="card-header bg-success text-white">
          <h4>🤖 AI Model Information</h4>
        </div>

        <div className="card-body">

          <div className="row text-center">

            <div className="col-md-3">
              <h2>🌞</h2>
              <h5>Solar Energy</h5>
              <p>Recommended for high-temperature regions.</p>
            </div>

            <div className="col-md-3">
              <h2>🌬️</h2>
              <h5>Wind Energy</h5>
              <p>Recommended for high wind-speed regions.</p>
            </div>

            <div className="col-md-3">
              <h2>🧠</h2>
              <h5>Machine Learning</h5>
              <p>Random Forest model for prediction.</p>
            </div>

            <div className="col-md-3">
              <h2>📈</h2>
              <h5>Analytics</h5>
              <p>Visualize prediction statistics and trends.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;