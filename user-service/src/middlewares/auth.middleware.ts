import { NextFunction, Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { UnauthorizedError } from "../utils/errors/errors";
import { verifyAccessToken } from "../utils/jwtHelper";
import {JwtPayload} from "./auth.type";
const authMiddleware = asyncHandler(async(req:Request, res:Response, next: NextFunction)=>{
    let token = req.headers.authorization;
    if(!token) throw new UnauthorizedError() 
    
    const decode: string | JwtPayload = verifyAccessToken(token) as JwtPayload
    req.user = decode ;
    next();
})