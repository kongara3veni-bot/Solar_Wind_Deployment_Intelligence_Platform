import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post("/auth/auth/register", user);

      alert(response.data.message);

      setUser({
        name: "",
        email: "",
        password: "",
        role: "user",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.detail || "Registration Failed!");
      } else {
        alert("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #134E5E, #71B280)",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          width: "500px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center mb-4">
          <h1>🌞🌬️</h1>

          <h2 className="fw-bold text-success">
            Create Account
          </h2>

          <p className="text-muted">
            Solar Wind Deployment Intelligence Platform
          </p>
        </div>

        <form onSubmit={registerUser}>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">
              Role
            </label>

            <select
              className="form-select"
              name="role"
              value={user.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success btn-lg"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

        </form>

        <hr />

        <div className="text-center">
          <p>Already have an account?</p>

          <Link
            to="/login"
            className="btn btn-outline-primary"
          >
            Login Here
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;