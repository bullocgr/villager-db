var express = require('express');
var app = express();

var logger = require('./logger');

app.use(logger);

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/villagers/villagers.html');
});

app.listen(3000, function () {
  console.log("== Server is listening on port 3000");
});