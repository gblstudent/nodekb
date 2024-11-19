require('dotenv').config();

var mysql = require('mysql2/promise');

var mySqlPool = mysql.createPool({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB
});

module.exports = mySqlPool;