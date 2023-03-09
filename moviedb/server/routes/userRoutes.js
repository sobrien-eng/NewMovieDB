import express from 'express'
import { deleteUser, logout, login, signup } from '../controllers/user/users.controller.js'
// import validation from '../jwt/validation.js';
import userValidation from "../controllers/user/userValidator.js";

const router = express.Router();

// require ("dotenv").config();
// require ('./app/config/db.config');
    
router.post('/signup', signup, userValidation);

// router.post('/signup', register, userValidation);

router.post('/login', login);

router.post('/logout', logout);
router.delete('/deleteUser', deleteUser);
// router.get("/", validation, getAllUsers);

// router.get("/:id", validation, getUser);

// router.get("/:username", findByUsername);

// router.get("/admin", validation, findAllAdmin);

// router.put('/:id', validation, updateUser);
// router.delete('/:id', validation, deleteUser);

// };

export default router;