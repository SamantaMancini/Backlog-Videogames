const Game = require('../models/gamesModel');
const AppError = require('../utils/appError');


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
    const excludedFields = ['description', 'state']
    const queryObj = {...req.query}

    excludedFields.forEach((el) => {
      delete queryObj[el]
    })
    let query = Game.find(queryObj)
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


// Update an existing game
exports.updateGame = async (req, res, next) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidatos: true,
    });
    if (!game) {
      return next(new AppError('No game found with that ID', 404));
    }
    res.status(201).json({
      status: 'succes',
      data: game,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a game by ID
exports.deleteGame = async (req, res, next) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return next(new AppError('No game found', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};