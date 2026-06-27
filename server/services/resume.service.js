import prisma from "../config/prisma.js";

export const deleteResumeAnalysis = async (id) => {
  const existing = await prisma.resumeAnalysis.findUnique({
    where: { id },
  });

  if (!existing) {
    throw new Error("Resume analysis not found");
  }

  await prisma.resumeAnalysis.delete({
    where: { id },
  });

  return true;
};

export const getAllAnalyses = async () => {
  return await prisma.resumeAnalysis.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getAnalysisById = async (id) => {
  return await prisma.resumeAnalysis.findUnique({
    where: { id: Number(id) },
  });
};

export default {
  deleteResumeAnalysis,
  getAllAnalyses,
  getAnalysisById,
};