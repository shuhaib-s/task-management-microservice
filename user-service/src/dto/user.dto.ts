
export interface CreateUserDTO {
    firstName: string;
    lastName: string;
    email:string;
    password:string | number;
} 

export interface UserResponse {
    firstName: string;
    lastName: string;
    email:string;
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}