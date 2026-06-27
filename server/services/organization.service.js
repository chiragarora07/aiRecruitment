import prisma from "../config/prisma.js";
import ApiError from "../utils/apiError.js";

export const createOrganization = async (data, adminId) => {
    const { name, description, website, logo } = data;

    // Check if organization already exists
    const existingOrganization = await prisma.organization.findFirst({
        where: {
            name
        }
    });

    if (existingOrganization) {
        throw new ApiError(409, "Organization already exists");
    }

    // Create organization
    const organization = await prisma.organization.create({
        data: {
            name,
            description,
            website,
            logo,
            adminId
        }
    });

    return organization;
};
export const getOrganizations = async () => {
    return await prisma.organization.findMany({
        include: {
            admin: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    });
};
export const getOrganizationById = async (id) => {
    const organization = await prisma.organization.findUnique({
        where: {
            id
        },
        include: {
            admin: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            },
            drives: true
        }
    });

    if (!organization) {
        throw new ApiError(404, "Organization not found");
    }

    return organization;
};
export const updateOrganization = async (
    id,
    data,
    userId
) => {

    const organization = await prisma.organization.findUnique({
        where: { id }
    });

    if (!organization) {
        throw new ApiError(404, "Organization not found");
    }

    if (organization.adminId !== userId) {
        throw new ApiError(403, "You are not allowed to update this organization");
    }

    return await prisma.organization.update({
        where: { id },
        data
    });
};