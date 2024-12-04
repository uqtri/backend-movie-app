import mongoose, { Schema } from "mongoose";

const orderSchema = mongoose.Schema({
  total: Number,
  date: String,
});
