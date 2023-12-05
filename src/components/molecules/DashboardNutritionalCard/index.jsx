import "./index.scss";
import CaloriesPng from "../../../assets/images/Calories.png";
import CarbohydratesPng from "../../../assets/images/Carbohydrates.png";
import LipidsPng from "../../../assets/images/Lipids.png";
import ProteinsPng from "../../../assets/images/Proteins.png";

function DashboardNutritionalCard({ keyData }) {
  const imgObject = {
    Calories: CaloriesPng,
    Carbohydrates: CarbohydratesPng,
    Lipids: LipidsPng,
    Proteins: ProteinsPng,
  };
  const dataArray = Object.entries(keyData).map(([key, value]) => {
    key = key.replace("Count", "");
    key = key[0].toUpperCase() + key.slice(1) + "s";
    return {
      key,
      value,
      unit: key === "Calories" ? "kCal" : "g",
      img: imgObject[key],
    };
  });
  return dataArray.map((data) => {
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
