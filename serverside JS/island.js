module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getislandDetails(res, mysql, context, complete){
        mysql.pool.query("SELECT island.name, island.location, island.start_date FROM island", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.islandDetails  = results;
            complete();
        });
    }

    function getIslandFruits(req, res, mysql, context, complete){
      var query = "SELECT player.player_name AS name, grows.fruit_name AS fruit_name, FROM player INNER JOIN grows ON player.island_name=grows.island_name";
      console.log(req.params)
      var inserts = [req.params.islandName]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.IslandFruits = results;
            complete();
        });
    }


    function getFlowersIsland(req, res, mysql, context, complete){
      var query = "SELECT flower_name, flower_color FROM has WHERE island_name = :selected_island_name_flowers";
      console.log(req.params)
      var inserts = [req.params.islandName]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.flowersIsland = results;
            complete();
        });
    }

    function getislandVillagers(req, res, mysql, context, complete){
      var query = "SELECT island.name, member.villager_name, member.favorite, FROM island INNER JOIN member ON island.name = member.island_name";
      console.log(req.params)
      var inserts = [req.params.islandName]
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.IslandVillagers = results;
            complete();
        });
    }

    function getPerson(res, mysql, context, id, complete){
        var sql = "SELECT character_id as id, fname, lname, homeworld, age FROM bsg_people WHERE character_id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.person = results[0];
            complete();
        });
    }

//     /*Display all people. Requires web based javascript to delete users with AJAX*/

       router.get('/', function(req, res){
         var callbackCount = 0;
         var context = {};
         context.jsscripts = [];
         var mysql = req.app.get('mysql');
         getislandDetails(res, mysql, context, complete);
         getIslandFruits(res, mysql, context, complete);
         getFlowersIsland(res, mysql, context, complete);
         getislandVillagers(res, mysql, context, complete);
         getperson(res, mysql, context, complete);
         function complete(){
             callbackCount++;
             if(callbackCount >= 5){
                 res.render('islandDetails', context);
             }

//         }
//     });

//     /*Display all people from a given homeworld. Requires web based javascript to delete users with AJAX*/
//     router.get('/filter/:homeworld', function(req, res){
//         var callbackCount = 0;
//         var context = {};
//         context.jsscripts = ["deleteperson.js","filterpeople.js","searchpeople.js"];
//         var mysql = req.app.get('mysql');
//         getPeoplebyHomeworld(req,res, mysql, context, complete);
//         getPlanets(res, mysql, context, complete);
//         function complete(){
//             callbackCount++;
//             if(callbackCount >= 2){
//                 res.render('people', context);
//             }

//         }
//     });

//     /*Display all people whose name starts with a given string. Requires web based javascript to delete users with AJAX */
//     router.get('/search/:s', function(req, res){
//         var callbackCount = 0;
//         var context = {};
//         context.jsscripts = ["deleteperson.js","filterpeople.js","searchpeople.js"];
//         var mysql = req.app.get('mysql');
//         getPeopleWithNameLike(req, res, mysql, context, complete);
//         getPlanets(res, mysql, context, complete);
//         function complete(){
//             callbackCount++;
//             if(callbackCount >= 2){
//                 res.render('people', context);
//             }
//         }
//     });

//     /* Display one person for the specific purpose of updating people */

//     router.get('/:id', function(req, res){
//         callbackCount = 0;
//         var context = {};
//         context.jsscripts = ["selectedplanet.js", "updateperson.js"];
//         var mysql = req.app.get('mysql');
//         getPerson(res, mysql, context, req.params.id, complete);
//         getPlanets(res, mysql, context, complete);
//         function complete(){
//             callbackCount++;
//             if(callbackCount >= 2){
//                 res.render('update-person', context);
//             }

//         }
//     });

//     /* Adds a person, redirects to the people page after adding */

//     router.post('/', function(req, res){
//         console.log(req.body.homeworld)
//         console.log(req.body)
//         var mysql = req.app.get('mysql');
//         var sql = "INSERT INTO grows  (:new_fruit, :, homeworld, age) VALUES (?,?,?,?)";
//         var inserts = [req.body.new_fruit, req.body.lname, req.body.native_input];
//         sql = mysql.pool.query(sql,inserts,function(error, results, fields){
//             if(error){
//                 console.log(JSON.stringify(error))
//                 res.write(JSON.stringify(error));
//                 res.end();
//             }else{
//                 res.redirect('/island');
//             }
//         });
//     });

//     /* The URI that update data is sent to in order to update a person */

//     router.put('/:id', function(req, res){
//         var mysql = req.app.get('mysql');
//         console.log(req.body)
//         console.log(req.params.id)
//         var sql = "UPDATE bsg_people SET fname=?, lname=?, homeworld=?, age=? WHERE character_id=?";
//         var inserts = [req.body.fname, req.body.lname, req.body.homeworld, req.body.age, req.params.id];
//         sql = mysql.pool.query(sql,inserts,function(error, results, fields){
//             if(error){
//                 console.log(error)
//                 res.write(JSON.stringify(error));
//                 res.end();
//             }else{
//                 res.status(200);
//                 res.end();
//             }
//         });
//     });

//     /* Route to delete a person, simply returns a 202 upon success. Ajax will handle this. */

//     router.delete('/:id', function(req, res){
//         var mysql = req.app.get('mysql');
//         var sql = "DELETE FROM bsg_people WHERE character_id = ?";
//         var inserts = [req.params.id];
//         sql = mysql.pool.query(sql, inserts, function(error, results, fields){
//             if(error){
//                 console.log(error)
//                 res.write(JSON.stringify(error));
//                 res.status(400);
//                 res.end();
//             }else{
//                 res.status(202).end();
//             }
//         })
//     })

     return router;
     }();
