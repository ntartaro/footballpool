const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Pick = new Schema ({
    username: String,
    gameOneChoice: Number,
    gameTwoChoice: Number,
    gameThreeChoice: Number,
    gameFourChoice: Number,
    gameFiveChoice: Number,
    gameSixChoice: Number,
    gameSevenChoice: Number,
    gameEightChoice: Number,
    gameNineChoice: Number,
    gameTenChoice: Number,
    gameElevenChoice: Number,
    gameTwelveChoice: Number,
    gameThirteenChoice: Number,
    gameFourteenChoice: Number,
    gameFifteenChoice: Number,
    tiebreaker: Number
})

module.exports = mongoose.model('Pick', Pick);