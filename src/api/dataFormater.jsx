import useUser from "../hooks/useUser";
import { useEffect, useState } from "react";
import CaloriesPng from "../assets/images/Calories.png";
import CarbohydratesPng from "../assets/images/Carbohydrates.png";
import LipidsPng from "../assets/images/Lipids.png";
import ProteinsPng from "../assets/images/Proteins.png";
export const DataFormater = (userId) => {
  const { user, userActivity, userAverageSessions, userPerformance } =
    useUser(userId);
  const [isDataFormated, setIsDataFormated] = useState(false);
  let formatedUserData = null;
  let formatedActivityData = null;
  let formatedSessionsData = null;
  let formatedPerformanceData = null;
  if (user) formatedUserData = userFormater(user);
  if (userActivity) formatedActivityData = activityFormater(userActivity);
  if (userAverageSessions)
    formatedSessionsData = sessionsFormater(userAverageSessions);
  if (userPerformance)
    formatedPerformanceData = performanceFormater(userPerformance);
  useEffect(() => {
    if (
      formatedUserData &&
      formatedActivityData &&
      formatedSessionsData &&
      formatedPerformanceData
    ) {
      setIsDataFormated(true);
    }
  }, [
    formatedUserData,
    formatedActivityData,
    formatedSessionsData,
    formatedPerformanceData,
  ]);
  return {
    isDataFormated,
    userPerformance,
    formatedUserData,
    formatedActivityData,
    formatedSessionsData,
    formatedPerformanceData,
  };
};
const performanceFormater = (userPerformance) => {
  const translateData = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ];
  const sortData = {
    Intensité: 1,
    Vitesse: 2,
    Force: 3,
    Endurance: 4,
    Energie: 5,
    Cardio: 6,
  };
  const formatedData = userPerformance.data.map((data, index) => {
    return {
      ...data,
      kind: translateData[index],
    };
  });
  formatedData.sort((a, b) => sortData[a.kind] - sortData[b.kind]);
  return formatedData;
};
const sessionsFormater = (userAverageSessions) => {
  const weekDayInitial = ["L", "M", "M", "J", "V", "S", "D"];
  const formatedData = userAverageSessions.sessions.map((sessions, index) => {
    return {
      ...sessions,
      day: weekDayInitial[index],
    };
  });
  return formatedData;
};
const activityFormater = (userActivity) => {
  const formatedData = userActivity.sessions
    .map((sessions) => ({ ...sessions, date: new Date(sessions.day) }))
    .sort((a, b) => a.date - b.date)
    .slice(-10)
    .map((sessions, index) => {
      return {
        ...sessions,
        day: index + 1,
      };
    });
  return formatedData;
};
const userFormater = (user) => {
  const scoreFilter = user.score ? user.score : user.todayScore;
  const RadialBarChartData = [
    {
      name: "Score",
      score: scoreFilter * 100,
    },
  ];
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
  const formatedData = {
    ...user,
    NutritionalCardData,
    RadialBarChartData,
  };
  return formatedData;
};
