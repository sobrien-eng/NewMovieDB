import { object, string, number} from "joi";
import errorFunction from "../../utils/errorFunction";

const validation = object({
	first_name: string().required(),
    last_name: string().required(),
    userName: string().alphanum().min(3).max(25).trim(true).required(),
	email: string().email().trim(true).required(),
	password: string().min(8).trim(true).required(),
	mobileNumber: string()
		.length(10)
		.pattern(/[6-9]{1}[0-9]{9}/)
		.required(),
	//birthYear: number().integer().min(1920).max(2000),
});

const userValidation = async (req, res, next) => {
	const payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
		mobileNumber: req.body.mobileNumber,
		//birthYear: req.body.birthYear,
		
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