import "./index.scss";
function DashboardNutritionalCard({ NutritionalCardData }) {
  return NutritionalCardData.map((data) => {
    return (
      <section className="NutritionalCard" key={data.key}>
        <figure className={`${data.key} icon`}>
          <img src={data.img} alt={`${data.key} icone`} />
        </figure>
        <div className="text">
          <h3>{`${data.value}${data.unit}`}</h3>
          <p>{data.key}</p>
        </div>
      </section>
    );
  });
}
export default DashboardNutritionalCard;
