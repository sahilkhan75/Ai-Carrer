import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.js"

dotenv.config();



await connectDB();

const app = express();

app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))

app.use("/api/user", userRoutes)
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})