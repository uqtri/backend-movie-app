import { authenRepository } from "../repositories/index.js";

const authen = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authenRepository.authen({ username, password });
    if (user) {
      res.status(200).json({
        message: "Logined",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.toString().slice(6),
    });
  }
};
export default {
  authen,
};
