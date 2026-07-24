import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../api/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (error) {
      console.error("Projects API Error:", error);
    }
  };

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">
          📁 Project Management
        </h1>

        <p className="lead text-muted">
          Manage and monitor your Renewable Energy AI Projects
        </p>
      </div>

      {/* Statistics */}
      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center bg-success text-white">
            <div className="card-body">
              <h2>{projects.length}</h2>
              <h5>Total Projects</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center bg-primary text-white">
            <div className="card-body">
              <h2>FastAPI</h2>
              <h5>Backend</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center bg-warning">
            <div className="card-body">
              <h2>React</h2>
              <h5>Frontend</h5>
            </div>
          </div>
        </div>

      </div>

      {/* Project Table */}

      <div className="card shadow mt-4">

        <div className="card-header bg-success text-white">
          <h4>Projects List</h4>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Project Name</th>
                <th>Description</th>
                <th>Created By</th>
              </tr>
            </thead>

            <tbody>

              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.project_name}</td>
                    <td>{project.description}</td>
                    <td>{project.created_by}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Projects Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="text-center mt-5">

        <Link
          to="/upload"
          className="btn btn-success me-3"
        >
          Upload Dataset
        </Link>

        <Link
          to="/prediction"
          className="btn btn-primary me-3"
        >
          Prediction
        </Link>

        <Link
          to="/history"
          className="btn btn-warning"
        >
          History
        </Link>

      </div>

    </div>
  );
}

export default Projects;