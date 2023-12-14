/* eslint-disable max-len */
const express = require('express');
// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');
const { register, login } = require('../models/users');

const pb = new PocketBase('https://battleships.hop.sh');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;
  const passwordConfirm = req?.body?.passwordConfirm?.length !== 0 ? req.body.passwordConfirm : undefined;

  if (!username || !email || !password || !passwordConfirm) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await register(username, email, password, passwordConfirm);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const loginUser = req?.body?.loginUser?.length !== 0 ? req.body.loginUser : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!loginUser || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(loginUser, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

/* Logout a user */
router.get('/logout', (req, res) => {
  pb.authStore.clear();
  req.session = null;
  return res.sendStatus(200);
});

module.exports = router;
