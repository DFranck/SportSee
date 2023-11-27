import { useEffect, useState } from "react";
import { getUserActivity } from "../../services/api/apiService";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./index.scss";

function DashboardActivityChart({ userId }) {
  const [userActivity, setUserActivity] = useState(null);
  useEffect(() => {
    async function fetchUserActivity() {
      let activity = await getUserActivity(userId);
      activity = activity.slice(-10);
      setUserActivity(activity);
    }
    fetchUserActivity();
  }, [userId]);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#E60000",
            padding: "20px 10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} KCal`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="graph-bar-container">
      <div className="graph-bar-header">
        <div className="graph-bar-header-left-part">
          <h2>Activité quotidienne</h2>
        </div>
        <div className="graph-bar-header-right-part">
          <span className="black circle"></span>
          <h3>Poids (kg)</h3>
          <span className="red circle"></span>
          <h3>Calories brûlées (KCal)</h3>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        {userActivity ? (
          <BarChart
            data={userActivity}
            margin={{ top: 20, right: 10, left: 20, bottom: 5 }}
            barGap={10}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 14, fill: "#74798C", fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
              orientation="right"
              axisLine={false}
              tick={{ fontSize: 14, fill: "#74798C", fontWeight: 500 }}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              domain={[0, (dataMax) => dataMax + 50]}
              hide={true}
            />
            <Tooltip cursor={{ fill: "#DFDFDF" }} content={<CustomTooltip />} />
            <Bar
              yAxisId="left"
              dataKey="kilogram"
              barSize={7}
              radius={[20, 20, 0, 0]}
              name="Poids (kg)"
            />
            <Bar
              yAxisId="right"
              dataKey="calories"
              fill="red"
              color="grey"
              barSize={7}
              name="Calories brûlées (KCal)"
              radius={[20, 20, 0, 0]}
            />
          </BarChart>
        ) : (
          "Ici Graphique"
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardActivityChart;
