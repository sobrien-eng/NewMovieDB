import Joi from "joi";
import  object from "joi";
import  string from "joi";
// import errorFunction from "../../utils/errorFunction.js";

const validation = Joi.object({
	firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().alphanum().min(3).max(25).trim(true).required(),
	email: Joi.string().email().trim(true).required(),
	password: Joi.string().min(8).trim(true).required(),
	// mobileNumber: Joi.string()
	// 	.length(10)
	// 	.pattern(/[6-9]{1}[0-9]{9}/)
	// 	.required(),
});

const userValidation = async (req, res, next) => {
	const payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		//mobileNumber: req.body.mobileNumber,
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
		return res.json(
			errorFunction(true, `Error in User Data : ${error.message}`)
		);
	} else {
		next();
	}
};

export default userValidation;