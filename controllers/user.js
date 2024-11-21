import { userRepository } from "../repositories/index.js";

const getUsers = async (req, res) => {
  try {
    let userList = await userRepository.getUsers();

    userList = userList.map((value, index) => {
      return { ...value.toObject(), password: "" };
    });

    return res.status(200).json({
      data: { userList },
    });
  } catch (error) {
    res.status(400).json({});
  }
};

const getUserByUsername = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  console.log("TRI");
  if (!username) {
    res.status(400).json({
      message: "Need an username",
      statusCode: "400",
    });
  }
  try {
    const user = await userRepository.getUserByUsername({ username });
    const returnedUser = { ...user._doc, password: "" };
    res.status(200).json({
      data: returnedUser,
      statusCode: "200",
    });
  } catch (error) {
    res.status(400).json({
      statusCode: "400",
      message: "Need an username",
    });
  }
};
const registerUser = async (req, res) => {
  console.log(req, "REQ");
  const { username, password } = req.body;
  console.log(username, password, "controller");
  try {
    const newUser = await userRepository.registerUser({ username, password });
    if (newUser) {
      return res.status(200).json({
        message: "Register succesfully",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.toString().slice(7),
    });
  }
};
export default {
  registerUser,
  getUsers,
  getUserByUsername,
};
