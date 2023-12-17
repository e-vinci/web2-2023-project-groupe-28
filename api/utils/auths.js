/* eslint-disable import/no-unresolved */
const PocketBase = require('pocketbase/cjs');
const { getUserFromUsername } = require('../models/users');

const pb = new PocketBase('https://battleships.hop.sh');

const authorize = async (req, res, next) => {
  const token = req.get('Authorization');
  if (!token) return res.sendStatus(401);
  pb.authStore.save(token, null);

  try {
    const decoded = await pb.collection('users').authRefresh();
    const { username } = decoded.record;

    const existingUser = getUserFromUsername(username);

    if (!existingUser) return res.sendStatus(401);

    req.user = existingUser; // request.user object is available in all other middleware functions
    return next();
  } catch (err) {
    console.error('authorize: ', err);
    return res.sendStatus(401);
  }
};

const isAdmin = (req, res, next) => {
  const { username } = req.user;

  if (username !== 'Admin') return res.sendStatus(403);
  return next();
};

module.exports = { authorize, isAdmin };
