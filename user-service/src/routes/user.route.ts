import {Router} from "express";
import * as usrController from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
const route = Router()

route.get("/me",authMiddleware,usrController.getUserProfile)
route.post("/register",usrController.userRegister)
route.post("/login",usrController.userLogin)

export default route;