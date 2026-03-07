import express from "express";
const router = express.Router();
import { HandleRequestController } from "../Deployment/uploadService/hadleRequest.controller.js";
import { handleRequestService } from "../Deployment/uploadService/handleRequest.service.js";

import { AuthenticationController } from "../Authentication/Auth.controller.js";
import { AuthenticationService } from "../Authentication/Auth.service.js";

const authServiceInstance = new AuthenticationController(
  new AuthenticationService(),
);

const handleRequestServiceInstance = new HandleRequestController(
  new handleRequestService(),
);

router.post("/deploy", authServiceInstance.verifyToken, (req, res) =>
  handleRequestServiceInstance.handleRequest(req, res),
);

export default router;
