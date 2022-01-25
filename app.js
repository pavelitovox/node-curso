var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // ver por navegador index= /
var usersRouter = require('./routes/users'); //ver por navegador /users
var productosRouter = require('./routes/productos'); //ver por navegador /productos

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter); // si se elige este  va a linea 7
app.use('/', require('./routes/index')); // seria lo mismo que linea 23 y no se usaria linea 7
app.use('/users', usersRouter);// va a linea 8
app.use('/productos', productosRouter);// va a linea 9 , creado por video, min 55:33
// https://youtu.be/eKMDYkSqUKc?t=3333

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
