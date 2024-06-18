const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A game must have a name.'],
        unique: true,
        trim: true,
        maxlength: [40, 'A game name must have less or equal then 30 characters'],
        minlength: [2, 'A game name must have more or equal then 2 characters']
    },
    description: {
        type: String,
        maxlength: [250, 'A game description can not have more then 250 characters'],
    },
    features: {
        type: String
    },
    genre : {
        type: String,
        required: [true, 'A game must have a genre.'],
    },
    state: {
        type: String,
        required: [true, 'A game must have a state.'],
    },
    platform: {
        type: String,
        required: [true, 'A game must have a platform.'],
    }
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game;