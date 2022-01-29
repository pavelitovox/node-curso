var express = require('express');
const app = require('../app');
var router = express.Router();


//IMPORTANTE , como no hay router.get que apunte a pagina .ejs en views , solo se ejecuta al inicio nada mas
//esta pagina y por consola , en web marca no encontrada
//ademas se debe descomentar module.exports= router;de abajo y app.use(...)en app.js para que reciba.

function saludar(){

    console.log('hola suscriptor desde funcion');
} // se llama en app.js con: var mi = require('./mito/mito') -
//y mi.saludar;

function sumar(){
numero1=10;
numero2=30;
return(numero1 + numero2);
//pendiente traer parametros desde app.js como el video https://youtu.be/YwoUugw10xs?t=308

}

console.log ("suscribete al canal");

//saludar();



// ojo cuando se va a una pagina web que se exporta con module.export=route y se llama -
//- con middleware app.use() , si o si te pide una router.get('/ruta', function(req, res, next){} -
//- en la pagina de laruta que esta recibiendo, si no te dice pagina no encontrada por web y -
//- por consola te muestra 404.

/* router.console("desde mito") no funciona esto*/

//module.exports= router; //IMPORTANTE!
//descomentar si se quiere  llamar como pagina con app.use() en app.js

//module.exports.saludar = saludar();
module.exports.sumar = sumar();