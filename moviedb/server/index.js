import express, { json, urlencoded } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyparser from "body-parser";
//import userRoutes from "./app/routes/userRoutes.js";
//const mysql = require('mysql')
//import mysql from "mysql";

// var con = mysql.createConnection({
//     host: "numerouno.cvhhp3kvk3ey.us-west-2.rds.amazonaws.com",
//     user: "admin",
//     password: "numeroUno1!",
//     port: "3306",
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

const app = express();

//app.use(cors(corsOptions));

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));
//app.use("/", userRoutes);


app.get("/", (req, res) => {
    res.json({ message: "yikes" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

