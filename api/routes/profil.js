const express = require('express');

const router = express.Router();

const { updateUserInfo } = require('../models/profils');
const { getCurrentUser } = require('../models/users');

router.get('/', (req, res) => {
  const user = getCurrentUser();
  if (!user) return res.sendStatus(404);
  return res.json(user);
});

/* patch users email update */
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