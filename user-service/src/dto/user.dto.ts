export interface userDatabaseReponse {
    firstName: string;
    lastName: string;
    email:string;
    _id?: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CreateUserDTO {
    firstName: string;
    lastName: string;
    email:string;
    password:string;
} 

export interface UserResponse {
    firstName: string;
    lastName: string;
    email:string;
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface LoginResponse {
    user: UserResponse
    accessToken:string
}
export type userLoginDto = Pick<CreateUserDTO, 'email' | 'password'>;