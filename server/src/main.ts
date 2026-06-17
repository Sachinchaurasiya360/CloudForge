import express from "express";
import logger from "./utils/Logger/logger.js";
import deploymentRouter from "./module/router/deploymentRouter.js";
import authRouter from "./module/router/authRouter.js";
import dashboardRouter from "./module/router/dashboardRouter.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import "./module/BullMQ/worker.js"


const app = express();
const PORT = process.env.PORT;

// Credentialed CORS: the origin must be explicit (not "*") for the browser
// to accept the httpOnly auth cookie. Configure the client URL via env.
app.use(
  cors({
    origin: process.env.CLIENT_URL ?? "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser())
app.use(express.json());

app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("/api/v1/deployment", deploymentRouter);
app.use("/api/v1/dashboard",dashboardRouter)
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
