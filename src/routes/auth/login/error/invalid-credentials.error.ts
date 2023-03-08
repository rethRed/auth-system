import { CustomError } from "@/app/custom-error";

export class InvalidCredentialsError extends CustomError {
    status = 400
    constructor() {
        super("Credentials provided are wrong.");
        this.name = this.constructor.name
    }

    format(): CustomError.FormatedError {
        return {
            error: this.name,
            message: this.message
        }
    }
}