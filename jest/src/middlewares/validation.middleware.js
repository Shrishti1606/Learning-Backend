const { body, validationResult } = require("express-validator");

    
const validateResult = async (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();

}


const registerUserValidationRules = [

    body("username")
        .isString()
        .withMessage("username must be a sting")
        .isLength({min: 3, max: 20})
        .withMessage("username must be between 3 and 20 characters"),

    body("email")
        .isEmail()
        .withMessage("email must be a valid email address"),    

    body("password")
        .isLength({min: 6})
        .withMessage("password must be at least 6 characters long"),


        validateResult
]

module.exports = {
    registerUserValidationRules
}