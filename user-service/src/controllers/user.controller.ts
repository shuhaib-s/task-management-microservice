import { Request,Response } from "express"
import asyncHandler from "../utils/asyncHandler"
import { CreateUserDTO, LoginResponse, userLoginDto, UserResponse } from "../dto/user.dto";
import userService from "../services/user.service";
import { CustomRequest } from "../types/Request";

export const userRegister = asyncHandler(async(req:Request,res:Response)=>{
    const body:CreateUserDTO = req.body;
    console.log(body)
    const registeredUser = await userService.userRegister(body);
    res.status(201).json({data:registeredUser,messge:"user registered successfully"})
})

export const userLogin  = asyncHandler(async(req:Request, res:Response)=>{
     const body:userLoginDto = req.body;
     const response:LoginResponse= await userService.userLogin(body);
     res.json(response)

})
export const getUserProfile  = asyncHandler(async(req:CustomRequest, res:Response)=>{
    const id = req.user?.id || "";
    const userData:UserResponse = await userService.getUserProfile(id as string);
    res.json(userData)


})