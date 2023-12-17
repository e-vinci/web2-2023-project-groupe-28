const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://boxvers145.github.io'],
};

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');
const leaderboardRouter = require('./routes/leaderboard');
const profilRouter = require('./routes/profil');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/auths', authsRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/profil', profilRouter);

module.exports = app;
