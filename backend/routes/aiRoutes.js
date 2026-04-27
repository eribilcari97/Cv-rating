import express from "express";
import { analyzeCV,showAllFeautures } from "../controllers/aiController.js";

const router = express.Router();

router.get("/",showAllFeautures);
router.post('/analyze',analyzeCV);

export default router;