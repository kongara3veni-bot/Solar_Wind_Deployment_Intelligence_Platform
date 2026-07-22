import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import UploadDataset from "./pages/UploadDataset";
import Prediction from "./pages/Prediction";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import DatasetManagement from "./pages/DatasetManagement";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/upload" element={<UploadDataset />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/history" element={<History />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/dataset-management"
          element={<DatasetManagement />}
        />
      </Routes>
    </Router>
  );
}

export default App;