var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var sportsRouter = require('./routes/sports');
var sportsAPIRouter = require('./routes/api/sports');
var athletesRouter = require('./routes/athletes');
var athletesAPIRouter = require('./routes/api/athletes');
var webhooksportsRouter = require('./routes/webhook/sports');

var app = express();

const connect = require('./database/mongodb');
connect()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/sports', sportsRouter);
app.use('/athletes', athletesRouter);
app.use('/api/athletes', athletesAPIRouter);
app.use('/api/sports', sportsAPIRouter);
app.use('/webhook/sports', webhooksportsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
