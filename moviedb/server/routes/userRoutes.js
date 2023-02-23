import express from 'express'
import { deleteUser, create, getAllUsers, findByUsername, findAllAdmin, getUser, updateUser, login, signup } from '../controllers/user/users.controller.js'
// import validation from '../jwt/validation.js';
import userValidation from "../controllers/user/userValidator.js";

const router = express.Router()

// require ("dotenv").config();
// require ('./app/config/db.config');

const userRoutes  = () => {
    
router.post('/signup', signup, userValidation);

router.post('/login', login, userValidation);

router.get("/", validation, getAllUsers);

router.get("/:id", validation, getUser);

router.get("/:username", findByUsername);

router.get("/admin", validation, findAllAdmin);

router.put('/:id', validation, updateUser);
router.delete('/:id', validation, deleteUser);

// app.use('/api/users', router);
};

export default userRoutes