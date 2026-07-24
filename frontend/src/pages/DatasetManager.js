import { useEffect, useState } from "react";
import { readDataset } from "../api/api";

function DatasetManager() {
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataset();
  }, []);

  const fetchDataset = async () => {
    try {
      const res = await readDataset();
      setDataset(res.data);
    } catch (error) {
      console.error("Dataset Read Error:", error);
      alert("Unable to read dataset.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading Dataset...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="text-success fw-bold">
          📂 Dataset Manager
        </h1>

        <p className="text-muted">
          Dataset information from the backend
        </p>
      </div>

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h4>Dataset Information</h4>
        </div>

        <div className="card-body">

          <table className="table table-bordered">

            <tbody>

              <tr>
                <th>Total Rows</th>
                <td>{dataset.rows}</td>
              </tr>

              <tr>
                <th>Total Columns</th>
                <td>{dataset.columns}</td>
              </tr>

              <tr>
                <th>Column Names</th>
                <td>
                  {dataset.column_names.map((col, index) => (
                    <span
                      key={index}
                      className="badge bg-primary me-2 mb-2"
                    >
                      {col}
                    </span>
                  ))}
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default DatasetManager;