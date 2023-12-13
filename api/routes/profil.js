const express = require('express');

const router = express.Router();

const { updateUserInfo } = require('../models/profils');
const { getCurrentUser } = require('../models/users');

router.get('/', (req, res) => {
  const user = getCurrentUser();
  if (!user) return res.sendStatus(404);
  return res.json(user);
});

router.patch('/:id', async (req, res) => {
  console.log('in patch');
  
  const newUsername = req?.body?.username;
  if (!newUsername) return res.sendStatus(400);

  // Mettre à jour l'email de l'utilisateur dans la base de données
  const updatedUser = await updateUserInfo(req.params.id, newUsername);
  // Vérifier si la mise à jour a réussi
  if (updatedUser) {
    return res.json(updatedUser);
  }
});

module.exports = router;