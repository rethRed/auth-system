import { Request } from "express"
import { validationResult } from "express-validator"
import { CustomError } from "@/app/custom-error";

export class RequestBodyError extends CustomError {
    status = 400
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name
    }

    format(): CustomError.FormatedError {
        return {
            error: this.name,
            message: this.message
        }
    }
}

export const validateRequestBodyHelper = (req: Request) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new RequestBodyError(errors.array()[0].msg)
    }
}

