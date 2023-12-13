import "./index.scss";

function DashboardTitle({ userData }) {
  return (
    <section className="title-container">
      <h1>
        Bonjour <span>{userData ? userData.userInfos.firstName : null}</span>
      </h1>
      <p>
        {userData.score > 0
          ? "Félicitation ! Vous avez explosé vos objectifs hier 👏"
          : "Vous ferez mieux demain!"}
      </p>
    </section>
  );
}

export default DashboardTitle;
