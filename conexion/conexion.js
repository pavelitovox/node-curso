var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    port : 8889 ,   //agregue port: no est en original
    user     : 'root',
    password : 'root',
    database: 'ventas'
  });
  
  connection.connect(
  
   (err)=>{
            if(!err) { console.log ("conexion establecida");}
            else  { console.log("conexion fallida po peter");  }

  
      }
  
  );

module.exports=connection;

/*      connection.query("SELECT * FROM tblproductos", function(err,resultados){
  
      console.log(resultados);
  }
  
  );   */
/*   
  connection.end(); */
