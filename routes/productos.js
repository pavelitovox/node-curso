var express = require('express');
var router = express.Router();
var db= require('../conexion/conexion')




//router.get('/productos', function(req, res, next) { se cambia /productos por "/",
// porque se asume que al ya estar en esta pagina la ruta "/" = "/productos"
//video exacto  https://youtu.be/eKMDYkSqUKc?t=3453
router.get('/', function(req, res, next) {

  db.query("SELECT * FROM tblproductos", function(err,resultados){
  
    console.log(resultados);

    res.render('productos', { title: 'Nuestros Productos',Libros: resultados }); 
}

);  

   /* res.render('productos', { title: 'Nuestros Productos' }); */
  // res.send ("aqui productosa");
  });

module.exports = router;