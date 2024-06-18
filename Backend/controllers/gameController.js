const Game = require('../models/gamesModel');


// Add a new Game
exports.addGame = async (req, res, next) => {
    try {
      const game = await Game.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: game,
      });
    } catch (error) {
      next(error);
    }
  };