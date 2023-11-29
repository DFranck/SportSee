import "./index.scss";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

function DashboardTimeChart({ data }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#fff",
            padding: "5px",
            fontSize: "8px",
            fontWeight: "500",
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="dashboard-time-container">
      <h2 className="dashboard-time-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer className="dashboard-time-content">
        <LineChart data={data.sessions}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffff", opacity: "0.5" }}
          />
          <YAxis hide={true} domain={[0, "dataMax + 50"]} />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            stroke="url(#colorUv)"
            strokeWidth={2}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardTimeChart;
