import express from "express";
import { userController } from "../controllers/index.js";
const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.registerUser);
router.get("/:username", userController.getUserByUsername);
router.put("/reset-password", userController.resetPassword);
router.put("/:username", userController.updateUser);
export default router;
