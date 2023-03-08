import { Express, Router } from "express";
import fg from "fast-glob"

export const route = (app: Express) => {

    const router = Router()
    app.use("/api",router)
    fg.sync("**/src/routes/**/**routes.ts").map(async file => {( await import(`../../${file}`)).default(router)})
}