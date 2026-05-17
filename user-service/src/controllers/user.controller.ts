import { Request,Response } from "express"

export const userRegister = (req:Request,res:Response)=>{
    res.json("hi you are registered")
}

export const userLogin  = (req:Request, res:Response)=>{
    res.json("you are on way, wait sometimes")
}
export const getUserProfile  = (req:Request, res:Response)=>{
    res.json("yi")
}