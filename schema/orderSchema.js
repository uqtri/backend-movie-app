import mongoose from "mongoose";
import { movieSchema } from "./movieSchema.js";
const orderSchema = mongoose.Schema({
  id: String,
  total: String,
  username: String,
  date: String,
  products: [movieSchema],
});

export { orderSchema };
