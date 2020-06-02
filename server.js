var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = 3001;

// var peopleData = require('./peopleData');
// console.log("== peopleData", peopleData);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.render('layouts/main')
});

app.get('/island', function(req, res) {
    res.render('island')
});

app.get('/fruitFlowers', function(req, res) {
    res.render('fruitFlowers')
});

app.get('/homepage', function(req, res) {
    res.render('homepage')
});

app.get('/login', function(req, res) {
    res.render('login')
});

app.get('/villagers', function(req, res) {
    res.render('villagers')
});





app.use('/island', express.static(__dirname + 'island' ));

app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server listening on port", port);
});