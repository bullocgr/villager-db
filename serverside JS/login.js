module.exports = function(){
    var express = require('express');
    var router = express.Router();  



    function getAccount(req, res, mysql, context){
      var query = "SELECT id, username FROM player WHERE password = ? AND username = ?";
      var inserts = [req.body.fpassword, req.body.fusername]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.redirect('/login');
                res.end();
            }
            else if (results[0] && results[0].password == req.fpassword){
            context.account = results;
                    var accountSuccess = {
          id: results[0].id,
          
        }
          res.redirect('/island/' + results[0].id);

             
            }
            else{
                     res.write(JSON.stringify(error));
                     res.end();
            }

        });

    }
    
    // router.post('/Addvill', function(req, res){
    //     var mysql = req.app.get('mysql');
    //     var sql = "INSERT INTO villager (image, name, personality, animal) VALUES (?,?,?,?)";
    //     var inserts = [req.body.fimage, req.body.fname, req.body.fpersonality, req.body.fanimal];
    //     console.log(inserts);
    //     sql = mysql.pool.query(sql,inserts,function(error, results, fields){
    //         if(error){
    //             console.log(JSON.stringify(error))
    //             res.write(JSON.stringify(error));
    //             res.end();
    //         }else{
    //             res.redirect('/villagers');
    //         }
    //     });
    // });

    
    router.post('/', function(req, res){
    var mysql = req.app.get('mysql');
    var context = {};
    getAccount(req, res, mysql, context);
    });

     return router;
     }();



