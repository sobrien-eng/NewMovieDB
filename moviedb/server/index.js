import express, { json, urlencoded } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyparser from "body-parser";
//import userRoutes from "./app/routes/userRoutes.js";

const app = express();

//app.use(cors(corsOptions));

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));
//app.use("/", userRoutes);
// simple route
app.get("/", (req, res) => {
   //router.get("/", defaultController);
    res.json({ message: "yikes" });
});

// require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//app.use('/user', userRoutes);
