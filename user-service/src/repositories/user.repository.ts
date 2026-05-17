import { userModel } from "../models/user.model";

interface User {
    firstName: string;
    lastName: string;
    email:string;
    password:string | number;
    _id?: string;
}
const createUser = async(data:User)=>{
    const newUser = new userModel({
        firstName:data.firstName,
        lastName: data.lastName,
        email:data.email,
        password: data.password
    })

    const {password,...user} = await newUser.save()
    return user;
}

const findUserByEmail = async(email:string)=>{
    return userModel.findOne({email})
}
