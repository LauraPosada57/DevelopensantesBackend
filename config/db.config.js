'use strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
    host     : 'sql10.freesqldatabase.com',
    port     :  '3306',
    user     : 'sql10446487',
    password : 'Ar8uqSrw7x',
    database : 'sql10446487'
  });

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;
