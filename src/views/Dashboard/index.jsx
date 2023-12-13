import DashboardBarChart from "../../components/BarChart";
import DashboardTitle from "../../components/DashboardTitle";
import DashboardNutritionalCard from "../../components/NutritionalCard";
import DashboardRadialBarChart from "../../components/RadialBarChart";
import DashboardRadarChart from "../../components/RadarChart";
import DashboardLineChart from "../../components/LineChart";
import "./dashboard.scss";
import { DataFormater } from "../../api/dataFormater";
import { Loader } from "../../components/Loader";

function Dashboard({ userId }) {
  const {
    user,
    userActivity,
    userAverageSessions,
    userPerformance,
    formatedUserData,
  } = DataFormater(userId);
  DataFormater(userId);
  console.log(formatedUserData.NutritionalCardData);
  if (user) {
    return (
      <main className="dashboard">
        <section className="dashboard-header">
          <DashboardTitle user={user} />
        </section>
        <section className="dashboard-content">
          <section className="dashboard-left-content">
            <DashboardBarChart userId={userId} userActivity={userActivity} />
            <section className="dashboard-bottom-left-content">
              <DashboardLineChart data={userAverageSessions} />
              <DashboardRadarChart performance={userPerformance} />
              <DashboardRadialBarChart user={user} />
            </section>
          </section>
          <section className="dashboard-right-content">
            {formatedUserData.NutritionalCardData && (
              <DashboardNutritionalCard
                NutritionalCardData={formatedUserData.NutritionalCardData}
              />
            )}
          </section>
        </section>
      </main>
    );
  } else {
    return <Loader />;
  }
}

export default Dashboard;
