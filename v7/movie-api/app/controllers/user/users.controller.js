
import User from "../../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const errorFunction = require("../../utils/errorFunction");
const securePassword = require("./../../utils/securePassword");

export async function create(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    try {
		const existingUser = await User.findOne({
			email: req.body.email,
		}).lean(true);
		if (existingUser) {
			res.status(403);
			return res.json(errorFunction(true, "User Already Exists"));
		} else {
			const hashedPassword = await securePassword(req.body.password);
			const newUser = User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: hashedPassword,
                mobileNumber: req.body.mobileNumber,
            });
			if (newUser) {
				res.status(201);
				return res.json(
					errorFunction(false, "User Created", newUser)
				);
			} else {
				res.status(403);
				return res.json(errorFunction(true, "Error Creating User"));
			}
		}
	} catch (error) {
		res.status(400);
		console.log(error);
		return res.json(errorFunction(true, "Error Adding user"));
	}
}
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
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdmin } = req.body;
    if (currentUserId == id || currentUserAdmin) {
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json("User Deleted");
        } catch (error) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("User was not deleted, try again");
    }
};
export const signup = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass
    const newUser = new User(req.body);
    const { username } = req.body
    try {
        const oldUser = await User.findOne({ username });
        if (oldUser)
            return res.status(400).json({ message: "User already exists" });
        const user = await newUser.save();
        const token = jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWTKEY,
            { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (user) {
            const validity = await bcrypt.compare(password, user.password);
            if (!validity) {
                res.status(400).json("Incorrect password");
            } else {
                const token = jwt.sign(
                    { username: user.username, id: user._id },
                    process.env.JWTKEY,
                    { expiresIn: "1h" }
                );
                res.status(200).json({ user, token });
            }
        } else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};