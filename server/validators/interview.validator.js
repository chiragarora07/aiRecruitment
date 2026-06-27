import { z } from "zod";

export const createInterviewSchema = z.object({
    applicationId: z.number(),

    interviewerName: z
        .string()
        .min(3, "Interviewer name is required"),

    interviewDate: z.coerce.date(),

    mode: z.enum(["Online", "Offline"]),

    meetingLink: z.string().url().optional(),

    status: z.enum([
        "SCHEDULED",
        "COMPLETED",
        "CANCELLED",
        "RESCHEDULED",
    ]).optional(),

    feedback: z.string().optional(),

    rating: z.number().min(1).max(5).optional(),
});