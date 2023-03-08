import { PrismaUserRepository } from "@/repository/prisma"
import { Users } from "@prisma/client"
import { InvalidCredentialsError, UserNotFoundError } from "./error"
import Crypto from "crypto"
import { PasswordHashHelper } from "@/helper/hash"

export class LoginService {
    
    async execute(props: LoginService.Input): Promise<LoginService.Output> {

        const prismaUserRepository = new PrismaUserRepository()

        const foundUser = await prismaUserRepository.findByEmail(props.email)
        if(!foundUser){
            throw new UserNotFoundError()
        }

        const passwordMatch = await PasswordHashHelper.compare(props.password,foundUser.password)
        if(!passwordMatch){
            throw new InvalidCredentialsError()
        }

        return foundUser
    }
}

export namespace LoginService {
    export type Input = {
        email: string,
        password: string,
    }
    export type Output = Users
}