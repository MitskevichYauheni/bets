var mongoose = require('mongoose');
var Bet = require('./bet');

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  name: String,
  password: String,
  bets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bet' }],
  balance: Number
})

module.exports = mongoose.model('User', userSchema);
