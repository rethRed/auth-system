
import { Router } from "express"
import { Request, Response } from "express"
import { CurrentUserService } from "./current-user.service"

export default (router: Router): void => {
    router.post("/auth/current-user", async (req: Request, res: Response) => {
        
        const { token } = req.cookies

        const currentUserService = new CurrentUserService()
        const user = await currentUserService.execute({
            accessToken: token
        })

        const { password: password, ...responseProps } = user

        res.json({
            ...responseProps
        })

    })
}