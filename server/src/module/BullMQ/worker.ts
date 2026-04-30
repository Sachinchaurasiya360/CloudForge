import { Worker } from "bullmq";
import { connection } from "./Queue.js";
import logger from "../../utils/Logger/logger.js";
import { spawn } from "child_process";
import path from "path";

const BuildWorker = new Worker(
  "BuildQueue",
  async (job) => {
    logger.info(job.id, "Attempting the job");
    const containerName = job.data.deploymentId;
    const githubUrl = job.data.githubUrl;
    const outputPath = path.join(
      process.cwd(),
      "build",
      "output",
      containerName,
    );

    return new Promise((resolve, rejects) => {
      const command = spawn("docker", [ 
        "run",
        "--rm",
        "--name",
        containerName,
        "-v",
        `${outputPath}:/output`,
        "node:20-bullseye",
        "sh",
        "-c",
        `git clone ${githubUrl} /app && cd /app && npm install && npm run build `,
      ]);

      command.stdout.on("data", (data) => {
        logger.info(data.toString());
      });
      command.stderr.on("data", (error) => {
        logger.info(error.toString());
      });
      command.on("error", (err) => {
        rejects(err);
      });
      command.on("close", (code) => {
        if (code !== 0)
          return rejects(new Error(`Docker exited with code ${code}`));
        resolve("done");
      });
    });
  },
  {
    connection,
  },
);

BuildWorker.on("completed", (job) => {
  logger.info(job.id, "Has been completed");
});

BuildWorker.on("error", (job) => {
  logger.info(job, "Job has been failed ");
});
