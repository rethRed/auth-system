import { CustomError } from "@/app/custom-error";

export class UserNotFoundError extends CustomError {
    status = 404
    constructor() {
        super("User could not be founded.");
        this.name = this.constructor.name
    }

    format(): CustomError.FormatedError {
        return {
            error: this.name,
            message: this.message
        }
    }
}