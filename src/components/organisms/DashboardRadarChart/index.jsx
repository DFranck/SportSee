import "./index.scss";
import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";
function DashboardRadarChart({ data }) {
  let performanceData = [];
  for (let i = 0; i < data.data.length; i++) {
    const kindValue = data.data[i].kind;
    const activityName = data.kind[kindValue];
    performanceData.push({
      ...data.data[i],
      kind: activityName,
    });
  }

  console.log(performanceData);
  return (
    <div className="dashboard-radar-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={performanceData} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            fontSize={12}
            fontWeight={500}
            tick={{ fill: "white" }}
          />
          <PolarRadiusAxis opacity={0} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardRadarChart;
