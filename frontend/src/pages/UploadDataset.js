import { useState } from "react";
import { uploadDataset } from "../api/api";

function UploadDataset() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const uploadFile = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await uploadDataset(formData);

      setMessage(
        `✅ Dataset Uploaded Successfully!\n\nFilename: ${res.data.filename}`
      );

      console.log(res.data);

      setFile(null);

      e.target.reset();

    } catch (error) {
      console.error(error);
      setMessage("❌ Dataset Upload Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">
          📂 Upload Climate Dataset
        </h1>

        <p className="lead text-muted">
          Upload your climate dataset and allow the AI model to analyze renewable energy potential.
        </p>
      </div>

      <div className="row">

        <div className="col-lg-7">

          <div className="card shadow-lg border-0">

            <div className="card-header bg-success text-white">
              <h4>Upload CSV File</h4>
            </div>

            <div className="card-body">

              <form onSubmit={uploadFile}>

                <div
                  className="border border-3 border-success rounded p-5 text-center mb-4"
                  style={{
                    background: "#f8f9fa",
                    borderStyle: "dashed",
                  }}
                >

                  <h1>📁</h1>

                  <h4>Select Dataset</h4>

                  <p className="text-muted">
                    Only CSV files are supported.
                  </p>

                  <input
                    type="file"
                    className="form-control"
                    accept=".csv"
                    onChange={handleFileChange}
                  />

                </div>

                {file && (
                  <div className="alert alert-info">
                    <strong>Selected File:</strong>
                    <br />
                    {file.name}
                  </div>
                )}

                <button
                  className="btn btn-success btn-lg w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Upload Dataset"}
                </button>

              </form>

              {message && (
                <div className="alert alert-success mt-4 text-center">
                  {message}
                </div>
              )}

            </div>

          </div>

        </div>

        <div className="col-lg-5">

          <div className="card shadow-lg mb-4">

            <div className="card-header bg-primary text-white">
              <h5>Supported Dataset</h5>
            </div>

            <div className="card-body">

              <ul className="list-group">
                <li className="list-group-item">🌡 Temperature</li>
                <li className="list-group-item">💨 Wind Speed</li>
                <li className="list-group-item">💧 Humidity</li>
                <li className="list-group-item">🌧 Rainfall</li>
                <li className="list-group-item">⚡ Energy Label</li>
              </ul>

            </div>

          </div>

          <div className="card shadow-lg">

            <div className="card-header bg-dark text-white">
              <h5>Upload Guidelines</h5>
            </div>

            <div className="card-body">

              <ul>
                <li>Upload only CSV files.</li>
                <li>Dataset must contain climate attributes.</li>
                <li>Maximum file size: 10 MB.</li>
                <li>Ensure column names are correct.</li>
                <li>Use UTF-8 encoded CSV files.</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UploadDataset;