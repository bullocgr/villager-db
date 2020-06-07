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

    router.post('/login', function(req,res,next){
    var mysql = req.app.get('mysql');
    var user = {
      username: req.body.username,
      password: req.body.password
    };

    getAccount(req, res, mysql, context, complete);

  });

  router.post('/login', function(req, res, next){
    var mysql = req.app.get('mysql');
    var user = {
      island_name: req.body.island_name,
      username: req.body.username,
      password: req.body.password,
    };

     return router;
     }();


