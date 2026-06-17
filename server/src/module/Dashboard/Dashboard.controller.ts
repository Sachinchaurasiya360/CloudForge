import type { Request, Response } from "express";
import { DashboardService } from "./Dashboard.service.js";
import { createProjectValidator } from "./Dashboard.validator.js";

export class DashboardController {
  constructor(private dashboardservice: DashboardService) {}

  async createProject(req: Request, res: Response) {
    try {
      const result = createProjectValidator.safeParse(req.body);
      console.log(result.data)
      if (!result.success) {
  return res.status(400).json({
    message: "Invalid project data",
    errors: result.error.flatten().fieldErrors,
    success: false,
  });
}
      const { projectName, techStack } = result.data;
      const usersId = (req as any).user?.userId;
      const createProject = await this.dashboardservice.createProject(
        projectName,
        techStack,
        usersId,
      );
      return res.status(201).json({
        message: "Project Created",
        status: true,
        t:createProject
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  }

  async getCreatedProject(req: Request, res: Response) {
    try {
      const usersId = (req as any).user?.userId;
      const AllProject = await this.dashboardservice.getAllProject(usersId);
      return res.status(200).json(AllProject);
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        status: false,
      });
    }
  }

  async deleteProject(req: Request, res: Response) {
    try {
      const { projectId } = req.body;
      const usersId = (req as any).user?.userId;
      const deleteProject = await this.dashboardservice.deleteProject(
        usersId,
        projectId,
      );

      return res.status(200).json({
        message: "Project Deleted",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        status: false,
      });
    }
  }
}
