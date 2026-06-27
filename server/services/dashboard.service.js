import prisma from "../config/prisma.js";

export const getDashboardStats = async () => {

    const [
        totalCandidates,
        totalInterviewers,
        totalOrganizations,
        activeDrives,
        pendingInterviews,
        completedInterviews,
        applications,
        resumeUploadsToday
    ] = await Promise.all([

        prisma.user.count({
            where: {
                role: "APPLICANT"
            }
        }),

        prisma.user.count({
            where: {
                role: "INTERVIEWER"
            }
        }),

        prisma.organization.count(),

        prisma.drive.count({
            where: {
                status: "OPEN"
            }
        }),

        prisma.interview.count({
            where: {
                status: "SCHEDULED"
            }
        }),

        prisma.interview.count({
            where: {
                status: "COMPLETED"
            }
        }),

        prisma.application.findMany({
            select: {
                aiScore: true
            }
        }),

        prisma.resumeAnalysis.count({
            where: {
                createdAt: {
                    gte: new Date(new Date().setHours(0,0,0,0))
                }
            }
        })

    ]);

    let averageATS = 0;

    if(applications.length){

        const total = applications.reduce((sum,a)=>sum+(a.aiScore || 0),0);

        averageATS = Math.round(total/applications.length);

    }

    return {

        totalCandidates,

        totalInterviewers,

        totalOrganizations,

        activeDrives,

        pendingInterviews,

        completedInterviews,

        averageATS,

        resumeUploadsToday

    };

};