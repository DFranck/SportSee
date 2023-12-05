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
  const dataFormater = () => {
    const weekDayInitial = ["L", "M", "M", "J", "V", "S", "D"];
    const formatedData = data.sessions.map((sessions, index) => {
      return {
        ...sessions,
        day: weekDayInitial[index],
      };
    });
    return formatedData;
  };
  const formatedData = dataFormater();
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };
  return (
    <section className="dashboard-time-container">
      <h2 className="dashboard-time-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer className="dashboard-time-content">
        <LineChart data={formatedData}>
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
            padding={{ left: 10, right: 10 }}
            tick={{ fill: "#ffffff", opacity: "0.5" }}
          />
          <YAxis hide={true} domain={[-10, "dataMax + 50"]} />
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
    </section>
  );
}

export default DashboardTimeChart;
