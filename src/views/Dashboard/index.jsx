import DashboardActivityChart from "../../components/organisms/DashboardActivityChart";
import DashboardTitle from "../../components/molecules/DashboardTitle";
import DashboardNutritionalCard from "../../components/molecules/DashboardNutritionalCard";
import DashboardKPIChart from "../../components/organisms/DashboardKPIChart";
import DashboardRadarChart from "../../components/organisms/DashboardRadarChart";
import DashboardTimeChart from "../../components/organisms/DashboardTimeChart";
import useUser from "../../hooks/useUser";
import "../../styles/dashboard.scss";

function Dashboard({ userId }) {
  const { user, userActivity, userAverageSessions, userPerformance } =
    useUser(userId);
  if (user) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <DashboardTitle user={user} />
        </div>
        <div className="dashboard-content">
          <div className="dashboard-left-content">
            <DashboardActivityChart
              userId={userId}
              userActivity={userActivity}
            />
            <div className="dashboard-bottom-left-content">
              <DashboardTimeChart data={userAverageSessions} />
              <DashboardRadarChart data={userPerformance} />
              <DashboardKPIChart score={user.score} />
            </div>
          </div>
          <div className="dashboard-right-content">
            <DashboardNutritionalCard keyData={user.keyData} />
          </div>
        </div>
      </div>
    );
  } else {
    return "chargement";
  }
}

export default Dashboard;
