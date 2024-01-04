import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

// routes
import { eventRouter } from "./routes/user.route.js";

// routes declarations
app.use("/api/v1/events", eventRouter)

export { app }