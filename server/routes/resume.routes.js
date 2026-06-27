import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  uploadResume,
  getResumeAnalysis,
  getAllResumeAnalyses,
  deleteResume,
  getAllAnalysesController,
  getAnalysisByIdController,
} from "../controllers/resume.controller.js";

const router = express.Router();

router.post(
    "/upload",
    upload.single("resume"),
    uploadResume
);



router.get("/analysis", getAllAnalysesController);
router.get("/analysis/:id", getAnalysisByIdController);

router.get("/", getAllResumeAnalyses);
router.get("/:id", getResumeAnalysis);
router.delete("/analysis/:id", deleteResume);

export default router;