import "./index.scss";

function DashboardTitle({ user }) {
  return (
    <section className="title-container">
      <h1>
        Bonjour <span>{user ? user.userInfos.firstName : null}</span>
      </h1>
      <p>
        {user.score > 0
          ? "Félicitation ! Vous avez explosé vos objectifs hier 👏"
          : "Vous ferez mieux demain!"}
      </p>
    </section>
  );
}

export default DashboardTitle;
