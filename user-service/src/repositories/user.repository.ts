import { Model } from "mongoose";
import { CreateUserDTO, userDatabaseReponse } from "../dto/user.dto";
import { userModel } from "../models/user.model";

type databaseResponse = Promise<userDatabaseReponse | null> 
export class UserRepository {
    constructor(private readonly userModel: Model<any>) {}
  
    async createUser(data: CreateUserDTO): Promise<userDatabaseReponse>{
      const newUser = await this.userModel.create(data);
      return newUser.toObject();
    }
  
    async findUserByEmail(email: string) :databaseResponse{
      return this.userModel.findOne({ email }).lean();
    }

    async findUserById(id:string): databaseResponse{
      return this.userModel.findById(id).lean()
    }
  }

  export default new UserRepository(userModel)

