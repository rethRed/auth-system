import { CustomError } from "@/app/custom-error"
import { logError } from "@/helper/error"
import { Request, Response, NextFunction } from "express"

export const handleErrorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {

    if(!(err instanceof CustomError)){
        logError(err)
        return res.status(500).json({error: "ServerError", message: "Internal server error." })
    } 
    res.status(err.status).json(err.format())
}