/*eslint-disable*/
const STORE_NAME = 'user';
let currentUser; 

const getAuthenticatedUserLeaderboard = () => {
  if (currentUser !== undefined) return currentUser;

  const serializedUser = localStorage.getItem(STORE_NAME);
  if (!serializedUser) return undefined;

  currentUser = JSON.parse(serializedUser);
  return currentUser;
}

export { getAuthenticatedUserLeaderboard };