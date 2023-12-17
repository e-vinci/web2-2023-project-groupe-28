/* eslint-disable consistent-return */
/* eslint-disable no-console */
// const PocketBase = require('pocketbase/cjs');

const express = require('express');

// const pb = new PocketBase('https://battleships.hop.sh');

const router = express.Router();

const { updateUserInfo, getDataGame } = require('../models/profils');
const { getUserFromUsername } = require('../models/users');
const { authorize } = require('../utils/auths');

router.get('/:character', authorize, async (req, res) => {
  const username = req?.params?.character;
  const tokenUser = await req?.user;
  if (username !== tokenUser.username) return res.sendStatus(401);
  const user = await getDataGame(username);
  const data = user;
  data.user = tokenUser.email;
  if (!user) return res.sendStatus(404);

  return res.json(data);
});

router.patch('/:character', authorize, async (req, res) => {
  console.log('in patch');

  const username = req?.params?.character;
  const newUsername = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  if (!newUsername) return res.sendStatus(400);
  const user = await getUserFromUsername(username);
  // Mettre à jour l'email de l'utilisateur dans la base de données
  const updatedUser = await updateUserInfo(user.id, newUsername);
  // Vérifier si la mise à jour a réussi
  if (updatedUser) {
    return res.json(updatedUser);
  }
});

module.exports = router;
