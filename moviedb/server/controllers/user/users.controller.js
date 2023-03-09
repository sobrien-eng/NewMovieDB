
import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import errorFunction from "../../utils/errorFunction.js";
// import securePassword from "../../utils/hash.js";
import { db } from "../../db.config.js";


export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        if (allUsers) {
            res.status(201);
            return res.json(
                errorFunction(false, "Sending all users", allUsers)
            );
        } else {
            res.status(403);
            return res.json(errorFunction(true, "Error getting Users"));
        }
    } catch (error) {
        res.status(400);
        return res.json(errorFunction(true, "Error getting user"));
    }
};

export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = User.findById(id);
        if (user) {
            const { password, ...otherDetails } = user._doc;
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json("No user found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export function findByUsername(req, res) {
    const username = req.query.username;
    User.getAll(username, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};

export function findAllAdmin(req, res) {
    User.getAllAdmin((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving admins."
            });
        else res.send(data);
    });
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { ID, currentUserAdmin, password } = req.body;
    if (id === ID) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            const user = await User.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            const token = jwt.sign(
                { username: user.username, id: user.ID },
                process.env.JWTKEY,
                { expiresIn: "1h" }
            );
            console.log({ user, token })
            res.status(200).json({ user, token });
        } catch (error) {
            console.log("Error")
            res.status(500).json(error);
        }
    } else {
        res
            .status(403)
            .json("Access Denied.");
    }
};

export const signup = (req, res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) {
            console.log("select");
            console.log("error" + JSON.stringify(err));

            return res.status(500).json(err);
        }
        if (data.length) return res.status(409).json("User already exists!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (err, data) => {
            if (err) {
                console.log("select");
                console.log(JSON.stringify(err));
                return res.status(500).json(err);
            }
            return res.status(200).json("User has been created.");
        });
    });
    console.log("ouch");
};

export const login = (req, res) => {
    //CHECK USER

    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        console.log(req.body.username);
        if (err) {
            console.log("select");
            console.log(JSON.stringify("error" + err));
            return res.status(500).json(err);
        }
        return res.status(200).json("done.");

        //Check password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );
        console.log(isPasswordCorrect);
        if (!isPasswordCorrect)
            return res.status(400).json("Wrong username or password!");

        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];
        console.log(password);
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json(other);
    });
    console.log("ouch2");
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
};

export const deleteUser = (req, res) => {
    
    const q = "DELETE FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            console.log("error" + JSON.stringify(err));
            return res.status(500).json(err);
        }  return res.status(200).json("User delete.")
        
    })
}