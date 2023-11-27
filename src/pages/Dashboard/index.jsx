import DashboardActivityChart from "../../components/DashboardActivityChart";
import DashboardTitle from "../../components/DashboardTitle";

function Dashboard({ userId }) {
  return (
    <div>
      <DashboardTitle userId={userId} />
      <DashboardActivityChart userId={userId} />
    </div>
  );
}

export default Dashboard;
