// / Setting up MySQL connection.
var mysql = require("mysql");
// var secret= require("./secret.js");
var secret = require("../secret");

  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "chippi4e",
    database: "burgers_db"
  });

//  connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for  ORM to use.
module.exports = connection;
