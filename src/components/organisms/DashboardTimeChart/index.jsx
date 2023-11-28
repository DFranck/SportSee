import "./index.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DashboardTimeChart({ data }) {
  console.log(data);
  return (
    <div className="dashboard-time-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data.sessions}>
          {/* <CartesianGrid strokeDasharray="0" /> */}
          <XAxis dataKey="day" />
          <Line type="monotone" dataKey="sessionLength" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardTimeChart;
