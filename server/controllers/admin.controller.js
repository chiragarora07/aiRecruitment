import prisma from "../config/prisma.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalCandidates = await prisma.user.count({
      where: { role: "APPLICANT" },
    });

    const totalInterviewers = await prisma.user.count({
      where: { role: "INTERVIEWER" },
    });

    const totalResumes = await prisma.resumeAnalysis.count();

    res.json({
      success: true,
      data: {
        totalCandidates,
        totalInterviewers,
        totalResumes,
        totalDrives: 0,
        pendingInterviews: 0,
        completedInterviews: 0,
        averageATS: 0,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};