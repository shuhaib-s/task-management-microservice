import mongoose from "mongoose";

export const ConnectDB = (url:string)=> mongoose.connect(url);