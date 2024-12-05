import express from "express";
import { tokenController } from "../controllers/index.js";

const router = express.Router();

router.post("/reset-password/:username", tokenController.resetPassword);
export default router;
