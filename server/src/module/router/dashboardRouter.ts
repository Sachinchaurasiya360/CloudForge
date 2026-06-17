import express from "express";
const router = express.Router()

import { DashboardController } from "../Dashboard/Dashboard.controller.js";
import { DashboardService } from "../Dashboard/Dashboard.service.js";
import { verifyToken } from "../../utils/middleware/index.js";


const DashboardServiceInstance= new DashboardController(new DashboardService )

router.post("/createproject", verifyToken, (req,res)=> DashboardServiceInstance.createProject(req,res))
router.get("/getallproject", verifyToken, (req,res)=> DashboardServiceInstance.getCreatedProject(req,res))
router.delete("/deleteproject", verifyToken, (req,res)=> DashboardServiceInstance.deleteProject(req,res))

export default router