import { orderModel } from "../models/index.js";

const postOrder = async ({ order }) => {
  try {
    const newOrder = await orderModel.create(order);
    return newOrder;
  } catch (error) {
    throw error;
  }
};
const getOrderByUsername = async ({ username }) => {
  try {
    const orderList = await orderModel.find({ username });
    return orderList;
  } catch (erorr) {
    throw erorr;
  }
};
const getAllOrder = async () => {
  try {
    const allOrder = await orderModel.find({});
    return allOrder;
  } catch (erorr) {
    throw erorr;
  }
};
export default { postOrder, getOrderByUsername, getAllOrder };
