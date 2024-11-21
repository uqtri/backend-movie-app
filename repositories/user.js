import { userModel } from "../models/index.js";

const getUserByUsername = async ({ username }) => {
  try {
    const user = await userModel.findOne({ username });
    return user;
  } catch (erorr) {
    throw erorr;
  }
};
const registerUser = async ({ username, password }) => {
  console.log(username, password, "repository");
  try {
    const user = await userModel.findOne({ username });
    if (user) {
      throw new Error("User is already existed");
    }
    const userObject = {
      username,
      password,
    };
    const newUser = await userModel.create(userObject);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const userList = await userModel.find();
    return userList;
  } catch (error) {
    throw error;
  }
};
export default {
  registerUser,
  getUsers,
  getUserByUsername,
};
