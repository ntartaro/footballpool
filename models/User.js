const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const User = new Schema ({
    username: String,
    password: String,
    favoriteTeam: String
})

module.exports = mongoose.model('User', User);

/* 
mascot for each team in ascii
*/