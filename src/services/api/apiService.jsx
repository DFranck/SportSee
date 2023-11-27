import userInfosMock from "../../mocks/userInfosMock.json";
import userAverageSessionsMock from "../../mocks/userAverageSessionsMock.json";
import userActivityMock from "../../mocks/userActivityMock.json";
import userPerformanceMock from "../../mocks/userPerformanceMock.json";

const BASE_URL = "http://localhost:3000";

export async function getUserInfos(userId) {
  console.log("getUserInfos appelé pour l'utilisateur", userId);
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    console.log("Réponse reçue", response);
    if (response.ok) {
      const { data } = await response.json();
      console.log("infos", data.userInfos);
      return data.userInfos;
    } else {
      console.error("Réponse API non réussie pour getUserInfos", response);
      const mockUser = userInfosMock.find((user) => user.id === Number(userId));
      console.log("Retourne les données userInfosMock", mockUser);

      return mockUser ? mockUser.userInfos : null;
    }
  } catch (error) {
    // console.error(
    //   "Erreur lors de la récupération des infos utilisateur",
    //   error
    // );
    const mockUser = userInfosMock.find((user) => user.id === Number(userId));
    console.log("Retourne les données userInfosMock en cas d'erreur", mockUser);
    return mockUser.userInfos;
  }
}

export async function getUserActivity(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    if (response.ok) {
      const { data } = await response.json();
      console.log("Activity", data.sessions);
      return data.sessions;
    } else {
      console.error("Réponse API non réussie pour getUserActivity", response);
      return userActivityMock;
    }
  } catch (error) {
    // console.error(
    //   "Erreur lors de la récupération des activités utilisateur",
    //   error
    // );
    const mockUser = userActivityMock.find(
      (user) => user.userId === Number(userId)
    );
    console.log(
      "Retourne les donnée userActivityMock en cas d'erreur",
      mockUser
    );
    return mockUser.sessions;
  }
}

export async function getUserAverageSessions(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    } else {
      console.error(
        "Réponse API non réussie pour getUserAverageSessions",
        response
      );
      return userAverageSessionsMock;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des sessions moyennes utilisateur",
      error
    );
    return userAverageSessionsMock;
  }
}

export async function getUserPerformance(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
    if (response.ok) {
      const { data } = await response.json();
      console.log("performance", data);
      return data;
    } else {
      console.error(
        "Réponse API non réussie pour getUserPerformance",
        response
      );
      return userPerformanceMock;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des performances utilisateur",
      error
    );
    return userPerformanceMock;
  }
}
