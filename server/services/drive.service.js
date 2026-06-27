import prisma from "../config/prisma.js";
import ApiError from "../utils/apiError.js";

export const createDrive = async (data) => {

    const organization = await prisma.organization.findUnique({
        where: {
            id: data.organizationId
        }
    });

    if (!organization) {
        throw new ApiError(404, "Organization not found");
    }

    return await prisma.drive.create({
        data
    });
};
export const getDrives = async () => {
    return await prisma.drive.findMany({
        include: {
            organization: {
                select: {
                    id: true,
                    name: true,
                    logo: true
                }
            }
        }
    });
};