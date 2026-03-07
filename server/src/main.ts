import express from "express";
import logger from "./utils/Logger/logger.js";
import deploymentRouter from "./module/router/deploymentRouter.js";
import authRouter from "./module/router/authRouter.js";
import cookieParser from "cookie-parser"
import "./module/BullMQ/worker.js"


const app = express();
const PORT = process.env.PORT;
app.use(cookieParser())


app.use(express.json());
app.use("/api/v1/deployment", deploymentRouter);
app.use("/api/v1/auth", authRouter);

app.get("/health", (req, res) => {
  return res.status(200).json({
    message: "server is healthy and running ",
    success: true,
  });
});

app.listen(PORT, () => {
  logger.info(`Server is running  on ${PORT}`);
});
