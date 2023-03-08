import { prismaClient } from "@/database";
import { Users } from "@prisma/client";

export class PrismaUserRepository {

    constructor() {

    }

    async findById(id: string): Promise<Users | null> {
        const user = await prismaClient.users.findFirst({
            where: {
                id
            }
        })
        if(!user) return null
        return user
    }

    async findByEmail(email: string): Promise<Users | null> {
        const user = await prismaClient.users.findFirst({
            where: {
                email
            }
        })
        if(!user) return null
        return user
    }

    async createUser(user: Users): Promise<Users> {
        const newUser = await prismaClient.users.create({
            data: user
        })
        return newUser
    }
}