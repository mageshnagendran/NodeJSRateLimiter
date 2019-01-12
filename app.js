var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');

//const buildingProviders = require('./routes/building-providers');

const homeController = require('./routes/home-controller');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Ocp-Apim-Subscription-Key');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/', homeController);

module.exports = app;
