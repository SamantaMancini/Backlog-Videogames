const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router
    .route('/')
    .get(gameController.getGames)
    .post(gameController.addGame)

router
    .route('/:id')
    .post(gameController.updateGame)
    .delete(gameController.deleteGame)
    
module.exports = router;