import express from 'express'
import { deleteUser, create, getAllUsers, findByUsername, findAllAdmin, updateUser, deleteUser, getUser, updateUser, login } from '../controllers/users.controller.js'
import validation from '../jwt/validation.js';
import userValidation from "../controllers/user/userValidator";
import {} from "../config/db.config";
const defaultController = require("../controllers/defaultController");
const router = express.Router()
var mysql = require('mysql');
app.post('/signup', (req, res, next) => {
    const firstName = req.body.firstName;
    const lastrName = req.body.lastName;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
})
router.post('/login', login, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
})
router.post('/signup', userValidation, create)

router.post("/", validation, create);

router.get("/", validation, getAllUsers);

router.get("/:id", validation, getUser);

 router.get("/:username", users.findBUsername);
// Retrieve all admin Users
router.get("/admin", validation, findAllAdmin);

router.put('/:id', validation, updateUser)
router.delete('/:id', validation, deleteUser)

app.use('/api/users', router);

export default router