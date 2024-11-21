import express from "express";
import { movieController } from "../controllers/index.js";
const router = express.Router();
router.post("/buy/:username", movieController.postMovie);
router.post("/cart/:username", movieController.postMovieToShoppingCart);
router.delete("/cart/:username", movieController.deleteMovieFromShoppingCart);

export default router;
