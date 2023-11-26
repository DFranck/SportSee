// import { useEffect, useState } from "react";
// import { getUserActivity } from "../../services/api/apiService";

// function Activity({ userId }) {
//   const [userActivity, setUserActivity] = useState(null);

//   useEffect(() => {
//     async function fetchUserActivity() {
//       const activity = await getUserActivity(userId);
//       console.log(activity);
//       setUserActivity(activity);
//     }
//     fetchUserActivity();
//   }, [userId]);
//   return (
//     <div>
//       <p>ICI LE GRAPHIQUE DACTIVITER QUATIDIENNE de {userId}</p>
//       {userActivity
//         ? userActivity.map((activity) => {
//             return (
//               <li key={`${userId}-${activity.day}`}>
//                 {activity.calories}, {activity.kilogram}, {activity.day}
//               </li>
//             );
//           })
//         : "chargement"}
//     </div>
//   );
// }

// export default Activity;
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getUserActivity } from "../../services/api/apiService";

function DashboardActivity({ userId }) {
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    async function fetchActivityData() {
      const data = await getUserActivity(userId);
      setActivityData(data.sessions);
    }

    fetchActivityData();
  }, [userId]);

  return (
    <div>
      <h2>Activité quotidienne</h2>
      {activityData ? (
        <BarChart
          width={730}
          height={250}
          data={activityData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" name="Poids (kg)" />
          <Bar
            dataKey="calories"
            fill="#82ca9d"
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default DashboardActivity;
