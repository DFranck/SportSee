import useUser from "../hooks/useUser";
import CaloriesPng from "../assets/images/Calories.png";
import CarbohydratesPng from "../assets/images/Carbohydrates.png";
import LipidsPng from "../assets/images/Lipids.png";
import ProteinsPng from "../assets/images/Proteins.png";
export const DataFormater = (userId) => {
  const { user, userActivity, userAverageSessions, userPerformance } =
    useUser(userId);
  let formatedUserData = {};
  if (user) formatedUserData = userFormater(user);
  return {
    user,
    userActivity,
    userAverageSessions,
    userPerformance,
    formatedUserData,
  };
};
export const userFormater = (user) => {
  const score = user.score ? user.score : user.todayScore;
  const translatedKey = {
    calorieCount: "Calories",
    carbohydrateCount: "Glucides",
    lipidCount: "Lipides",
    proteinCount: "Proteines",
  };
  const imgObject = {
    Calories: CaloriesPng,
    Glucides: CarbohydratesPng,
    Lipides: LipidsPng,
    Proteines: ProteinsPng,
  };
  const NutritionalCardData = Object.entries(user.keyData).map(
    ([key, value]) => {
      const translated = translatedKey[key] || key;
      return {
        key: translated,
        value,
        unit: translated === "Calories" ? "kCal" : "g",
        img: imgObject[translated],
      };
    }
  );
  const formatedUserData = {
    ...user,
    NutritionalCardData,
    score,
  };
  return formatedUserData;
};
