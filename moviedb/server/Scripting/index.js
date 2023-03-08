var mysql = require("mysql");
const bcrypt = require('bcryptjs');
const fs = require('fs');
const csv = require('fast-csv');
let data = []
x = -1;

var connection = mysql.createConnection({
    host: "numerouno.cvhhp3kvk3ey.us-west-2.rds.amazonaws.com",
    database: "movies",
    user: "admin",
    password: "numeroUno1!"
});

//uncomment all commented code to mass push to database
fs.readdir(__dirname + '\\user data', (err, files) => {
   // files.forEach(
       // fileName => {
            fs.createReadStream(__dirname + '\\user data\\' + "users5.csv")//fileName
        .pipe(csv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => {
            data.push(row)
        })
        .on('end', () => {
            data.forEach(user =>{
                bcrypt.hash(user.password, 10, (err, hash) => {
                    console.log(hash);
                    user.password = hash;
                    x++
                    if(x >= 999){
                        connection.connect(function(err){
                            console.log("connection has been made.----------------------------");
                            var sql = "INSERT INTO movies.users SET ?";
                            console.log("insert complete");
                            data.forEach(person =>{
                            var VALUES = person; 
                            connection.query(sql, [VALUES], function (err, result) {  
                            if (err) {
                                console.log(err)
                            };  
                            console.log("user added to database");  
                                }); 
                            })
                        });
                    }
                })
            })
        });
}
);

