module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getVillagers(res, mysql, context, complete){
        mysql.pool.query("SELECT name, image, personality, animal FROM villager", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.villagers  = results;
            complete();
        });
    }

     return router;
     }();