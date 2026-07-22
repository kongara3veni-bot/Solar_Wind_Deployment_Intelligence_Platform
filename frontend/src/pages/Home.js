import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Solar Wind Deployment Intelligence Platform
          </h1>

          <p className="lead mt-3">
            An AI-powered platform that analyzes climate conditions and
            recommends the most suitable renewable energy source.
          </p>

          <Link to="/register" className="btn btn-warning btn-lg me-3 mt-3">
            Get Started
          </Link>

          <Link to="/login" className="btn btn-light btn-lg mt-3">
            Login
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">About the Project</h2>

        <p className="text-center">
          The Solar Wind Deployment Intelligence Platform is designed to
          help users identify whether Solar or Wind energy is more suitable
          for a location based on climate parameters like temperature,
          humidity, rainfall, and wind speed.
        </p>
      </div>

      {/* Features */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Key Features</h2>

        <div className="row">

          <div className="col-md-3">
            <div className="card shadow text-center p-4">
              <h4>👤</h4>
              <h5>User Authentication</h5>
              <p>Secure registration and login for users.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center p-4">
              <h4>📂</h4>
              <h5>Dataset Upload</h5>
              <p>Upload climate datasets in CSV format.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center p-4">
              <h4>🤖</h4>
              <h5>AI Prediction</h5>
              <p>Predict the best renewable energy source.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center p-4">
              <h4>📊</h4>
              <h5>Prediction History</h5>
              <p>View all previous prediction records.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Technology Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Technology Stack</h2>

        <div className="row">

          <div className="col-md-2">
            <div className="card text-center p-3 shadow">
              React.js
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-3 shadow">
              FastAPI
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-3 shadow">
              SQLite
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-3 shadow">
              Scikit-learn
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-3 shadow">
              Random Forest
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-3 shadow">
              Bootstrap
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center mt-5 p-4">
        <h5>Solar Wind Deployment Intelligence Platform</h5>

        <p>
          AI-Based Renewable Energy Recommendation System
        </p>

        <small>
          © 2026 All Rights Reserved
        </small>
      </footer>

    </div>
  );
}

export default Home;