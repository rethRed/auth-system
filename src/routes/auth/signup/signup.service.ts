import { PrismaUserRepository } from "@/repository/prisma"
import { Users } from "@prisma/client"
import { UserAlreadyRegisteredError } from "./error"
import Crypto from "crypto"
import { PasswordHashHelper } from "@/helper/hash"


export class SignUpService {
    
    async execute(props: SignUpService.Input): Promise<SignUpService.Output> {

        const prismaUserRepository = new PrismaUserRepository()

        const foundUser = await prismaUserRepository.findByEmail(props.email)
        if(foundUser){
            throw new UserAlreadyRegisteredError()
        }

        const hashedPassword = await PasswordHashHelper.hash(props.password)

        return await prismaUserRepository.createUser({
            id: Crypto.randomUUID(),
            email: props.email,
            password: hashedPassword
        })
    }
}

export namespace SignUpService {
    export type Input = {
        email: string,
        password: string,
    }
    export type Output = Users
}