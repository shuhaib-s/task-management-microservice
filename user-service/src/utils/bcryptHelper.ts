import bcrypt from "bcrypt";
export const passwordHash = async (pass:string)=>  bcrypt.hash(pass, 10)
export const passwordCompare = (pass:string, hash:string)=> bcrypt.compare(pass, hash);