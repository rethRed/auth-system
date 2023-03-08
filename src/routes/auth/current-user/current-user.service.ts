import { PrismaUserRepository } from "@/repository/prisma"
import { Users } from "@prisma/client"
import { TokenManagementHelper } from "@/helper/token"
import { InvalidTokenError } from "./error"

export class CurrentUserService {
    
    async execute(props: LoginService.Input): Promise<LoginService.Output> {

        const tokenProps = await TokenManagementHelper.verifyToken(props.accessToken) 
        if (!tokenProps) throw new InvalidTokenError()

        const prismaUserRepository = new PrismaUserRepository()
        const foundUser = await prismaUserRepository.findById(tokenProps.userId)

        if(!foundUser) throw new InvalidTokenError()
        return foundUser
    }
}

export namespace LoginService {
    export type Input = {
        accessToken: string
    }
    export type Output = Users
}