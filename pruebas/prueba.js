var express = require('express');
var router = express.Router();

//router.get('/productos', function(req, res, next) { se cambia /productos por "/",
// porque se asume que al ya estar en esta pagina la ruta "/" = "/productos"
//video exacto  https://youtu.be/eKMDYkSqUKc?t=3453
router.get('/', function(req, res, next) {
  
   res.render('pro', { title: 'aqui estoy en carpeta pruebas' });
  // res.send ("aqui productosa");
  });

module.exports = router;