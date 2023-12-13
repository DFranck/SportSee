import userInfosMock from "../mocks/userInfosMock.json";
import userAverageSessionsMock from "../mocks/userAverageSessionsMock.json";
import userActivityMock from "../mocks/userActivityMock.json";
import userPerformanceMock from "../mocks/userPerformanceMock.json";

const BASE_URL = "http://localhost:3000";
const mode = "dev";
export async function getUserInfos(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (mode === "dev") {
      const mockUser = userInfosMock.find((user) => user.id === Number(userId));
      // console.log("userInfosMock", mockUser);
      return mockUser;
    }
    console.error(
      "Erreur lors de la récupération des infos utilisateur",
      error
    );
    throw error;
  }
}

export async function getUserActivity(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (mode === "dev") {
      const mockUser = userActivityMock.find(
        (user) => user.userId === Number(userId)
      );
      // console.log("userActivityMock", mockUser);
      return mockUser;
    }

    console.error(
      "Erreur lors de la récupération des activités utilisateur",
      error
    );
    throw error;
  }
}

export async function getUserAverageSessions(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (mode === "dev") {
      const mockUser = userAverageSessionsMock.find(
        (user) => user.userId === Number(userId)
      );
      // console.log("userAverageSessionsMock", mockUser);
      return mockUser;
    }

    console.error(
      "Erreur lors de la récupération des sessions moyennes utilisateur",
      error
    );
    throw error;
  }
}

export async function getUserPerformance(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (mode === "dev") {
      const mockUser = userPerformanceMock.find(
        (user) => user.userId === Number(userId)
      );
      // console.log("userPerformanceMock", mockUser);
      return mockUser;
    }
    console.error(
      "Erreur lors de la récupération des performances utilisateur",
      error
    );

    throw error;
  }
}
