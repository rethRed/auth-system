import { prismaClient } from "@/database";
import { ErrorLogs } from "@prisma/client";

export class PrismaErrorLogsRepository {

    async createLog(errorLog: ErrorLogs): Promise<ErrorLogs>{
        const newErrorLog = await prismaClient.errorLogs.create({
            data: errorLog
        })
        return newErrorLog
    }
}