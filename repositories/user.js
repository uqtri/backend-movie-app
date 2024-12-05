import { userModel } from "../models/index.js";

const getEmailByUsername = async ({ username }) => {
  const user = await userModel.findOne({ username });
  return user.gmail;
};
const getUserByUsername = async ({ username }) => {
  try {
    const user = await userModel.findOne({ username });
    if (user === null) {
      throw new Error("User not existed");
    }
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
const updateUser = async ({ username, gmail, phone, address }) => {
  try {
    let user = await userModel.updateOne(
      { username },
      {
        $set: {
          username,
          gmail,
          address,
        },
      }
    );
    if (user === null) {
      throw new Error("User not existed");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
export default {
  registerUser,
  getUsers,
  getUserByUsername,
  updateUser,
  getEmailByUsername,
};
