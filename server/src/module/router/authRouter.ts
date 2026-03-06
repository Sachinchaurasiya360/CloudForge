import express from "express";
const router = express.Router();    

import { AuthenticationController } from "../Authentication/Auth.controller.js";
import { AuthenticationService } from "../Authentication/Auth.service.js";

const authServiceInstance = new AuthenticationController(new AuthenticationService());

router.post("/signup",(req,res)=> authServiceInstance.signup(req,res))
router.post("/login",(req,res)=> authServiceInstance.Login(req,res))

export default router