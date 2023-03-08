import { RequestBodyError } from "@/error/validation"
import { Request } from "express"
import { validationResult } from "express-validator"

export const validateRequestBodyHelper = (req: Request) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new RequestBodyError(errors.array()[0].msg)
    }
}