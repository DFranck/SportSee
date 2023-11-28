import "./index.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DashboardActivityChart({ userActivity }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#E60000",
            width: "39px",
            height: "63px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            textAlign: "center",
            fontSize: "7px",
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
      <div className="graph-bar-content">
        <ResponsiveContainer width="100%" height={200}>
          {userActivity ? (
            <BarChart data={userActivity.sessions} barGap={10}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 14, fill: "#74798C", fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                tickMargin={15}
              />
              <YAxis
                yAxisId="left"
                domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
                orientation="right"
                axisLine={false}
                tick={{ fontSize: 14, fill: "#74798C", fontWeight: 500 }}
                tickCount={4}
                tickLine={false}
              />
              <YAxis
                yAxisId="right"
                domain={[0, (dataMax) => dataMax + 50]}
                hide={true}
              />
              <Tooltip
                cursor={{ fill: "#DFDFDF" }}
                content={<CustomTooltip />}
              />
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
    </div>
  );
}

export default DashboardActivityChart;
