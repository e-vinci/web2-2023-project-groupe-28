/* eslint-disable import/no-unresolved */
const PocketBase = require('pocketbase/cjs');

const pb = new PocketBase('https://battleships.hop.sh');

async function getUserFromEmail(email) {
  const record = await pb.collection('users').getFullList({
    filter: `email = "${email}"`,
  });
  if (record.length > 0) {
    const user = record[0]; // même chose que const username = record[0].username;
    return user;
    // eslint-disable-next-line no-else-return
  }
  return undefined; // Aucun utilisateur trouvé avec cet email
}

async function getUserFromUsername(username) {
  const record = await pb.collection('users').getFullList({
    filter: `username = "${username}"`,
  });
  if (record.length > 0) {
    const user = record[0]; // même chose que const username = record[0].username;
    return user;
    // eslint-disable-next-line no-else-return
  }
  return undefined; // Aucun utilisateur trouvé avec cet email
}

async function createDataGame(email) {
  const user = await getUserFromEmail(email);
  const dataGame = {
    user: user.id,
    victoryNumber: 0,
    defeatNumber: 0,
    score: 0,
  };

  try {
    const record = await pb.collection('leaderboard').create(dataGame);

    return record;
  } catch (error) {
    // await pb.collection('users').delete(user.id);
    return undefined;
  }
}

async function register(username, email, password, passwordConfirm) {
  const user = {
    username,
    email,
    emailVisibility: true,
    password,
    passwordConfirm,
  };
  try {
    const userFoundFromEmail = await getUserFromEmail(email);
    const userFoundFromUsername = await getUserFromUsername(username);
    if (userFoundFromEmail) return undefined;
    if (userFoundFromUsername) return undefined;
    const record = await pb.collection('users').create(user);
    const dataGame = await createDataGame(email);
    if (!dataGame) {
      return undefined;
    }
    const authData = await pb.collection('users').authWithPassword(record.email, password);
    const authenticatedUser = {
      username: authData.record.username,
      token: authData.token,
    };
    // currentUser = authenticatedUser.username;
    return authenticatedUser;
  } catch (error) {
    return undefined;
  }
}

// eslint-disable-next-line consistent-return
async function login(loginUser, password) {
  try {
    let userFound = await getUserFromEmail(loginUser); // loginUser = email
    if (!userFound) {
      userFound = await getUserFromUsername(loginUser); // loginUser = username
      if (!userFound) return undefined;
    }
    const authData = await pb.collection('users').authWithPassword(userFound.email, password);
    const authenticatedUser = {
      username: authData.record.username,
      token: authData.token,
    };
    // currentUser = authenticatedUser.username;
    return authenticatedUser;
  } catch (error) {
    return undefined;
  }
}

module.exports = {
  register,
  login,
  getUserFromUsername,
};
