const Game = require('../models/gamesModel');
const AppError = require('../utils/appError');


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
  const { page = 1, limit = 10} = req.query

  try {
    const search = req.query.name || "";
    let filters = {}
    if (req.query.genre) {
      filters.genre = req.query.genre;
    } 
    if (req.query.platform) {
      filters.platform = req.query.platform;
    } 
    if (req.query.feautures) {
      filters.feautures = req.query.feautures;
    } 
    if (req.query.state) {
      filters.state = req.query.state;
    }
    const games = await Game.find({ $and: [{name: {$regex: search, $options: "i"} }, filters]})
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec()
    
    const count = await Game.countDocuments()
    
    res.status(200).json({
      status: 'success',
      results: games.length,
      games: games,
      totalPages: Math.ceil(count / limit),
      currentPage: page
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