const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const gameRouter = require('./routes/gameRoute');

app.use(cors())


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use(express.json());

app.use('/api/v1/games', gameRouter);

  module.exports = app;