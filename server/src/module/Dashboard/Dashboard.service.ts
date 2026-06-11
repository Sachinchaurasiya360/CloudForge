import prisma from "../../Database/db.js";

export class DashboardService {
  constructor() {}

  async createProject(projectName: string, techStack: any, usersId: any) {
    const createProject = await prisma.project.create({
      data: { projectName, techStack, usersId },
    });
  }

  async getAllProject(usersId: any) {
    const getAllProject = await prisma.project.findFirst({
      where: { usersId },
    });
    return getAllProject;
  }

  async deleteProject(usersId: any, projectId: number) {
    const DeleteProject = await prisma.project.delete({
      where: {
        usersId,
        id: projectId,
      },
    });

    return DeleteProject
  }


}
