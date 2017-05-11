var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');
var Bet = require('./models/bet');


mongoose.connect('mongodb://localhost:27017/bets')

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/bet', function(req, res){

  Bet.create({ nameBet: req.body.nameBet, amount: req.body.amount, amountMin: req.body.amountMin,
    amountMax: req.body.amountMax, odds: req.body.odds, enemy: req.body.enemy, comment: req.body.comment
    }, function(err, bet) {
    if(err){
      console.log(err);
    } else {
      res.send(bet);
    }
  })
})

app.get('/allbets', function(req, res){
  Bet.find({}, function(err, users) {
    if(err){
      console.log(err);
    } else {
      res.send(users);
      res.end();
    }
  })
})

app.get('/', function(req, res){
  res.send('Hello in browser')
})

app.listen(3000, function() {
  console.log('Server is up!');
});
