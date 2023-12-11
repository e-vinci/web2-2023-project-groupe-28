const express = require('express');

const router = express.Router();

const { updateUserInfo } = require('../models/profils');
const { getUserFromEmail } = require('../models/users');

/* GET users update info. */
router.patch('/:email', (req, res) => {
  const user = getUserFromEmail(req.params.email);
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