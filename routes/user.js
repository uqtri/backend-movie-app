import express from "express";
import { userController } from "../controllers/index.js";
const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:username", userController.getUserByUsername);

router.post("/", userController.registerUser);
router.put("/reset-password", userController.resetPassword);
router.put("/:username", userController.updateUser);
router.delete("/:username", userController.deleteUser);

export default router;
