import { validateRequestBodyHelper } from "@/helper/validate"
import { Router } from "express"
import { Request, Response } from "express"
import { body } from "express-validator"
import { SigninService } from "./signin.service"

export default (router: Router): void => {
    router.post("/auth/signin", [
        body("email")
        .exists().withMessage("email should be provided.")
        .isEmail().withMessage("wrong email format."),
        body("password")
        .exists().withMessage("password should be provided.")
        
    ], async (req: Request, res: Response) => {

        validateRequestBodyHelper(req)
        
        const { email, password } = req.body

        const signinService = new SigninService()
        await signinService.execute({
            email,
            password
        })

        res.json({})

        // res.cookie("token", tokenRequestResult.access_token)
        // res.cookie("refreshToken", tokenRequestResult.refresh_token)
    })
}