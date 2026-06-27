import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import { registerUser, loginUser } from "../services/auth.service.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import generateToken from "../utils/generateToken.js";
export const register = asyncHandler(async (req, res) => {

    const validatedData = registerSchema.parse(req.body);

    const user = await registerUser(validatedData);

    const token = generateToken(user);

    const { password, ...safeUser } = user;

    res.status(201).json(
        new ApiResponse(
            201,
            "User registered successfully",
            {
                token,
                user: safeUser
            }
        )
    );
});

export const login = asyncHandler(async (req, res) => {

    const validatedData = loginSchema.parse(req.body);

    const user = await loginUser(validatedData);

    const token = generateToken(user);

    // Remove password before sending response
    const { password, ...safeUser } = user;

    res.status(200).json(
        new ApiResponse(
            200,
            "Login successful",
            {
                token,
                user: safeUser
            }
        )
    );
});