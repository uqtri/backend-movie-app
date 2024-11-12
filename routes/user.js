import express from "express";
import { userController } from "../controllers/index.js";
import user from "../repositories/user.js";

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.registerUser);

export default router;
