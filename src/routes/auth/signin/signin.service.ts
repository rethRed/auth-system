import { PrismaUserRepository } from "@/repository/prisma"
import { Users } from "@prisma/client"
import { UserAlreadyRegisteredError } from "./error"
import Crypto from "crypto"

export class SigninService {
    
    async execute(props: SigninService.Input): Promise<SigninService.Output> {

        const prismaUserRepository = new PrismaUserRepository()

        const foundUser = await prismaUserRepository.findByEmail(props.email)
        if(foundUser){
            throw new UserAlreadyRegisteredError()
        }
        return await prismaUserRepository.createUser({
            id: Crypto.randomUUID(),
            email: props.email,
            password: props.password
        })
    }
}

export namespace SigninService {
    export type Input = {
        email: string,
        password: string,
    }
    export type Output = Users
}