import "./index.scss";
import {
  RadialBarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  RadialBar,
} from "recharts";

const DashboardKPIChart = ({ score }) => {
  const data = [
    {
      name: "Score",
      score: score * 100,
      fill: "#FF0000",
    },
  ];

  return (
    <div className="dashboard-KPI-container">
      <h2 className="dashboard-KPI-title">Score</h2>
      <h3 className="dashboard-KPI-score">
        <span>{`${score * 100}%`}</span>
        {` de votre objectif`}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="90%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            clockWise
            dataKey="score"
            cornerRadius={50}
            fill="#ffffff"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardKPIChart;
