const Game = require('../models/gamesModel');
const AppError = require('../utils/appError');
const APIFeauters = require('../utils/apiFeautures')

// Add a new Game
exports.addGame = async (req, res, next) => {
    try {
      const games = await Game.create(req.body);
  
      res.status(201).json({
        status: 'success',
        games: games,
      });
    } catch (error) {
      next(error);
    }
  };


// Get all games
exports.getGames = async (req, res, next) => {
  try {

    const features = new APIFeauters(Game.find(), req.query)
    .filter()
    const games = await features.query;
    
    res.status(200).json({
      status: 'success',
      results: games.length,
      games: games
    });
  } catch (error) {
    next(error);
  }
};


// Update an existing user
exports.updateGame = async (req, res, next) => {
  try {
    const games = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidatos: true,
    });
    if (!games) {
      return next(new AppError('No user found with that ID', 404));
    }
    res.status(201).json({
      status: 'success',
      data: games,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a game by ID
exports.deleteGame = async (req, res, next) => {
  try {
    const games = await Game.findByIdAndDelete(req.params.id);
    if (!games) {
      return next(new AppError('No game found', 404));
    }
    res.status(204).json({
      status: 'success',
      games: null,
    });
  } catch (error) {
    next(error);
  }
};