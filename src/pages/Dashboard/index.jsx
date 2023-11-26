import DashboardActivity from "../../components/DashboardActivity";
import DashboardTitle from "../../components/DashboardTitle";

function Dashboard({ userId }) {
  return (
    <div>
      <DashboardTitle userId={userId} />
      <DashboardActivity userId={userId} />
    </div>
  );
}

export default Dashboard;
