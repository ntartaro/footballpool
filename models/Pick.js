const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Pick = new Schema ({
    username: String,
    gameOneChoice: Int,
    gameTwoChoice: Int,
    gameThreeChoice: Int,
    gameFourChoice: Int,
    gameFiveChoice: Int,
    gameSixChoice: Int,
    gameSevenChoice: Int,
    gameEightChoice: Int,
    gameNineChoice: Int,
    gameTenChoice: Int,
    gameElevenChoice: Int,
    gameTwelveChoice: Int,
    gameThirteenChoice: Int,
    gameFourteenChoice: Int,
    gameFifteenChoice: Int,
    tiebreaker: Int
})

module.exports = mongoose.model('Pick', Pick);