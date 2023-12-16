/* eslint-disable consistent-return */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const { updateUserInfo, getDataGame } = require('../models/profils');
const { getUserFromUsername } = require('../models/users');

router.get('/:character', async (req, res) => {
  const user = await getDataGame(req.params.character);
  if (!user) return res.sendStatus(404);

  return res.json(user);
});

router.get('/email/:character', async (req, res) => {
  const user = await getUserFromUsername(req.params.character);
  if (!user) return res.sendStatus(404);
  console.log(user.email);
  return res.json(user.email);
});

router.patch('/:character', async (req, res) => {
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
