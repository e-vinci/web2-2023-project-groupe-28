/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jwtSecret = 'ilovemypizza!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const defaultUsers = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin', saltRounds),
  },
];

async function login(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (!userFound) return undefined;

  const passwordMatch = await bcrypt.compare(password, userFound.password);
  if (!passwordMatch) return undefined;

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

async function register(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;

  await createOneUser(username, password);

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

function readOneUserFromUsername(username) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.username === username);
  if (indexOfUserFound < 0) return undefined;

  return users[indexOfUserFound];
}

async function createOneUser(username, password) {
  const users = parse(jsonDbPath, defaultUsers);

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createdUser = {
    id: getNextId(),
    username,
    password: hashedPassword,
  };

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

function getNextId() {
  const users = parse(jsonDbPath, defaultUsers);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
}; */

// eslint-disable-next-line consistent-return
/* async function login(email, password) {
  let authData;
  try {
    authData = await pb.collection('users').authWithPassword(email, password);
    currentUser = authData;
    return authData;
  } catch (error) {
    if (error.name === 'ClientResponseError 400' && error.response && error.status === 400) {
      // Handle authentication failure
      return undefined;
    }

    // throw error;
  }
}

async function getCurrentUser() {
  return currentUser;
}

module.exports = {
  login,
  getCurrentUser,
}; */
const e = require('express');
const PocketBase = require('pocketbase/cjs');

const pb = new PocketBase('https://battleships.hop.sh');

let currentUser;

async function getUserFromEmail(email) {
  const record = await pb.collection('users').getFullList({
    filter: `email = "${email}"`,
  });
  if (record.length > 0) {
    const user = record[0];// même chose que const username = record[0].username;

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

  console.log('userCreateDataGame : ');
  console.log(user);
  try {
    console.log(`user.id : ${user.id}`);
    const record = await pb.collection('leaderboard').create(dataGame);
    console.log(`recordCreateDataGame : ${record}`);
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
    const userFound = await getUserFromEmail(email);
    if (userFound) return undefined;

    const record = await pb.collection('users').create(user);
    const dataGame = await createDataGame(email);
    if (!dataGame) {
      return undefined;
    }
    console.log(`RegisterRecord : ${record}`);
    return record;
  } catch (error) {
    return undefined;
  }
}

// eslint-disable-next-line consistent-return
async function login(email, password) {
  try {
    const userFound = await getUserFromEmail(email);
    if (!userFound) return undefined;
    const authData = await pb.collection('users').authWithPassword(userFound.username, password);
    currentUser = pb.authStore.model;
    console.log(`currentUser : ${currentUser}`);
    return authData;
  } catch (error) {
    if (error.name === 'ClientResponseError 400' && error.response && error.status === 400) {
      // Handle authentication failure
      return undefined;
    }

    // throw error;
  }
}

async function getCurrentUser() {
  return currentUser;
}

module.exports = {
  register,
  login,
  getCurrentUser,
};
