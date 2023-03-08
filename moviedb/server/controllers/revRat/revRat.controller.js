import { db } from "../../db.config.js";

export const addReview = (req, res) => {
//NEED MOVIE ID
    db.query(q, [req.body.review, req.body.rating, req.body.movieId], (err, data) => {
        const q = "INSERT INTO reviewRating (`review`,`rating`, `movieId`) VALUES (?)";
        const values = [req.body.review, req.body.rating];

        db.query(q, [values], (err, data) => {
            if (err){
                console.log("select");
                console.log(JSON.stringify(err));
            return res.status(500).json(err);
            }
            return res.status(200).json("Review/rating was added.");
        });
    });
    console.log("ouch");
};

export const getRevRats = (req, res) => {

    const q = "SELECT * FROM reviewRating";

    db.query(q, [req.body.review], [req.body.rating], [req.body.movieId], (err, data) => {
        console.log(req.body.review);
        console.log(req.body.rating);
        //NEED MOVIE ID
        if (err) {
            console.log("select");
            console.log(JSON.stringify("error"+ err));
            return res.status(500).json(err);
        }
        if (data.length === 0) {
            return res.status(404).json("No data found!");
        }

    });
    console.log("ouch2");
};
//SELECT * FROM USERS U
//JOIN REVIEWS R 
//U.ID = R. UID
//WHERE U.USERNAME =.....
export const deleteReview = async (req, res) => {
    const q = "SELECT * FROM reviewRating WHERE ";

    db.query(q, [req.body.review], [req.body.rating], [req.body.movieId], (err, data) => {
        console.log(req.body.review);
        console.log(req.body.rating);
        //NEED MOVIE ID
        if (err) {
            console.log("select");
            console.log(JSON.stringify("error"+ err));
            return res.status(500).json(err);
        }
        if (data.length === 0) {
            return res.status(404).json("No data found!");
        }

    });
    console.log("ouch2");
};