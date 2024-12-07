import { httpStatusCode } from "../httpStatusCode/httpStatusCode.js";
import { authenRepository } from "../repositories/index.js";

const authen = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authenRepository.authen({ username, password });
    if (user.isBanned === false) {
      res.status(200).json({
        message: "Logined",
        httpStatusCode: httpStatusCode.OKE,
      });
    } else {
      res.status(httpStatusCode.BAD_REQUEST).json({
        status: "Banned",
        message: user.message,
        statusCode: httpStatusCode.BAD_REQUEST,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.toString().slice(6),
      statusCode: httpStatusCode.BAD_REQUEST,
    });
  }
};
export default {
  authen,
};
