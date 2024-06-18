const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router
    .route('/')
    .post(gameController.addGame)


module.exports = router;