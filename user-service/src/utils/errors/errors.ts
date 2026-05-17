import { AppError } from "./Base";

export class AlreadyExistError extends AppError{ 
    constructor(message:string){
        super(message,409)
    }
}

export class NotFoundError extends AppError{
    constructor(message:string){
        super(message,404)
    }

}


export class UnauthorizedError extends AppError{
    constructor(message:string= "Unauthorized action, token is required"){
        super(message,401)
    }
}