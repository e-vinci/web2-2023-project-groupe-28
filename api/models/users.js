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
const PocketBase = require('pocketbase/cjs');
const { getUsernameFromEmail } = require('../utils/dbUtils');

const pb = new PocketBase('https://battleships.hop.sh');

// let currentUser;

async function register(username, email, password, passwordConfirm) {
  const user = {
    username,
    email,
    password,
    passwordConfirm,
  };
  try {
    const userFound = await getUsernameFromEmail(email);
    console.log(`userfound : ${userFound}`);
    if (userFound) return undefined;
    const record = await pb.collection('users').create(user);
    console.log(`record : ${record}`);
    return record;
  } catch (error) {
    return error;
  }
}

// eslint-disable-next-line consistent-return
async function login(email, password) {
  try {
    const userFound = await getUsernameFromEmail(email);
    console.log(`userfound : ${userFound}`);
    if (!userFound) return undefined;
    const authData = await pb.collection('users').authWithPassword(userFound, password);
    return authData;
  } catch (error) {
    if (error.name === 'ClientResponseError 400' && error.response && error.status === 400) {
      // Handle authentication failure
      return undefined;
    }

    // throw error;
  }
}

module.exports = {
  register,
  login,
};
