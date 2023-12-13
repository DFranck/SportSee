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
    formatedUserData,
    formatedActivityData,
    formatedSessionsData,
    formatedPerformanceData,
    isDataFormated,
  } = DataFormater(userId);
  DataFormater(userId);
  if (isDataFormated) {
    return (
      <main className="dashboard">
        <section className="dashboard-header">
          <DashboardTitle userData={formatedUserData} />
        </section>
        <section className="dashboard-content">
          <section className="dashboard-left-content">
            <DashboardBarChart activity={formatedActivityData} />
            <section className="dashboard-bottom-left-content">
              <DashboardLineChart sessions={formatedSessionsData} />
              <DashboardRadarChart performance={formatedPerformanceData} />
              <DashboardRadialBarChart
                score={formatedUserData.RadialBarChartData}
              />
            </section>
          </section>
          <section className="dashboard-right-content">
            <DashboardNutritionalCard
              array={formatedUserData.NutritionalCardData}
            />
          </section>
        </section>
      </main>
    );
  } else {
    return <Loader />;
  }
}

export default Dashboard;
