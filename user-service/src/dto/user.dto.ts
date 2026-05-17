interface User {
    firstName: string;
    lastName: string;
    email:string;
    password:string | number;
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
 