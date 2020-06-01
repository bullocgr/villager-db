module.exports = function(){
    var express = require('express');
    var router = express.Router();  

    function getFlower(res, mysql, context, complete){
        mysql.pool.query("SELECT name,color FROM Flowers", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.Flower  = results;
            complete();
        });
    }

    function getFruits(res, mysql, context, complete){
        mysql.pool.query("SELECT name, price FROM Fruit", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.fruits  = results;
            complete();
        });
    }

     return router;
     }();