import jwt from "jsonwebtoken"
import env from "../config/env";
import {JwtPayload} from "../middlewares/auth.type";
export const createAccessToken = (payload:JwtPayload) => jwt.sign({...payload}, env.JWt_SECRET)
export const verifyAccessToken = (token:string) => jwt.verify(token,env.JWt_SECRET) as JwtPayload