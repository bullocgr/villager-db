module.exports = function(){
    var express = require('express');
    var router = express.Router();
    var global_var = "";

 
    function getVillagers(res, mysql, context, complete){
        mysql.pool.query("SELECT name,id FROM villager", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
                return router;
            }
            context.fvillager  = results;
            complete();
        });
    }


    function getPlayerDetails(req, res, mysql, context, complete){
      var query = "SELECT island_name AS islandname FROM player WHERE id = ?";
      var inserts = [req.params.id];
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.islandDetails = results;
            complete();
        });
    }

    function getIslandFruits(req, res, mysql, context, complete){
      var query = "SELECT fruit.name AS fruit_name, fruit.price AS price, fruit.id as fruit_id FROM fruit INNER JOIN grows ON grows.player_id = ? AND grows.fruit_id = fruit.id";
      var inserts = [req.params.id];
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.fruit = results;
            complete();
        });
    }


    function getFlowersIsland(req, res, mysql, context, complete){
    var query = "SELECT flower.name AS flower_name, flower.color AS color, flower.id AS flower_id FROM flower INNER JOIN has ON has.player_id = ? AND has.flower_id = flower.id";
      var inserts = [req.params.id];

      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }

            context.flower = results;
            complete();
        });
    }

    function getislandVillagers(req, res, mysql, context, complete){
     var query = "SELECT villager_name AS name, join_date, rating, favorite, vid FROM member WHERE player_id = ?"
      var inserts = [req.params.id];

      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.villager = results;
            complete();
        });
    }



      router.get('/:id', function(req, res){
        var callbackCount = 0;
        context = {};
        context.jsscripts = ["deleteIslandVillager.js", "deleteIslandfruit.js", "deleteIslandFlower.js"];
        var mysql = req.app.get('mysql');
        global_var = req.params.id;


      //  getislandDetails(req, res, mysql, context, complete);
        getIslandFruits(req, res, mysql, context, complete);
        getFlowersIsland(req, res, mysql, context, complete);
        getislandVillagers(req, res, mysql, context, complete);
        getVillagers(res, mysql, context, complete);
        function complete(){
             callbackCount++;
             if(callbackCount >= 4){
                 res.render('island', context);


             }
}

            });

  router.delete('/dlV/:vid', function(req,res, next){
    var mysql = req.app.get('mysql');
    var sql = "DELETE FROM member WHERE vid = ? AND player_id = ?";
    var inserts = [req.params.vid, global_var];
    console.log(inserts);
    sql = mysql.pool.query(sql, inserts, function(error, results, fields){
      if (error){
        res.write(JSON.stringify(error));
        res.status(404);
        res.end();
      }else{
        res.status(202).end();
      }
    })
  });

    router.delete('/dlFL/:flid', function(req,res, next){
    var mysql = req.app.get('mysql');
    var sql = "DELETE FROM has WHERE flower_id = ? AND player_id = ?";
    var inserts = [req.params.flid, global_var];
    console.log(inserts);
    sql = mysql.pool.query(sql, inserts, function(error, results, fields){
      if (error){
        res.write(JSON.stringify(error));
        res.status(404);
        res.end();
      }else{
        res.status(202).end();
      }
    })
  });

    router.delete('/dlFR/:frid', function(req,res, next){
    var mysql = req.app.get('mysql');
    var sql = "DELETE FROM grows WHERE fruit_id = ? AND player_id = ?";
    var inserts = [req.params.frid, global_var];
    console.log(inserts);
    sql = mysql.pool.query(sql, inserts, function(error, results, fields){
      if (error){
        res.write(JSON.stringify(error));
        res.status(404);
        res.end();
      }else{
        res.status(202).end();
      }
    })
  });

function getflowerID(inserts, mysql, callback)

{
    mysql.pool.query('SELECT id FROM flower WHERE color = ? AND name = ?', inserts, function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null,result[0].id);

    });

}

