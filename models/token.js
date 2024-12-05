import { tokenSchema } from "../schema/index.js";
import mongoose from "mongoose";
const tokenModel = mongoose.model("token", tokenSchema, "tokens");

export default tokenModel;
