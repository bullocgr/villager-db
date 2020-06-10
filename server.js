var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser')

var bodyParser = require('body-parser');
var app = express();
var mysql = require('./dbcon.js');
var port = 3002;

// var peopleData = require('./peopleData');
// console.log("== peopleData", peopleData);


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'handlebars');
app.set('mysql', mysql);
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.render('homepage')
});


app.use('/island', require('./serverside JS/island.js'));
//app.get('/island', function(req, res) {
//    res.render('island')
//});

app.use('/fruitFlowers', require('./serverside JS/fruitFlowers.js'));
//app.get('/fruitFlowers', function(req, res) {
//    res.render('fruitFlowers')
//});

app.get('/homepage', function(req, res) {
    res.render('homepage')
});

app.get('/', function(req, res) {
    res.render('homepage')
});

app.get('/login', function(req, res) {
    res.render('login')
});

app.use('/island', require('./serverside JS/island.js'));
app.use('/login', require('./serverside JS/login.js'));

app.use('/villagers', require('./serverside JS/villager.js'));
//app.get('/villagers', function(req, res) {
//    res.render('villagers')
//});
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(req,res){
  res.status(202);
  res.render('202');
});



// app.use('/island', express.static(__dirname + 'island' ));



//app.use('/island', express.static(__dirname + 'island' ));

app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server listening on port", port);
});


