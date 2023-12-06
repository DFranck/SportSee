import { useEffect, useState } from "react";
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
  const [xCordinate, setXCordinate] = useState(null);
  const [redBackground, setRedBackground] = useState(0);
  const [darkBackground, setDarkBackground] = useState(0);
  const [displayBackground, setDisplayBackground] = useState("none");
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
  const CustomTooltip = ({ active, payload, coordinate }) => {
    if (active && coordinate) {
      setXCordinate(coordinate.x);
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };
  useEffect(() => {
    setDarkBackground(258 - xCordinate);
    setRedBackground(xCordinate);
  }, [xCordinate]);
  const resetChart = () => {
    setDarkBackground(0);
    setRedBackground(0);
  };
  return (
    <section
      className="dashboard-time-container"
      onMouseOut={() => resetChart()}
      onMouseEnter={() =>
        document
          .querySelector(".dynamique-background")
          .setAttribute("display", setDisplayBackground("block"))
      }
    >
      <div className="dynamique-background">
        <span
          className="dynamique-background-red"
          style={{ width: redBackground }}
        ></span>
        <span
          className="dynamique-background-dark"
          style={{ width: darkBackground, display: displayBackground }}
        ></span>
      </div>
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
            padding={{ left: -5, right: -5 }}
            opacity={0}
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
      <ul id="line-chart-index">
        <li>L</li>
        <li>M</li>
        <li>M</li>
        <li>J</li>
        <li>V</li>
        <li>S</li>
        <li>D</li>
      </ul>
    </section>
  );
}

export default DashboardTimeChart;
