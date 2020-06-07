module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getVillagers(res, mysql, context, complete){
        mysql.pool.query("SELECT name, image, personality, animal FROM villager", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
                return router;
            }
            context.villagers  = results;
            complete();
        });
    }
    
    function deleteVillager(name){
      console.log(name);
    } 
 
        // router.post('/api/villagers/:name', (req, res) => {
        //     con.query(`DELETE FROM villager WHERE name = ?;`, name, function (err, result) { 
        //         if (err) throw err;
        //     });
        // });

  // router.delete('/villagers/:name', function(req,res, next){
  //   var mysql = req.app.get('mysql');
  //   var sql = "DELETE FROM villager WHERE name = ?";
  //   var inserts = [req.params.name];
  //   sql = mysql.pool.query(sql, inserts, function(error, results, fields){
  //     if (error){
  //       res.write(JSON.stringify(error));
  //       res.status(400);
  //       res.end();
  //     }else{
  //       res.status(202).end();
  //     }
  //   })
  // });

    router.get('/', function(req, res) {
      var callbackCount = 0;
      var context = {};
      //context.jsscripts = ["addvillager.js"];
      var mysql = req.app.get('mysql');
      getVillagers(res, mysql, context, complete);
      function complete() {
        callbackCount++;
        if(callbackCount >=1){
          res.render('villagers', context);
        }
      }



    });





     return router;
     }();
