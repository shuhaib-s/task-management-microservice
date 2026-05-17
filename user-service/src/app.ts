import { ConnectDB } from "./config/db";
import env from "./config/env";
import express, { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/user.route";
import { RegiserAllEvents } from "./events/events";
import { connectRabbitMQ } from "./messages/rabitMQ/connection";
const app = express()

app.use(express.json());
app.use("/users",userRoutes)


app.use(
    (
      err: any,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
      });
    }
  );

// server setup
const startApp = async()=>{
    try {
        await ConnectDB(env.DATABASE_URL);
        await connectRabbitMQ(env.RABITMQ_URL)
        RegiserAllEvents()
        app.listen(env.PORT,()=>console.log(`user server is running on ${env.PORT}`))
    }catch(error){
        console.error(error)
    }
}


startApp()