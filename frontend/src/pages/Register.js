import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/auth/register", user);

      alert("Registration Successful!");

      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Registration Failed!");
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
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
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
              <option>User</option>
              <option>Admin</option>
            </select>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success btn-lg"
            >
              Register
            </button>
          </div>

        </form>

        <hr />

        <div className="text-center">
          <p>
            Already have an account?
          </p>

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