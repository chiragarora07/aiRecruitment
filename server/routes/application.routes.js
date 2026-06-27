import express from "express";
import {
  applyToDrive,
  getAllApplications,
  getApplicationById,
  getApplicationsByUser,
  getApplicationsByDrive,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/application.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
const router = express.Router();

router.get("/", getAllApplications);
router.get("/user/:userId", getApplicationsByUser);
router.get("/drive/:driveId", getApplicationsByDrive);
router.get("/:id", getApplicationById);
router.post("/apply", authMiddleware, applyToDrive);
router.patch(
  "/:id/status",
  authMiddleware,
  authorize("ADMIN"),
  updateApplicationStatus
);
router.delete("/:id", deleteApplication);
export default router;