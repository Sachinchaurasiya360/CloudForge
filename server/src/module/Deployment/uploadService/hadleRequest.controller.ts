import { handleRequestService } from "./handleRequest.service.js";
import type { Request, Response } from "express";
import { handleRequestValidator } from "./handleReques.validator.js";
import logger from "../../../utils/Logger/logger.js";

export class HandleRequestController {
  constructor(private handleRequestService: handleRequestService) {}

  async handleRequest(req: Request, res: Response) {
    try {
      const result = handleRequestValidator.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid github URL",
          success: false,
          error: result.error.flatten().fieldErrors,
        });
      }
      logger.info(
        { githubUrl: result.data.githuburl },
        "Received deployment request with GitHub URL",
      );
      const generateDeploymentId =
        await this.handleRequestService.createDeploymentId();
      console.log(generateDeploymentId);
      
      const saveGithuburl = await this.handleRequestService.storeGithubUrl(
        result.data.githuburl,
        generateDeploymentId,
      );
      console.log(saveGithuburl);

      const pustToQueue = await this.handleRequestService.pushToQueue(
        generateDeploymentId,
        result.data.githuburl,
      );
      return res.status(200).json({
        message:"Deployment request received and is being processed",
        success:true,
        deploymentId:generateDeploymentId
      })

    } catch (error) {
      logger.info(
        { error },
        "Internal Server error while handling deployment request",
      );
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
