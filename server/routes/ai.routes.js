import express from "express";
import { checkAI } from "../controllers/ai.controller.js";

const router = express.Router();

router.get("/test", checkAI);

export default router;