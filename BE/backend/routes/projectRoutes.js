import express from "express";
import { projectPost, getAllProject } from "../controllers/projectController.js";

const router = express.Router();


router.route('/create').post(projectPost);

router.route('/getAllProjects').get(getAllProject);

export default router;