import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import prisma from "../config/prisma.js";
import {
    createDriveController,
    getDrivesController,
    getDriveByIdController,
    updateDriveController,
    deleteDriveController
} from "../controllers/drive.controller.js";
const router = express.Router();

router.post(
    "/",
    authMiddleware,
    authorize("ADMIN"),
    createDriveController
);
router.get(
    "/",
    authMiddleware,
    getDrivesController
);
router.get(
    "/:id",
    authMiddleware,
    getDriveByIdController
);
router.put(
    "/:id",
    authMiddleware,
    authorize("ADMIN"),
    updateDriveController
);
router.delete(
    "/:id",
    authMiddleware,
    authorize("ADMIN"),
    deleteDriveController
);
export default router;