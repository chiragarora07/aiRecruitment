import prisma from "../config/prisma.js";

// Apply to Drive
export const applyToDrive = async (req, res) => {
  try {
const { driveId } = req.body;
const userId = req.user.id;
    if (!userId || !driveId) {
      return res.status(400).json({
        success: false,
        message: "userId and driveId are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const drive = await prisma.drive.findUnique({
      where: { id: Number(driveId) },
    });

    if (!drive) {
      return res.status(404).json({
        success: false,
        message: "Drive not found",
      });
    }

    const existingApplication = await prisma.application.findFirst({
      where: {
        userId: Number(userId),
        driveId: Number(driveId),
      },
    });

    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message: "You have already applied for this drive.",
      });
    }

    const application = await prisma.application.create({
      data: {
        userId: Number(userId),
        driveId: Number(driveId),
        status: "Applied",
      },
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get All Applications
export const getAllApplications = async (req, res) => {
  try {
    const applications = await prisma.application.findMany({
      include: {
        user: true,
        drive: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await prisma.application.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
        drive: true,
      },
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.json({
      success: true,
      application,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const getApplicationsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const applications = await prisma.application.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        drive: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const getApplicationsByDrive = async (req, res) => {
  try {
    const { driveId } = req.params;

    const applications = await prisma.application.findMany({
      where: {
        driveId: Number(driveId),
      },
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const application = await prisma.application.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });

    res.json({
      success: true,
      message: "Application status updated successfully",
      application,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.application.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message: "Application deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};