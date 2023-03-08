import express from "express"
import { middleware } from "./middleware";
import { route } from "./route";
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser())
app.use(express.json());
route(app)
middleware(app)

export default app