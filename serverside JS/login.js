module.exports = function(){
    var express = require('express');
    var router = express.Router();  

    
    router.post('/AddAccount', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO player VALUES (?, ?, ?, (SELECT name FROM island WHERE name = ?));";
        var inserts = [req.body.fyourname, req.body.fusername, req.body.fpassword, req.body.fislandName];
        console.log(inserts);
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/login');
            }
        });
    });

    router.post('/AddIsland', function(req, res){
      var mysql = req.app.get('mysql');
      var sql = "INSERT INTO island (name, location, start_date) VALUES (?,?,?)";
      var inserts = [req.body.fislandName, req.body.flocation, req.body.fstartDate];
      console.log(inserts);
      sql = mysql.pool.query(sql,inserts,function(error, results, fields){
          if(error){
              console.log(JSON.stringify(error))
              res.write(JSON.stringify(error));
              res.end();
          }else{
              res.redirect('/login');
          }
      });
  });

  function updatePlayerID(req, res, mysql, context) {

  }


     return router;
     }();



