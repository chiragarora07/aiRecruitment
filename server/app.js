import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import applicationRoutes from "./routes/application.routes.js";
// Routes
import authRoutes from "./routes/auth.routes.js";
import organizationRoutes from "./routes/organization.routes.js";
import driveRoutes from "./routes/drive.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import interviewRoutes from "./routes/interview.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
// Middleware (uncomment if you have it)
// import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------- GLOBAL MIDDLEWARE -------------------- */

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/applications", applicationRoutes);
/* ----------------------- ROUTES ----------------------- */
app.use("/api/admin", adminRoutes);
app.get("/", (req, res) => {
  res.send("HireFlow Backend Running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/drives", driveRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/dashboard",dashboardRoutes);

/* ---------------- ERROR HANDLER ---------------- */

// Uncomment when your error middleware is ready
// app.use(errorMiddleware);

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});