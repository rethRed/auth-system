import dotenv from "dotenv"
dotenv.config()
import "express-async-errors"
import app from "./app"


app.listen(process.env.APP_PORT, () => console.log(`running on port ${process.env.APP_PORT}`))



