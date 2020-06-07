module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getFlowers(res, mysql, context, complete){
        mysql.pool.query("SELECT name, color FROM flower", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.flower  = results;
            complete();
        });
    };

    function getFruits(res, mysql, context, complete){
        mysql.pool.query("SELECT name, price FROM fruit", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.fruit  = results;
            complete();
        });
    };


    router.get('/', function(req, res){
      var callbackCount = 0
      var context = {};
      context.jsscripts = ["fruitsFlowers.js"];
      var mysql = req.app.get('mysql');
      getFruits(res, mysql, context, complete);
      getFlowers(res, mysql, context, complete);
      function complete(){
         callbackCount++;
         if(callbackCount >= 2){
             res.render('fruitFlowers', context);

         }
      }
    });

//    function addFlowersToDB(res, mysql, context, complete){
//      mysql.pool.query(sql, inserts, function(error, results, fields){
//        if(error){
//              res.write(JSON.stringify(error));
//              res.end();
//          }
//          complete();
//      });


//    }

    router.post('/Fruit', function(req, res) {
      console.log("in post!")
      var mysql = req.app.get('mysql');
      var sql = "Insert into fruit values (?,?)";
      var inserts = [req.body.ffruit_name, req.body.fprice];
      sql = mysql.pool.query(sql, inserts, function(error, results, fields){
        if(error){
            console.log(JSON.stringify(error))
            res.write(JSON.stringify(error));
            res.end();
        }else{
            res.redirect('/fruitFlowers');
        }
      });
    });


    router.post('/Flowers', function(req, res) {
      console.log("in post!")
      var mysql = req.app.get('mysql');
      var sql = "Insert into flower values (?,?)";
      var inserts = [req.body.fflower_name, req.body.fflower_color];
      sql = mysql.pool.query(sql, inserts, function(error, results, fields){
        if(error){
            console.log(JSON.stringify(error))
            res.write(JSON.stringify(error));
            res.end();
        }else{
            res.redirect('/fruitFlowers');
        }
      });
    });

     return router;
     }();
