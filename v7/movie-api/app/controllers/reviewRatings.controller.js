import reviewRating from "../models/reviews-ratings.models";

export function create(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const revRat = new reviewRating({
        review: req.body.reviewText,
        rating: req.body.rating,
    });

    reviewRating.create(revRat, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Could not create."
            });
        else res.send(data);
    });
}


export function update(req, res) {
    req.params.id,
        new reviewRating(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No review/rating with id: ${req.params.id} was found.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating."
                    });
                }
            } else res.send(data);
        }
}

export function findAll(req, res) {
    // const userId = req.query.userId;

    // reviewRating.getAll(userId, (err, data) => {
    //     if (err)
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving reviews/ratings."
    //         });
    //     else res.send(data);
    // });
}


export function findOne(req, res) {

}
export function deleteRevRat(req, res) {
    reviewRating.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No review/rating with id: ${req.params.id} was found.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete review/rating"
                });
            }
        } else res.send({ message: `Deleted successfully!` });
    });
}
