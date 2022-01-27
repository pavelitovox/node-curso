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
app.set('views', path.join(__dirname, 'views')); //app.set es una variable constante cada vez que se llame-
//-a var express = require('express')arriba ,ejemplo app.set('nombre', peter); es-
//- nombre=peter , lo mismo y se manda a llamar con app.get('nombre'). 
//video de este punto de otro lado aqui  https://youtu.be/sh-NanMOh1Q?t=1076


/* El middleware de manejo de errores siempre utiliza cuatro argumentos. Debe proporcionar 
cuatro argumentos para identificarlo como una función de middleware de manejo de errores.
 Aunque no necesite utilizar el objeto next, debe especificarlo para mantener la firma.
  De lo contrario, el objeto next se interpretará como middleware normal y no podrá manejar errores.

  middleware de manejo de errores de la misma forma que otras funciones de middleware, excepto
   con cuatro argumentos en lugar de tres, específicamente con la firma (err, req, res, next): */




console.log("para probar el app.js, usar para investigar, se ejecuta al inicio de todo, ubicalo en app.js");
console.log(path.join(__dirname, 'views'));
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

 app.use('/probando', require('./pruebas/prueba')); // esta al parecer al usra use , pide una ruta valida como route */
//app.get('/probando', require('./pruebas/prueba'));

/* app.get('/probando', function(req, res, next) { si funciona esta
 
    res.render('pro');
  }); */

  app.use('/middleware', require('./mid-peter/mid')); //creando otro propio para colocar texto sobre middleware

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
