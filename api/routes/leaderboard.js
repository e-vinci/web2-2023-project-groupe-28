const express = require('express');

const { victory, defeat, bestScore } = require('../models/leaderboard');

const router = express.Router();

router.post('/victory', async (req, res) => {
  const user = req?.body?.user?.length !== 0 ? req.body.user : undefined;

  if (!user) return res.sendStatus(400); // 400 Bad Request

  const respond = await victory(user);

  return res.json(respond);
});

router.post('/defeat', async (req, res) => {
  const user = req?.body?.user?.length !== 0 ? req.body.user : undefined;

  if (!user) return res.sendStatus(400); // 400 Bad Request

  const respond = await defeat(user);

  return res.json(respond);
});

router.get('/bestScore', async (req, res) => {
    const respond = await bestScore();

    if(!respond) return res.sendStatus(400); // 400 Bad Request

    return res.json(respond);
});

module.exports = router;
