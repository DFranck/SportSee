import { useEffect, useState } from "react";
import { getUserInfos } from "../../services/api/apiService";

function DashboardTitle({ userId }) {
  const [userInfos, setUserInfos] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      const userInfos = await getUserInfos(userId);
      setUserInfos(userInfos);
    }
    fetchUserInfo();
  }, [userId]);

  return (
    <div>
      <h1>{userInfos ? `Bonjour ${userInfos.firstName}` : null}</h1>
      <p>Vous avez battu votre objectif</p>
    </div>
  );
}

export default DashboardTitle;
