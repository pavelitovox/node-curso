var express = require('express');
const app = require('../app');
var router = express.Router();

//router.get('/productos', function(req, res, next) { se cambia /productos por "/",
// porque se asume que al ya estar en esta pagina la ruta "/" = "/productos"
//video exacto  https://youtu.be/eKMDYkSqUKc?t=3453
router.get('/', function(req, res, next) {
  
   res.render('middle', { title: 'explicando middleware' });
  // res.send ("aqui productosa");
  });

module.exports = router;

//escribo lo hablado en video  https://youtu.be/bab8b2Ix4K0?t=244 ,entonces , una vez teniendo-
//- las rutas configuradas  vamos a tener que  exportarlo para usarlo en app.js por eso usamos
//- module.exports=router , y entonces como decia una vez exportado se llaman a nuestras
//- rutas en app.js con el middleware use app.use('/probando', require('./pruebas/prueba'));





/* El middleware de manejo de errores siempre utiliza cuatro argumentos. Debe proporcionar 
cuatro argumentos para identificarlo como una función de middleware de manejo de errores.
 Aunque no necesite utilizar el objeto next, debe especificarlo para mantener la firma.
  De lo contrario, el objeto next se interpretará como middleware normal y no podrá manejar errores.

  middleware de manejo de errores de la misma forma que otras funciones de middleware, excepto
   con cuatro argumentos en lugar de tres, específicamente con la firma (err, req, res, next): */


/*    Middleware de nivel de direccionador

   El middleware de nivel de direccionador funciona de la misma manera que el middleware de nivel 
   de aplicación, excepto que está enlazado a una instancia de express.Router().



   Middleware de nivel de aplicación

Enlace el middleware de nivel de aplicación a una instancia del objeto de aplicación utilizando 
las funciones app.use() y app.METHOD(), donde METHOD es el método HTTP de la solicitud que maneja 
la función de middleware (por ejemplo, GET, PUT o POST) en minúsculas.

Este ejemplo muestra una función de middleware sin ninguna vía de acceso de montaje. 
La función se ejecuta cada vez que la aplicación recibe una solicitud.

var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


Este ejemplo muestra una función de middleware montada en la vía de acceso /user/:id. 
La función se ejecuta para cualquier tipo de solicitud HTTP en la vía de acceso /user/:id.

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
}); */