import { ConnectDB } from "./config/db";
import env from "./config/env";
import express from "express";
import userRoutes from "./routes/user.route";
const app = express()

app.use(express.json());
app.use("/user",userRoutes)



// server setup
const startApp = async()=>{
    try {
        await ConnectDB(env.DATABASE_URL);
        app.listen(env.PORT,()=>console.log(`user server is running on ${env.PORT}`))
    }catch(error){
        console.error(error)
    }
}


startApp()