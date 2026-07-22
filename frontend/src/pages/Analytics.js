import AnalyticsCharts from "../components/AnalyticsCharts";

function Analytics() {
  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="text-success fw-bold">
          📊 Analytics Dashboard
        </h1>

        <p className="text-muted">
          Visualize Solar and Wind Prediction Statistics
        </p>
      </div>

      <AnalyticsCharts />

    </div>
  );
}

export default Analytics;