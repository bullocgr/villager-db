module.exports = function(){
    var express = require('express');
    var router = express.Router();
    var username = "";
    var password = "";

    function getPlayerID(inserts, mysql, callback){
      mysql.pool.query('SELECT id AS random FROM player WHERE username = ? AND password = ?', inserts, function(err, result) {
        if (err) {
          callback(err, null);
        } else { 
          callback(null, result[0].random); 
        }
      });
    }

      function createIsland(req, res) {
        var mysql = req.app.get('mysql');
        var inserts = [username, password];
        console.log(inserts);

        getPlayerID(inserts, mysql, function(err, content) {
        if (err) {
            console.log(err);
            
        } else {
            inserts = [content, req.body.fislandName, req.body.flocation, req.body.start_date];
             var mysql = req.app.get('mysql');
            var sql = "INSERT INTO island (player_id, name, location, start_date) VALUES (?,?,?,?)";
             console.log(inserts);
            sql = mysql.pool.query(sql,inserts,function(error, results, fields){
                if(error){
                    res.end();
                }else{
                    res.redirect('/login/' + req.params.id);
                }

    });
}});
}
    
    router.post('/AddAccount', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO player VALUES (null, ?, ?, ?);";
        var inserts = [req.body.fyourname, req.body.fusername, req.body.fpassword];
        username = req.body.fusername;
        password = req.body.fpassword;
        console.log(inserts);
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){

            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                createIsland(req, res);
                res.redirect('/login');
            }
        });
    });



      





      // }

  //   router.post('/AddIsland', function(req, res){
  //     var mysql = req.app.get('mysql');
  //     var sql = "INSERT INTO island (name, location, start_date) VALUES (?,?,?)";
  //     var inserts = [req.body.fislandName, req.body.flocation, req.body.fstartDate];
  //     console.log(inserts);
  //     sql = mysql.pool.query(sql,inserts,function(error, results, fields){
  //         if(error){
  //             console.log(JSON.stringify(error))
  //             res.write(JSON.stringify(error));
  //             res.end();
  //         }else{
  //             res.redirect('/login');
  //         }
  //     });
  // });

  // function updatePlayerID(req, res, mysql, context) {

  // }




     return router;
     }();



