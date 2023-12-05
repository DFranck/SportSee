import { useState, useEffect } from "react";
import {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../api/apiService";

function useUser(userId) {
  const [userData, setUserData] = useState({
    user: null,
    userActivity: null,
    userAverageSessions: null,
    userPerformance: null,
  });
  console.log(userData);
  useEffect(() => {
    async function getUserData() {
      const user = await getUserInfos(userId);
      const userActivity = await getUserActivity(userId);
      const userAverageSessions = await getUserAverageSessions(userId);
      const userPerformance = await getUserPerformance(userId);
      setUserData({
        user,
        userActivity,
        userAverageSessions,
        userPerformance,
      });
    }
    getUserData();
  }, [userId]);

  return userData ? userData : "loading";
}

export default useUser;
