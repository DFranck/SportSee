import userInfosMock from "../mocks/userInfosMock.json";
import userAverageSessionsMock from "../mocks/userAverageSessionsMock.json";
import userActivityMock from "../mocks/userActivityMock.json";
import userPerformanceMock from "../mocks/userPerformanceMock.json";

const BASE_URL = "http://localhost:3000";

export async function getUserInfos(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    } else {
      console.error("Réponse API non réussie pour getUserInfos", response);
      const mockUser = userInfosMock.find((user) => user.id === Number(userId));
      return mockUser ? mockUser : null;
    }
  } catch (error) {
    // console.error(
    //   "Erreur lors de la récupération des infos utilisateur",
    //   error
    // );
    const mockUser = userInfosMock.find((user) => user.id === Number(userId));
    return mockUser;
  }
}

export async function getUserActivity(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    } else {
      console.error("Réponse API non réussie pour getUserActivity", response);
      const mockUser = userActivityMock.find(
        (user) => user.userId === Number(userId)
      );
      return mockUser;
    }
  } catch (error) {
    // console.error(
    //   "Erreur lors de la récupération des activités utilisateur",
    //   error
    // );
    const mockUser = userActivityMock.find(
      (user) => user.userId === Number(userId)
    );
    return mockUser;
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
      const mockUser = userAverageSessionsMock.find(
        (user) => user.userId === Number(userId)
      );
      return mockUser;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des sessions moyennes utilisateur",
      error
    );
    const mockUser = userAverageSessionsMock.find(
      (user) => user.userId === Number(userId)
    );
    return mockUser;
  }
}

export async function getUserPerformance(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    } else {
      console.error(
        "Réponse API non réussie pour getUserPerformance",
        response
      );
      const mockUser = userPerformanceMock.find(
        (user) => user.userId === Number(userId)
      );
      return mockUser;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des performances utilisateur",
      error
    );
    const mockUser = userPerformanceMock.find(
      (user) => user.userId === Number(userId)
    );
    return mockUser;
  }
}
