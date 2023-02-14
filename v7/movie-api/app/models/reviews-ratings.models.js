import { query as _query } from "../config/db.config";

// constructor
class reviewRating {
    constructor(reviewRating) {
        this.reviewText = reviewRating.reviewText;
        this.rating = reviewRating.rating;
        //userid fk
    }
    static create(newReviewRating, result) {
        _query("INSERT INTO reviewRatings SET ?", newReviewRating, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("Created reviewRating: ", { id: res.insertId, ...newReviewRating });
            result(null, { id: res.insertId, ...newReviewRating });
        });
    }
    

    // static delete(id, result) {
    //     _query("DELETE FROM reviewRatings WHERE userId = ?", id, (err, res) => {
    //         if (err) {
    //             console.log("error: ", err);
    //             result(null, err);
    //             return;
    //         }

    //         if (res.affectedRows == 0) {
    //             // not found User with the id
    //             result({ kind: "not_found" }, null);
    //             return;
    //         }

    //         console.log("deleted user with id: ", id);
    //         result(null, res);
    //     });
    // }
    static getAll(title, result) {
        let query = "SELECT * FROM users";

        if (title) {
            query += ` WHERE title LIKE '%${title}%'`;
        }

        _query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("users: ", res);
            result(null, res);
        });
    }
  
    // static findByName(name, result) {

    //     _query(`SELECT * FROM users WHERE username = ${username}`, (err, res) => {
    //         if (err) {
    //             console.log("error: ", err);
    //             result(err, null);
    //             return;
    //         }

    //         if (res.length) {
    //             console.log("found user: ", res[0]);
    //             result(null, res[0]);
    //             return;
    //         }

    //         result({ kind: "not_found" }, null);
    //     });
    // }

}
export default reviewRating;

