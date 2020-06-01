module.exports = function(){
    var express = require('express');
    var router = express.Router();  

    function getAccount(req, res, mysql, context, complete){
      var query = "SELECT UsernameFROM players WHERE password = ‘$hashedInputPassword’";
      console.log(req.params)
      var inserts = [req.params.psw]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.account = results;
            complete();
        });
    }

     return router;
     }();


