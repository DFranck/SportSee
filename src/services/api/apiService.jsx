//Base a changer par le vraichemin api lors de la mise en prod
const BASE_URL = "http://localhost:3000";

export async function getUserInfos(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  const { data } = await response.json();
  console.log("infos", data.userInfos);
  return data.userInfos;
}

export async function getUserActivity(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
  const { data } = await response.json();
  console.log("Activity", data.sessions);
  return data.sessions;
}

export async function getUserAverageSessions(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
  const { data } = await response.json();
  console.log("Average sessions", data.sessions);
}

export async function getUserPerformance(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  const { data } = await response.json();
  console.log("performance", data);
  return data;
}
