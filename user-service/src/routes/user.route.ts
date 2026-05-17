import {Router} from "express";
import * as usrController from "../controllers/user.controller";
const route = Router()

route.get("/me",usrController.getUserProfile)
route.post("/register",usrController.userRegister)
route.post("/login",usrController.userLogin)

export default route;