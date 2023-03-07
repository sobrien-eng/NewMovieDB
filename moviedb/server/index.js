import express, { json, urlencoded } from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import bodyparser from "body-parser";
import userRoutes from './routes/userRoutes.js';
import revRatRoutes from "./routes/revRatRoutes.js";
const app = express();

//app.use(cors(corsOptions));

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(userRoutes);
app.use(revRatRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