function getFruitID(inserts, mysql, callback)

{
    mysql.pool.query('SELECT id AS fruit_id FROM fruit WHERE name = ? ', inserts, function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null, result[0].fruit_id);

    });

}

function getVillagerID(inserts, mysql, callback)

{
    mysql.pool.query('SELECT name AS name FROM villager WHERE id = ? ', inserts, function(err, result)
    {
        if (err) 
            callback(err,null);
        else
            callback(null, result[0].name);

    });

}


    // router.post('/Addvill/', function(req, res){
    //     var mysql = req.app.get('mysql');
    //     var sql = "INSERT INTO member (image, name, personality, animal) VALUES (?,?,?,?)";
    //     var inserts = [req.body.fimage, req.body.fname, req.body.fpersonality, req.body.fanimal];
    //     console.log(inserts);
    //     sql = mysql.pool.query(sql,inserts,function(error, results, fields){
    //         if(error){
    //             console.log(JSON.stringify(error))
    //             res.write(JSON.stringify(error));
    //             res.end();
    //         }else{
    //            callback(null, rows[0].id_user);
    //         }
    //     });
    // });

    function getPlayerDetails(inserts, mysql, callback){
      var query = "SELECT id AS flower_id FROM flower WHERE name = ? AND color = ?";
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            else{
                callback(null, rows[0].flower_id);
        }
               
            
        });
    }





        router.post('/addFlower', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO has (flower_id, player_id) VALUES (?,?)";
        var inserts = [req.body.fflower_color, req.body.fflower_name];
        
        getflowerID(inserts, mysql, function(err,data){
        if (err) {
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();        
        } else {            
            // code to execute on data retrieval
            inserts = [data, global_var];
    sql = mysql.pool.query(sql, inserts, function(error, results, fields){
      if (error){
        res.write(JSON.stringify(error));
        res.status(404);
        res.end();
      }else{
        res.redirect('/island/' + global_var);
      }
    })

        }    

});
    });



        router.post('/addFruit', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO grows (native, player_id , fruit_id) VALUES (?,?,?)";
        var inserts = [req.body.ffruit_name];
        console.log(inserts);

        getFruitID(inserts, mysql, function(err,data){
        if (err) {
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();        
        } else {            
            // code to execute on data retrieval
            inserts = [req.body.fnative, global_var, data];
    sql = mysql.pool.query(sql, inserts, function(error, results, fields){
      if (error){
        res.write(JSON.stringify(error));
        res.status(404);
        res.end();
      }else{
        res.redirect('/island/' + global_var);
      }
    })

        }    

});
    });

        router.post('/addVill', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO member (villager_name, player_id , vid, favorite, rating, join_date) VALUES (?,?,?,?,?, ?)";
        var inserts = [req.body.fvillager];
        var date = Date();
        console.log(inserts);

        getVillagerID(inserts, mysql, function(err,data){
        if (err) {
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();        
        } else {            
            // code to execute on data retrieval
            inserts = [data, global_var, req.body.fvillager, req.body.ffavorite, req.body.frating, date];
    sql = mysql.pool.query(sql, inserts, function(error, results, fields){
      if (error){
        res.write(JSON.stringify(error));
        res.status(404);
        res.end();
      }else{
        res.redirect('/island/' + global_var);
      }
    })

        }    

});
    });


        router.post('/updateVill', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE member SET favorite = ?, rating = ? WHERE villager_name = ? AND player_id = ?";

       
            // code to execute on data retrieval
            inserts = [req.body.ffavoriteVill, req.body.fratingVill, req.body.ffvillager, global_var];
    sql = mysql.pool.query(sql, inserts, function(error, results, fields){
      if (error){
        res.write(JSON.stringify(error));
        res.status(404);
        res.end();
      }else{
        res.redirect('/island/' + global_var);
      }
    })

          

});
  

        return router;
        }();

