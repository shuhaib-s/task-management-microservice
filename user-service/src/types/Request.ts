import { Request } from "express";
import { JwtPayload } from "../middlewares/auth.type";

export interface CustomRequest extends Request{
    user:JwtPayload
}