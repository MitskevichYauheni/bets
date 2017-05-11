var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BetSchema = new Schema({
  nameBet: String,
  vendor: String,
  amount: {
    type: Number,
    default: 0
  },
  amountMin: Number,
  amountMax: Number,
  odds: {
    type: Number,
    default: 2
  },
  enemy: String,
  comment: String
});

module.exports = mongoose.model('Bet', BetSchema);
