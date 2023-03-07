import express from 'express'
import { deleteUser, logout, create, getAllUsers, findByUsername, findAllAdmin, getUser, updateUser, login, signup } from '../controllers/user/users.controller.js'
// import validation from '../jwt/validation.js';
import userValidation from "../controllers/user/userValidator.js";

const router = express.Router();

// require ("dotenv").config();
// require ('./app/config/db.config');
    
router.post('/signup', signup, userValidation);

// router.post('/signup', register, userValidation);

router.post('/login', login, userValidation);

router.post('/logout', logout);
router.delete('/user', deleteUser);
// router.get("/", validation, getAllUsers);

// router.get("/:id", validation, getUser);

// router.get("/:username", findByUsername);

// router.get("/admin", validation, findAllAdmin);

// router.put('/:id', validation, updateUser);
// router.delete('/:id', validation, deleteUser);

// };

export default router;