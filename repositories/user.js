import { userModel } from "../models/index.js";
const authen = async ({ username, password }) => {
  try {
    const user = await userModel.findOne({ username, password });
    if (!user) {
      throw new Error("Wrong username or password");
    }
  } catch (error) {
    throw error;
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
};
