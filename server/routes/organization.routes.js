import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import {
    createOrganizationController,
    getOrganizationsController,
    getOrganizationByIdController,
    updateOrganizationController,
    deleteOrganizationController
} from "../controllers/organization.controller.js";
const router = express.Router();

router.post(
    "/",
    authMiddleware,
    authorize("ADMIN"),
    createOrganizationController
);
router.get(
    "/",
    getOrganizationsController
);
router.get(
    "/:id",
    authMiddleware,
    getOrganizationByIdController
);
router.put(
    "/:id",
    authMiddleware,
    authorize("ADMIN"),
    updateOrganizationController
);
router.delete(
    "/:id",
    authMiddleware,
    authorize("ADMIN"),
    deleteOrganizationController
);
export default router;