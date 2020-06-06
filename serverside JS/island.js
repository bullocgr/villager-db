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
            context.villager  = results;
            complete();
        });
    }

    function getislandDetails(res, mysql, context, complete){
        mysql.pool.query("SELECT island.name , island.location, island.start_date FROM island", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.islandDetails  = results;
            complete();
        });
    }

    function getIslandFruits(req, res, mysql, context, complete){
      var query = "SELECT player.player_name AS name, grows.fruit_name AS fruit_name FROM player INNER JOIN grows ON player.island_name=grows.island_name";
      console.log(req.params)
      var inserts = [req.params.island_name]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.fruits = results;
            complete();
        });
    }


    function getFlowersIsland(req, res, mysql, context, complete){
      var query = "SELECT flower_name, flower_color FROM has WHERE island_name = ?";
      console.log(req.params)
      var inserts = [req.params.island_name]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.flowers = results;
            complete();
        });
    }

    function getislandVillagers(req, res, mysql, context, complete){
      var query = "SELECT island.name, member.villager_name, member.favorite FROM island INNER JOIN member ON ? = member.island_name";
      console.log(req.params)
      var inserts = [req.params.island_name]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.IslandVillagers = results;
            complete();
        });
    }


//     /*Display all people. Requires web based javascript to delete users with AJAX*/

       router.get('/:island_name', function(req, res){
         var callbackCount = 0;
         var context = {};
         context.jsscripts = [];
         var mysql = req.app.get('mysql');
         getislandDetails(res, mysql, context, complete);
         getIslandFruits(req, res, mysql, context, complete);
         getFlowersIsland(req, res, mysql, context, complete);
         getislandVillagers(req, res, mysql, context, complete);
//         getPerson(res, mysql, context, complete);
         getVillagers(res, mysql, context, complete);
         function complete(){
             callbackCount++;
             if(callbackCount >= 5){
                 res.render('island', context);
             }

         }
     });


     return router;
     }();
