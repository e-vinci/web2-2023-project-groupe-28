const express = require('express');

const router = express.Router();

const { updateUserInfo } = require('../models/profils');
const { getCurrentUser } = require('../models/users');

/* GET users update info. */
router.patch('/:email', (req, res) => {
  console.log('in patch');
  const user = getCurrentUser();
  if (!user) return res.sendStatus(404);
  const data = {
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
  };
  const updatedUser = updateUserInfo(user, data);
  return res.json(updatedUser);
});

module.exports = router;