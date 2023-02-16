import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

export const devConfig = {
    PORT, DB_USER, DB_PASSWORD, DB_NAME
}