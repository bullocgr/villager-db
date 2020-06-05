var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_andesore',
  password        : 'CS340password',
  database        : 'cs340_andesore'
});
module.exports.pool = pool;
