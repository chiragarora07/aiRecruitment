import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import prisma from "../config/prisma.js";
import { createDriveSchema } from "../validators/drive.validator.js";
import { createDrive, getDrives } from "../services/drive.service.js";

export const createDriveController = asyncHandler(async (req, res) => {

    console.log("BODY:", req.body);

    const validatedData = createDriveSchema.parse(req.body);

    const drive = await createDrive(validatedData);

    res.status(201).json(
        new ApiResponse(
            201,
            "Drive created successfully",
            drive
        )
    );
});
export const getDrivesController = asyncHandler(async (req, res) => {

    const drives = await getDrives();

    res.status(200).json(
        new ApiResponse(
            200,
            "Drives fetched successfully",
            drives
        )
    );
});
export const getDriveByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const drive = await prisma.drive.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        organization: true,
      },
    });

    if (!drive) {
      return res.status(404).json({
        success: false,
        message: "Drive not found",
      });
    }

    res.json({
      success: true,
      drive,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const updateDriveController = async (req, res) => {
  try {
    const { id } = req.params;

    const drive = await prisma.drive.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

    res.json({
      success: true,
      message: "Drive updated successfully",
      drive,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const deleteDriveController = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.drive.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message: "Drive deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};