import DashboardActivityChart from "../../components/organisms/DashboardActivityChart";
import DashboardTitle from "../../components/molecules/DashboardTitle";
import DashboardNutritionalCard from "../../components/molecules/DashboardNutritionalCard";
import DashboardKPIChart from "../../components/organisms/DashboardKPIChart";
import DashboardRadarChart from "../../components/organisms/DashboardRadarChart";
import DashboardTimeChart from "../../components/organisms/DashboardTimeChart";
import useUser from "../../hooks/useUser";
import "./dashboard.scss";

function Dashboard({ userId }) {
  const { user, userActivity, userAverageSessions, userPerformance } =
    useUser(userId);
  if (user) {
    return (
      <main className="dashboard">
        <section className="dashboard-header">
          <DashboardTitle user={user} />
        </section>
        <section className="dashboard-content">
          <section className="dashboard-left-content">
            <DashboardActivityChart
              userId={userId}
              userActivity={userActivity}
            />
            <section className="dashboard-bottom-left-content">
              <DashboardTimeChart data={userAverageSessions} />
              <DashboardRadarChart data={userPerformance} />
              <DashboardKPIChart user={user} />
            </section>
          </section>
          <section className="dashboard-right-content">
            <DashboardNutritionalCard keyData={user.keyData} />
          </section>
        </section>
      </main>
    );
  } else {
    return "chargement";
  }
}

export default Dashboard;
