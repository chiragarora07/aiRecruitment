import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import { createOrganizationSchema } from "../validators/organization.validator.js";
import {
    createOrganization,
    getOrganizations,
    getOrganizationById
} from "../services/organization.service.js";
import { updateOrganizationSchema } from "../validators/organization.validator.js";
import { updateOrganization } from "../services/organization.service.js";
export const createOrganizationController = asyncHandler(async (req, res) => {

    const validatedData = createOrganizationSchema.parse(req.body);

    const organization = await createOrganization(
        validatedData,
        req.user.id
    );

    res.status(201).json(
        new ApiResponse(
            201,
            "Organization created successfully",
            organization
        )
    );
});
export const getOrganizationsController = asyncHandler(async (req, res) => {

    const organizations = await getOrganizations();

    res.status(200).json(
        new ApiResponse(
            200,
            "Organizations fetched successfully",
            organizations
        )
    );
});
export const getOrganizationByIdController = asyncHandler(async (req, res) => {

    const organization = await getOrganizationById(req.params.id);

    res.status(200).json(
        new ApiResponse(
            200,
            "Organization fetched successfully",
            organization
        )
    );
});
export const updateOrganizationController = asyncHandler(async (req, res) => {

    const validatedData = updateOrganizationSchema.parse(req.body);

    const organization = await updateOrganization(
        req.params.id,
        validatedData,
        req.user.id
    );

    res.status(200).json(
        new ApiResponse(
            200,
            "Organization updated successfully",
            organization
        )
    );
});
export const deleteOrganizationController = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.organization.delete({
      where: {
        id,
      },
    });

    res.json({
      success: true,
      message: "Organization deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};