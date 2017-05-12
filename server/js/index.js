var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');
var Bet = require('./models/bet');


mongoose.connect('mongodb://localhost:27017/bets')

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var activeUser = 'test';

app.post('/', function(req, res){
  console.log("User " + req.body.name + '\n');
  //console.log("pass " + req.body.password + '\n');
  User.findOne({ name: req.body.name }, function(err, user){
    if(user){
      if(user.password == req.body.password){
          activeUser = req.body.name;
          console.log('/ ' + activeUser);
          res.status(200).json({password: true});
      } else{
          res.status(200).json({password: false});
      }
    } else {
      User.create({ name: req.body.name, password: req.body.password }, function(err, user) {
        if(err){
          console.log(err);
        } else {
          activeUser = req.body.name;
          res.status(200).json({password: true});
        }
      })
    }
  })
})

//добавить баланс

app.post('/user-info', function(req, res){
  if(activeUser !== ''){
    var goLinks = 0;
    User.findOne({ name: activeUser }, function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log('user-info');
        res.status(200).json({balance: user.balance, amountBets: user.bets.length})
      }
    })
  } else {
    res.status(200).json({user: activeUser});
  }
})

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
