import { Model } from "mongoose";
import { CreateUserDTO, UserResponse } from "../dto/user.dto";
import { userModel } from "../models/user.model";
 
class UserRepository {
    constructor(private readonly userModel: Model<any>) {}
  
    async createUser(data: CreateUserDTO): Promise<UserResponse> {
      const newUser = await this.userModel.create(data);
  
      const userObject = newUser.toObject();
  
      const { password, ...safeUser } = userObject;
  
      return safeUser;
    }
  
    async findUserByEmail(email: string) {
      return this.userModel.findOne({ email });
    }
  }

  export default new UserRepository(userModel)

