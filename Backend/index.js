const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const gameRouter = require('./routes/gameRoute');
const AppError = require('./utils/appError')

// Set security cors 
app.use(cors())
//Set security HTTP headers
app.use(helmet());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize())
// Data sanitazation agains XSS
app.use(xss())
// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ['name', 'description', 'genre'],
  }),
);
// Development loggin
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

// Body parser, reading data from the body into req.body
app.use(express.json());

// Routes
app.use('/api/v1/games', gameRouter);

// Set a route for all non-matching routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find${req.originalUrl} on this server`, 404));
});

module.exports = app;