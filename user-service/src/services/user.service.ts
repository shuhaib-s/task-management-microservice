import { CreateUserDTO, userDatabaseReponse, userLoginDto, UserResponse } from "../dto/user.dto";
import userRepo , { UserRepository } from "../repositories/user.repository";
import { passwordCompare, passwordHash } from "../utils/bcryptHelper";
import { AlreadyExistError, NotFoundError, UnauthorizedError } from "../utils/errors/errors";
import { createAccessToken } from "../utils/jwtHelper";
export class UserService{
    constructor(private readonly userRepo:UserRepository){}

    omitPassowrd(data:userDatabaseReponse){
         const {password, ...user} = data;
         return user
    }
    async userRegister(data:CreateUserDTO){
        const user: userDatabaseReponse | null = await this.userRepo.findUserByEmail(data.email)
        if(user) throw new AlreadyExistError("user already exist with this email")
        
        const hashedPassword = await passwordHash(data.password.toString())
        const {password, ...newUser}: userDatabaseReponse = await this.userRepo.createUser({email:data.email, firstName:data.firstName, 
            lastName:data.lastName,password:hashedPassword})
        return newUser;
    }

    async userLogin(data:userLoginDto){
        const user: userDatabaseReponse | null = await this.userRepo.findUserByEmail(data.email)
        if(!user) throw new NotFoundError("user not found in this email" + data.email);
        console.log(user)
        console.log(data)
        const isCompared = await passwordCompare(data.password.toString(), user.password)
        if(!isCompared) throw new UnauthorizedError("email or password invalid")
        const userResponse: UserResponse = this.omitPassowrd(user);
        const accessToken = createAccessToken({id:userResponse._id as string, email:userResponse.email})
        return {
            user: userResponse,
            accessToken
        }

    }

    async getUserProfile(id:string){
        const user: userDatabaseReponse | null = await this.userRepo.findUserById(id)
        if(!user) throw new NotFoundError("not found the user by this id")
        const onlyReponse:UserResponse = this.omitPassowrd(user)
        return onlyReponse

    }
}

export default new UserService(userRepo)