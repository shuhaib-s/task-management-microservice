import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  email: String,
  password: String,
},{ timestamps: true });

export const userModel = mongoose.model('User', userSchema);