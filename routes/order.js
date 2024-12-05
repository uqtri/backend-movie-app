import express from "express";
import { orderController } from "../controllers/index.js";
const router = express.Router();

router.post("/:username", orderController.postOrder);
router.get("/:username", orderController.getOrderByUsername);
export default router;
