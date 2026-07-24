import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(user);

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: res.email,
          role: "User",
        })
      );

      alert(res.message);

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          width: "420px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center">
          <h1>🌞🌬️</h1>
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">
            Solar Wind Deployment Intelligence Platform
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>

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
            <label className="form-label">Password</label>

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

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success btn-lg"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p>Don't have an account?</p>

          <Link
            to="/register"
            className="btn btn-outline-primary"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;