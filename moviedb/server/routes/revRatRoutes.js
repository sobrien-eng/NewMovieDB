import express from 'express'
import { getRevRats, addReview, deleteReview } from '../controllers/revRat/revRat.controller.js';
//import { add, delete } from '../controllers/revRat/.controller.js'
// import validation from '../jwt/validation.js';

const router = express.Router()


const revRatRoutes  = () => {
    
router.post('/addReview', addReview);

router.post('/getRevRats', getRevRats);

router.deleteReview('review/:id', deleteReview);

};

export default revRatRoutes