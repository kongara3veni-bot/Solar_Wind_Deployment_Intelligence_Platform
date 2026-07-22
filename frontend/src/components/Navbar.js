import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">

      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🌞 Solar Wind AI
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                📊 Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                📂 Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/upload">
                📤 Upload Dataset
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/prediction">
                🤖 Prediction
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/history">
                📜 History
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/analytics">
                📈 Analytics
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                👤 Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-warning fw-bold" to="/login">
                🚪 Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dataset-management">
                📂 Dataset Manager
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;