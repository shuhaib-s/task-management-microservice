import { JwtPayload } from "../middlewares/auth.type"; 
declare global { namespace Express { interface Request { user: {id:string,email:string}; } } } 
export {};