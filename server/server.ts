import express, { } from "express"
import cors from "cors"

import eventRoutes from "./routes/eventRoutes"

import { devConfig } from "./config/developmentVariables"
import { connectDB } from "./config/dbConnection"

const app = express()

connectDB()

const corsOptions = {
    origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/events", eventRoutes)

app.get("/", (req, res) => {
    res.send("Starting page")
})

app.listen(devConfig.PORT, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${devConfig.PORT}`)
})

