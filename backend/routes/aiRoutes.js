import express from "express";
import { analyzeCv,showAllFeautures } from "../controllers/aiController.js";

const router = express.Router();

router.get("/",showAllFeautures);
router.get('/analyze',analyzeCv);

export default router;