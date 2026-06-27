import { z } from "zod";

export const createOrganizationSchema = z.object({
    name: z
        .string()
        .min(2, "Organization name must be at least 2 characters"),

    description: z
        .string()
        .optional(),

    website: z
        .string()
        .url("Invalid website URL")
        .optional(),

    logo: z
        .string()
        .optional()
});
export const updateOrganizationSchema = createOrganizationSchema.partial();