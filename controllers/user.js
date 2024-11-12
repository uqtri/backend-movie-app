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


const registerUser = async (req, res) => {
  const { username, password } = req.body;
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
};
