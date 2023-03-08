import { CustomError } from "@/app/custom-error";

export class UserAlreadyRegisteredError extends CustomError {
    status = 409
    constructor() {
        super("User already was registered.");
        this.name = this.constructor.name
    }

    format(): CustomError.FormatedError {
        return {
            error: this.name,
            message: this.message
        }
    }
}