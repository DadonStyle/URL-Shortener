import {check, validationResult} from 'express-validator'
import {Request, Response, NextFunction} from 'express'

//validates the data
export const validationTerms = () => {
    return [
    check("_fullUrl","URL אנא הכנס").not().isEmpty(),
    check("_fullUrl","https://www.example.com :דוגמא").isURL()
    ]
}

//catching errors
export const validate = (req: Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length<1) {
        return next();
    } else {
        return res.status(400).send(errors[0].msg);
    }
}