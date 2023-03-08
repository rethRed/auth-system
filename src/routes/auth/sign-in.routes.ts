import { validateRequestBodyHelper } from "@/helper/validate"
import { Router } from "express"
import { Request, Response } from "express"
import { body } from "express-validator"

export default (router: Router): void => {
    router.get("/auth/signin", [
        
    ], async (req: Request, res: Response) => {

        validateRequestBodyHelper(req)

        

        // res.cookie("token", tokenRequestResult.access_token)
        // res.cookie("refreshToken", tokenRequestResult.refresh_token)
    })
}