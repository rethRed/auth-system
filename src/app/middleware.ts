import { Express, json } from "express";
import cors from "cors";
import { handleErrorMiddleware } from "@/middleware/error";

export const middleware = (app: Express) => {


    app.use(cors());
    app.use(handleErrorMiddleware)
}