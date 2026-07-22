import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">
          📁 Project Management
        </h1>

        <p className="lead text-muted">
          Manage and monitor your Renewable Energy AI Projects.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0 text-center bg-primary text-white">
            <div className="card-body">
              <h1>📁</h1>
              <h4>Total Projects</h4>
              <h2>1</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0 text-center bg-success text-white">
            <div className="card-body">
              <h1>✅</h1>
              <h4>Completed</h4>
              <h2>2</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0 text-center bg-warning">
            <div className="card-body">
              <h1>🚀</h1>
              <h4>Current Phase</h4>
              <h2>2</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0 text-center bg-danger text-white">
            <div className="card-body">
              <h1>🤖</h1>
              <h4>AI Model</h4>
              <h5>Random Forest</h5>
            </div>
          </div>
        </div>

      </div>

      {/* Project Details */}
      <div className="card shadow-lg mt-4">

        <div className="card-header bg-success text-white">
          <h3>Current Project</h3>
        </div>

        <div className="card-body">

          <table className="table table-bordered">

            <tbody>

              <tr>
                <th width="250">Project Name</th>
                <td>Solar Wind Deployment Intelligence Platform</td>
              </tr>

              <tr>
                <th>Project Type</th>
                <td>Artificial Intelligence / Machine Learning</td>
              </tr>

              <tr>
                <th>Technology Stack</th>
                <td>
                  React.js, FastAPI, SQLite, SQLAlchemy,
                  Bootstrap, Scikit-learn, Pandas
                </td>
              </tr>

              <tr>
                <th>Machine Learning Algorithm</th>
                <td>Random Forest Classification</td>
              </tr>

              <tr>
                <th>Status</th>
                <td>
                  <span className="badge bg-success">
                    Active
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Project Modules */}
      <div className="row mt-5">

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">

            <h2>👤</h2>

            <h4>User Module</h4>

            <p>
              Registration, Login, Profile Management
            </p>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">

            <h2>📂</h2>

            <h4>Dataset Module</h4>

            <p>
              Upload and manage climate datasets.
            </p>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">

            <h2>🤖</h2>

            <h4>Prediction Module</h4>

            <p>
              Predict Solar or Wind Energy using AI.
            </p>

          </div>
        </div>

      </div>

      {/* Progress */}
      <div className="card shadow mt-5">

        <div className="card-header bg-primary text-white">
          <h3>Project Progress</h3>
        </div>

        <div className="card-body">

          <label>Milestone 1</label>

          <div className="progress mb-4">
            <div
              className="progress-bar bg-success"
              style={{ width: "100%" }}
            >
              100%
            </div>
          </div>

          <label>Milestone 2</label>

          <div className="progress mb-4">
            <div
              className="progress-bar bg-warning"
              style={{ width: "100%" }}
            >
              100%
            </div>
          </div>

          <label>Overall Project</label>

          <div className="progress">
            <div
              className="progress-bar bg-info"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="text-center mt-5">

        <Link
          to="/upload"
          className="btn btn-success btn-lg me-3"
        >
          Upload Dataset
        </Link>

        <Link
          to="/prediction"
          className="btn btn-primary btn-lg me-3"
        >
          Predict Energy
        </Link>

        <Link
          to="/history"
          className="btn btn-warning btn-lg"
        >
          View History
        </Link>

      </div>

    </div>
  );
}

export default Projects;