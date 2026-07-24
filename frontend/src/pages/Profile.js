import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser({
        name: savedUser.name || "User",
        email: savedUser.email || "",
        role: savedUser.role || "User",
        phone: savedUser.phone || "Not Available",
        location: savedUser.location || "India",
      });
    } else {
      setUser({
        name: "Pavani",
        email: "pavani@gmail.com",
        role: "User",
        phone: "+91 9876543210",
        location: "Andhra Pradesh, India",
      });
    }
  }, []);

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="text-success fw-bold">
          👤 User Profile
        </h1>

        <p className="text-muted">
          Manage your account information and view your profile details.
        </p>
      </div>

      <div className="row">

        <div className="col-md-4">

          <div className="card shadow-lg border-0">

            <div className="card-body text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                width="150"
                className="rounded-circle mb-3"
              />

              <h3>{user.name}</h3>

              <span className="badge bg-success fs-6">
                {user.role}
              </span>

              <hr />

              <button className="btn btn-primary w-100">
                Edit Profile
              </button>

            </div>

          </div>

        </div>

        <div className="col-md-8">

          <div className="card shadow-lg border-0">

            <div className="card-header bg-success text-white">
              <h4>Profile Information</h4>
            </div>

            <div className="card-body">

              <div className="row mb-4">

                <div className="col-md-6">
                  <label className="fw-bold">Full Name</label>
                  <input className="form-control" value={user.name} readOnly />
                </div>

                <div className="col-md-6">
                  <label className="fw-bold">Email</label>
                  <input className="form-control" value={user.email} readOnly />
                </div>

              </div>

              <div className="row mb-4">

                <div className="col-md-6">
                  <label className="fw-bold">Phone</label>
                  <input className="form-control" value={user.phone} readOnly />
                </div>

                <div className="col-md-6">
                  <label className="fw-bold">Location</label>
                  <input className="form-control" value={user.location} readOnly />
                </div>

              </div>

              <div className="row">

                <div className="col-md-6">
                  <label className="fw-bold">Role</label>
                  <input className="form-control" value={user.role} readOnly />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;