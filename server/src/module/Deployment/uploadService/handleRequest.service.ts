import { deployedProject } from "../../../Database/schema.js";
import { database } from "../../../Database/index.js";
import { BuildQueue } from "../../BullMQ/Queue.js";

export class handleRequestService {
  constructor() {}

  async createDeploymentId() {
    try {
      const deploymentId = crypto.randomUUID();
      return deploymentId;
    } catch (error) {
      throw new Error("Failed to create deployment ID");
    }
  }

  async storeGithubUrl(githubUrl: string, deploymentId: string, userId: number) {
    try {
      const result = await database.insert(deployedProject).values({
        deploymentId: deploymentId,
        githubUrl: githubUrl,
        userid: userId
        
      });
    } catch (error) {
      console.error("DB insert error:", error);
      throw new Error("Failed to store GitHub URL");
    }
  }

  async pushToQueue(deploymentId: string, githubUrl: string) {
    try {
      const pushResult = await BuildQueue.add("BuildQueue", {
        deploymentId: deploymentId,
        githubUrl: githubUrl,
      });
    } catch (error) {
      throw new Error("Failed to push deployment into BullMQ queue");
    }
  }
}
