import prisma from "../../Database/db.js";
import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
  CopyObjectCommand,
} from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: process.env.AWS_REGION! });

export class DashboardService {
  constructor() {}

  async createProject(
    projectName: string,
    techStack: any,
    usersId: any,
    AwsProjectFileUrl: string,
  ) {
    const createProject = await prisma.project.create({
      data: { projectName, techStack, usersId, AwsProjectFileUrl },
    });

    return createProject;
  }

  async getAllProject(usersId: any) {
    const getAllProject = await prisma.project.findMany({
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

    return DeleteProject;
  }

  // For prod we can use the EBS and EFS
  async createCopyOnAWS(techStack: string, projectName: string) {
    const randomno = crypto.randomUUID().slice(0, 5);
    const newProjectName = projectName + randomno;
    const templatePrefix = `template/${techStack}`;

    //It will return the content/file path like this

    // Contents: [
    //   { Key: "templates/react/package.json" },
    //   { Key: "templates/react/src/App.tsx" },
    //   { Key: "templates/react/src/main.tsx" }

    const listFiles = await s3.send(
      new ListObjectsV2Command({
        Bucket: process.env.AWS_S3_BUCKET,
        Prefix: templatePrefix,
      }),
    );

    // simultanously copying it to another folder
    await Promise.all(
      (listFiles.Contents || []).map(async (file) => {
        if (!file.Key) return;
        const newKey = file.Key.replace(templatePrefix, newProjectName);
        await s3.send(
          new CopyObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            CopySource: `${process.env.AWS_S3_BUCKET}/${file.Key}`,
            Key: newKey,
          }),
        );
      }),
    );

    const projectUrl = `s3://${process.env.AWS_S3_BUCKET}/${newProjectName}`;

    return projectUrl;
  }
}
