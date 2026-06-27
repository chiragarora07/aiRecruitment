import { z } from "zod";

export const createDriveSchema = z.object({
    title: z.string().min(3, "Title is required"),

    description: z.string().min(10, "Description is required"),

    jobType: z.enum([
        "FULL_TIME",
        "PART_TIME",
        "INTERNSHIP",
        "CONTRACT"
    ]),

    location: z.string().min(2),

    salary: z.string().optional(),

    applicationDeadline: z.coerce.date(),

    organizationId: z.string()
});