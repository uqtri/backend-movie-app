import user from "../controllers/user.js";
import { tokenModel, userModel } from "../models/index.js";
import bcrypt from "bcrypt";
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
const registerUser = async ({ username, password, gmail, name }) => {
  console.log(username, password, "repository");
  try {
    const user = await userModel.findOne({ username });
    if (user) {
      throw new Error("User is already existed");
    }
    const userObject = {
      username,
      password,
      name,
      gmail,
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
const updateUser = async ({ username, gmail, phone, address, name }) => {
  try {
    let user = await userModel.updateOne(
      { username },
      {
        $set: {
          phone,
          gmail,
          address,
          name,
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
const resetPassword = async ({ token, username, newPassword }) => {
  try {
    const dbToken = await tokenModel.findOne({ username });
    const user = await userModel.findOne({ username });

    if (user === null || !dbToken) {
      throw new Error("user not exist or token is invalid");
    }
    console.log(await bcrypt.compare(token, dbToken.token), "CHECK");
    const isEqual = await bcrypt.compare(token, dbToken.token);
    console.log(isEqual, "!");
    if (!isEqual) {
      throw new Error("user not exist or token is invalid");
    }
    if (isEqual) {
      await userModel.updateOne(
        { username },
        {
          $set: {
            password: newPassword,
          },
        }
      );
    }
    return {
      oke: true,
    };
  } catch (error) {
    console.log(error.toString(), "HREE");
    throw error;
  }
};
const deleteUser = async ({ username, message }) => {
  try {
    await userModel.updateOne(
      { username },
      {
        $set: {
          message,
          isBanned: true,
        },
      }
    );
    return {
      status: "OKE",
    };
  } catch (erorr) {
    throw erorr;
  }
};
export default {
  registerUser,
  getUsers,
  getUserByUsername,
  updateUser,
  getEmailByUsername,
  resetPassword,
  deleteUser,
};
