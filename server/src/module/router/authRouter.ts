import express from "express";
const router = express.Router();

import { AuthenticationController } from "../Authentication/Auth.controller.js";
import { AuthenticationService } from "../Authentication/Auth.service.js";
import { verifyToken } from "../../utils/middleware/index.js";
const authServiceInstance = new AuthenticationController(
  new AuthenticationService(),
);

//Binding
router.post("/signup", (req, res) => authServiceInstance.signup(req, res));
router.post("/login", (req, res) => authServiceInstance.Login(req, res));
router.get("/me", verifyToken, (req, res) => authServiceInstance.me(req, res));
router.post("/logout", (req, res) => authServiceInstance.logout(req, res));

export default router;
