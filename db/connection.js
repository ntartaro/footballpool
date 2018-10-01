const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/footballpool');

module.exports = mongoose;