var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // ver por navegador index= /
var usersRouter = require('./routes/users'); //ver por navegador /users
var productosRouter = require('./routes/productos'); //ver por navegador /productos

var app = express();

//**************** nuevo del video https://youtu.be/QaCtLPBol3E?t=53 sol en nueva-rama , despues seguir con rama3

/* const mi = require('./mito');

console.log(mi.suscribete); */

app.use('/mito', require('./mito/mito')); //descomentar esat linea y descomentar Route en mito.js para ver por web
// esto es necesario para web en la ruta /mito,ademas se debe  exportar desde -
// la pagina mito con module.exports = route , si no  solo-
//se puede usar consola como abajo.

// ojo cuando se va a una pagina web que se exporta con module.export=route y se llama -
//- con middleware app.use() en app.js , si o si te pide una router.get('/ruta', function(req, res, next){} -
//- en la pagina  ruta que esta recibiendo, si no te dice pagina no encontrada por web y por consola te muestra 404.

var mi = require('./mito/mito'); //ojo que no fue necesario  module.exports =router; porque no use app.use
// si uso para la ruta app.use,  ahi  si tengo que exportar con router desde mito.js.
mi.saludar;
//en mito.js cree una funcion , aplique video min exacto https://youtu.be/QaCtLPBol3E?t=157
// ojo que podemos mostrar solo en consola, porque si es por pagina necesitamos-
//- direccionamiento Router y app.use() para llamar a las rutas que se exportaron con module.exports= router;

//******************************************************************* */
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
