import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import { createInterview } from "../services/interview.service.js";
import { createInterviewSchema } from "../validators/interview.validator.js";

export const createInterviewController = asyncHandler(async (req, res) => {
    const validatedData = createInterviewSchema.parse(req.body);

    const interview = await createInterview(validatedData);

    res.status(201).json(
        new ApiResponse(
            201,
            "Interview scheduled successfully",
            interview
        )
    );
});