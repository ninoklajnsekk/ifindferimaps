var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var prostoriRouter = require('./routes/prostori');
var zaposleniRouter = require('./routes/zaposleni');
var mapsRouter = require('./routes/maps');
//var homeTpl = Handlebars.compile($("#home-tpl").html());
//var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

var serverConfig = require('./config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add headers
app.use(function(req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,origin');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  //res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/prostori', prostoriRouter);
app.use('/zaposleni', zaposleniRouter);
app.use('/maps', mapsRouter);

mongoose.Promise = Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(serverConfig.mongoURL, {
    useNewUrlParser: true
  }, (error) => {
    if (error) {
      console.error('MongoDB error!');
      throw error;
    }
  });
}

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`running on port: ${serverConfig.port}`);
  }
});

module.exports = app;