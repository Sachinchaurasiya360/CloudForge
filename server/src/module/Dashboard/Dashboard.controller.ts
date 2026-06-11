import type { Request, Response } from "express";
import { DashboardService } from "./Dashboard.service.js";
import { createProjectValidator } from "./Dashboard.validator.js";

export class DashboardController {
  constructor(private dashboardservice: DashboardService) {}

  async createProject(req: Request, res: Response) {
    try {
      const result = createProjectValidator.safeParse(req.body);
      if (!result.success) {
        throw new Error(result.error.flatten().toString());
      }
      const { projectName, techStack } = result.data;
      const usersId = (req as any).user?.id;
      const createProject = await this.dashboardservice.createProject(
        projectName,
        techStack,
        usersId,
      );
      return res.status(201).json({
        message: "Project Created",
        status: true,
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
      const usersId = (req as any).user?.id;
      const AllProject = await this.dashboardservice.getAllProject(usersId);
      return res.status(200).json({
        success: true,
        Project: AllProject,
      });
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
      const usersId = (req as any).user?.id;
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
