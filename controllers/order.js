import { orderRepository } from "../repositories/index.js";
import { httpStatusCode } from "../httpStatusCode/httpStatusCode.js";
import { sendThankYouMail } from "../utils/mailer/htmlMail/ThankMail/send.js";
const postOrder = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  const order = req.body;
  order.username = username;

  try {
    const newOrder = await orderRepository.postOrder({ order });
    const info = await sendThankYouMail({ order });

    res.status(httpStatusCode.OKE).json({
      stausCode: httpStatusCode.OKE,
      data: newOrder,
    });
  } catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      message: error.toString(),
      statusCode: httpStatusCode.BAD_REQUEST,
    });
  }
};
const getAllOrder = async (req, res) => {
  try {
    const allOrder = await orderRepository.getAllOrder();
    res.status(httpStatusCode.OKE).json({
      data: allOrder,
      stausCode: httpStatusCode.OKE,
    });
  } catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      message: error.toString(),
      stausCode: httpStatusCode.BAD_REQUEST,
    });
  }
};
const getOrderByUsername = async (req, res) => {
  const { username } = req.params || req.cookies["username"];

  try {
    const orderList = await orderRepository.getOrderByUsername({ username });
    res.status(httpStatusCode.OKE).json({
      data: orderList,
      statusCode: httpStatusCode.OKE,
    });
  } catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      message: error.toString(),
    });
  }
};
export default { postOrder, getOrderByUsername, getAllOrder };
