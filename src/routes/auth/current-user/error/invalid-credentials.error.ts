import { CustomError } from "@/app/custom-error";

export class InvalidTokenError extends CustomError {
    status = 401
    constructor() {
        super("Token Provided is invalid .");
        this.name = this.constructor.name
    }

    format(): CustomError.FormatedError {
        return {
            error: this.name,
            message: this.message
        }
    }
}