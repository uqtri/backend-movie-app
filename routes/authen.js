import express from "express";
import { authenController } from "../controllers/index.js";

const router = express.Router();
router.post("/", authenController.authen);

export default router;
