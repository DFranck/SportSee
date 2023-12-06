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
  const dataFormater = () => {
    const translateData = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    const sortData = {
      Intensité: 1,
      Vitesse: 2,
      Force: 3,
      Endurance: 4,
      Energie: 5,
      Cardio: 6,
    };
    const formatedData = performance.data.map((data, index) => {
      return {
        ...data,
        kind: translateData[index],
      };
    });
    formatedData.sort((a, b) => sortData[a.kind] - sortData[b.kind]);
    return formatedData;
  };
  const formatedData = dataFormater();
  return (
    <section className="dashboard-radar-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formatedData} cx="50%" cy="50%" outerRadius="70%">
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
    </section>
  );
}

export default DashboardRadarChart;
