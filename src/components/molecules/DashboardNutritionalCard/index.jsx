import "./index.scss";
function DashboardNutritionalCard({ keyData }) {
  const dataArray = Object.entries(keyData).map(([key, value]) => {
    key = key.replace("Count", "");
    key = key[0].toUpperCase() + key.slice(1) + "s";
    return {
      key,
      value,
      unit: key === "Calories" ? "kCal" : "g",
      path: `../../../assets/images/${key}.png`,
    };
  });
  return dataArray.map((data) => {
    return (
      <div className="NutritionalCard" key={data.key}>
        <div className={`${data.key} icon`}>
          <img src={data.path} alt={`${data.key} icone`} />
        </div>
        <div className="text">
          <h3>{`${data.value}${data.unit}`}</h3>
          <p>{data.key}</p>
        </div>
      </div>
    );
  });
}
export default DashboardNutritionalCard;
