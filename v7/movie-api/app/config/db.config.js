export const HOST = "localhost";
export const USER = "root";
export const PASSWORD = "Nu200240853";
export const DB = "moviedb";
export const dialect = "mysql";

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });