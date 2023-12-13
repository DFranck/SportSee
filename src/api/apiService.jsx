import userInfosMock from "../mocks/userInfosMock.json";
import userAverageSessionsMock from "../mocks/userAverageSessionsMock.json";
import userActivityMock from "../mocks/userActivityMock.json";
import userPerformanceMock from "../mocks/userPerformanceMock.json";

const BASE_URL = "http://localhost:3000";

export async function getUserInfos(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des infos utilisateur",
      error
    );
    const mockUser = userInfosMock.find((user) => user.id === Number(userId));
    return mockUser;
  }
}

export async function getUserActivity(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des activités utilisateur",
      error
    );
    const mockUser = userActivityMock.find(
      (user) => user.userId === Number(userId)
    );
    return mockUser;
  }
}

export async function getUserAverageSessions(userId) {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
    const { data } = await response.json();
    return data;
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
    const { data } = await response.json();
    return data;
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
