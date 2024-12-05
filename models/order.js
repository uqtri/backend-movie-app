import mongoose from "mongoose";
import { orderSchema } from "../schema/orderSchema.js";

const orderModel = mongoose.model("order", orderSchema, "orders");

orderModel.createCollection().then(() => {
  console.log("Create order model succesfully");
});
export default orderModel;
