import express from "express";
const router = express.Router();
import { HandleRequestController } from "../Deployment/uploadService/hadleRequest.controller.js";
import { handleRequestService } from "../Deployment/uploadService/handleRequest.service.js";

const handleRequestServiceInstance = new HandleRequestController(
  new handleRequestService(),
);

router.post("/deploy",(req,res)=> handleRequestServiceInstance.handleRequest(req,res))

export default router