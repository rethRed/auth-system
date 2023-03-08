import { PrismaErrorLogsRepository } from "@/repository/prisma"
import Crypto from "crypto"

export const logError = async (err: Error) => {
    const prismaErrorLogsRepository = new PrismaErrorLogsRepository()
    prismaErrorLogsRepository.createLog({
        id: Crypto.randomUUID(),
        message: err.message,
        stack: err.stack,
        name: err.name,
        dateTimeOcorred: new Date()
    })
}
