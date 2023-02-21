import express from 'express'
import { deleteUser, create, getAllUsers, findByUsername, findAllAdmin, getUser, updateUser, login } from '../controllers/user/users.controller.js'
import validation from '../jwt/validation.js';
import userValidation from "../controllers/user/userValidator.js";
import {} from "../config/db.config.js";
import defaultController from "../controllers/default.js";

const router = express.Router()
import mysql from "mysql";

// require ("dotenv").config();
// require ('./app/config/db.config');

const userRoutes  = () => {
    router.post('/signup', (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (firstName, lastName, username, email, password) VALUES (?, ?, ?, ?, ?)",
        [firstName, lastName, username, email, password],
        (err, result) => {
            console.log(err);
        }
    );
    
});

router.post('/login', login, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if(err){
                res.send({err:err});
                console.log(err);
            } 
            if(result){
                res.send(result);
            } else{
                res.send({message: "This username/password combination wasn't recognized."})
            }
            
        }
    );
});

router.post("/", validation, create);

router.get("/", validation, getAllUsers);

router.get("/:id", validation, getUser);

 router.get("/:username", users.findBUsername);
// Retrieve all admin Users
router.get("/admin", validation, findAllAdmin);

router.put('/:id', validation, updateUser)
router.delete('/:id', validation, deleteUser)

app.use('/api/users', router);
}


export default userRoutes