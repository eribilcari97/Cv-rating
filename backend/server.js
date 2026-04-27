import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import aiRouter from "./routes/aiRoutes.js";
dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api',aiRouter);
const PORT = process.env.PORT ||5000

app.listen(PORT,()=>{
    console.log("server is running")
})