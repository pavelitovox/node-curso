var express = require('express');
const app = require('../app');
var router = express.Router();


function saludar(){

    console.log('hola suscriptor desde funcion');
}

console.log ("suscribete al canal");

//saludar();

// ojo cuando se va a una pagina web que se exporta con module.export=route y se llama -
//- con middleware app.use() , si o si te pide una router.get('/ruta', function(req, res, next){} -
//- en la pagina de laruta que esta recibiendo, si no te dice pagina no encontrada por web y -
//- por consola te muestra 404.

/* router.console("desde mito") no funciona esto*/

module.exports= router; //descomentar si se quiere  llamar como pagina con app.use() en app.js
module.exports.saludar = saludar();