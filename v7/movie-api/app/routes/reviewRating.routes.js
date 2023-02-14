export default app => {
    const reviewRatings = require("../controllers/reviewRatings.controller.js");

    var router = require("express").Router();

    router.post("/", reviewRatings.create);

    router.get("/", reviewRatings.findAll);

    //router.get("/:", reviewRatings.findOne);

    router.delete("/:id", reviewRatings.delete);

    app.use('/api/reviewRatings', router);
}; 

