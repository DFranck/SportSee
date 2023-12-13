import "./index.scss";
import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";
function DashboardRadarChart({ performance }) {
  return (
    <section className="dashboard-radar-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={performance}
          cx="50%"
          cy="50%"
          outerRadius="70%"
          innerRadius="10%"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis opacity={0} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default DashboardRadarChart;
