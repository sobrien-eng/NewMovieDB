 import mysql from "mysql";
//import { createConnection } from 'mysql';
// export const HOST = "numerouno.cvhhp3kvk3ey.us-west-2.rds.amazonaws.com";
// export const PORT = 3306;
// export const USER = "admin";
// export const PASSWORD = "numeroUno1!";
// export const DB = "movies";
// export const dialect = "mysql";

// export default db = createConnection({
//     host: "numerouno.cvhhp3kvk3ey.us-west-2.rds.amazonaws.com",
//     user: "admin",
//     password: "numeroUno1!",
//     port: "3306",
// });


export const db = mysql.createConnection({
    host: "moviedb2.cap3bgu68rku.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "Password!1",
    port: "3306",
    database: "movies"
})