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

    router.get('/', function(req, res) {
      var callbackCount = 0;
      var context = {};
      context.jsscripts = ["addvillager.js"];
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
