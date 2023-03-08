import { TokenManagementHelper } from "@/helper/token"
import { validateRequestBodyHelper } from "@/helper/validate"
import { Router } from "express"
import { Request, Response } from "express"
import { body } from "express-validator"
import { LoginService } from "./login.service"

export default (router: Router): void => {
    router.post("/auth/login", [
        body("email")
        .exists().withMessage("email should be provided.")
        .isEmail().withMessage("wrong email format."),
        body("password")
        .exists().withMessage("password should be provided.")
        
    ], async (req: Request, res: Response) => {

        validateRequestBodyHelper(req)
        
        const { email, password } = req.body

        const loginService = new LoginService()
        const user = await loginService.execute({
            email,
            password
        })
        const tokenInfo = { userId: user.id, email: user.email }
        const accessToken = await TokenManagementHelper.generateToken(tokenInfo)
        const refreshToken = await TokenManagementHelper.generateRefreshToken(tokenInfo)

        res.cookie("token", accessToken)
        res.cookie("refreshToken", refreshToken)

        const { password: createdPassword, ...responseProps } = user

        res.json({
            ...responseProps
        })

    })
}