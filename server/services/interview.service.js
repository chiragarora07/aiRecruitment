import prisma from "../config/prisma.js";
import ApiError from "../utils/apiError.js";

export const createInterview = async (data) => {
    const application = await prisma.application.findUnique({
        where: {
            id: data.applicationId,
        },
    });

    if (!application) {
        throw new ApiError(404, "Application not found");
    }

    return await prisma.interview.create({
        data,
    });
};