
export abstract class CustomError extends Error {
    
    public abstract status: number

    constructor(message: string) {
        super(message);
    }

    abstract format(): CustomError.FormatedError 
}

export namespace CustomError {
    export type FormatedError = {
        error: string
        message: string
    }
}