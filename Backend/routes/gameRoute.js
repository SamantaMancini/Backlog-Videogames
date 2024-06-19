const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router
    .route('/')
    .get(gameController.getGames)
    .post(gameController.addGame)


module.exports = router;