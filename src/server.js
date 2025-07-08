import express from "express"
import dotenv from"dotenv"
import { initDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"

import transactionsRoute from "./routes/transactionsRoute.js"
import job from "./config/cron.js"

dotenv.config()
const app=express()

if(process.env.NODE_ENV==="production") job.start();

app.use(rateLimiter)
app.use(express.json());


const PORT=process.env.PORT

app.get("/api/health", (req,res)=>{
    res.status(200).json({status:"ok"})
})



console.log("my port:", process.env.PORT);

app.use("/api/transactions", transactionsRoute)

initDB().then(()=>{
    app.listen(PORT,"0.0.0.0",()=>{
        console.log("Server is running on PORT:",PORT);
        });
})