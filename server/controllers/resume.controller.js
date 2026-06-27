import asyncHandler from "../utils/asyncHandler.js";
import prisma from "../config/prisma.js";
import fs from "fs";
import { analyzeResume } from "../services/gemini.service.js";
import { createRequire } from "module";
import {
  deleteResumeAnalysis,
  getAllAnalyses,
  getAnalysisById,
} from "../services/resume.service.js";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

// Upload Resume
export const uploadResume = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume file.",
      });
    }
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer);

    const { applicationId } = req.body;
    console.log("Application ID:", applicationId);
let application = null;

if (applicationId) {
  application = await prisma.application.findUnique({
    where: {
      id: Number(applicationId),
    },
  });
}

    const aiResponse = await analyzeResume(data.text);

    const savedAnalysis = await prisma.resumeAnalysis.create({
      data: {
        fileName: req.file.originalname,
        resumeText: data.text,
        atsScore: aiResponse.atsScore,
        analysis: aiResponse,
      },
    });

  if (application) {
  await prisma.application.update({
    where: {
      id: Number(applicationId),
    },
    data: {
      resumeUrl: req.file.path,
      resumeAnalysisId: savedAnalysis.id,
      aiScore: aiResponse.atsScore,
    },
  });
}

    res.json({
      success: true,
      analysis: aiResponse,
      savedAnalysis,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:");
    console.error(error);
    console.error(error?.stack);

    res.status(500).json({
      success: false,
      message: "Resume analysis failed. Please try again later.",
    });
  }
};

// Get Resume Analysis by ID
export const getResumeAnalysis = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const analysis = await prisma.resumeAnalysis.findUnique({
      where: { id },
    });

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Resume analysis not found",
      });
    }

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Resume Analyses
export const getAllResumeAnalyses = async (req, res) => {
  try {
    const analyses = await prisma.resumeAnalysis.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      count: analyses.length,
      analyses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Resume Analysis
export const deleteResume = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);

  await deleteResumeAnalysis(id);

  res.status(200).json({
    success: true,
    message: "Resume analysis deleted successfully",
  });
});

// GET /api/resume/analysis
export const getAllAnalysesController = asyncHandler(async (req, res) => {
  const analyses = await getAllAnalyses();

  res.status(200).json({
    success: true,
    analyses,
  });
});

// GET /api/resume/analysis/:id
export const getAnalysisByIdController = asyncHandler(async (req, res) => {
  const analysis = await getAnalysisById(req.params.id);

  if (!analysis) {
    return res.status(404).json({
      success: false,
      message: "Analysis not found",
    });
  }

  res.status(200).json({
    success: true,
    analysis,
  });
});
