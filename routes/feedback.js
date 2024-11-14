import express from "express";
import { feedbackController } from "../controllers/index.js";
const router = express.Router();

router.get("/", feedbackController.getAllFeedbacks);
router.post("/", feedbackController.addFeedback);

export default router;
