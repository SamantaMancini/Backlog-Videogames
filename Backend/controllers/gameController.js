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


// Get all games
exports.getGames = async (req, res, next) => {
  try {
    let query = Game.find({});

    const games = await query;

    res.status(200).json({
      status: 'success',
      results: games.length,
      data: {
        games,
      },
    });
  } catch (error) {
    next(error);
  }
};