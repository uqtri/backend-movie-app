import { query } from "express";
import { httpStatusCode } from "../httpStatusCode/httpStatusCode.js";
import { userRepository } from "../repositories/index.js";

const resetPassword = async (req, res) => {
  const { token, username } = req.query;
  const { newPassword } = req.body;
  console.log(req.body);

  console.log(token, username);
  try {
    const user = await userRepository.resetPassword({
      token,
      username,
      newPassword,
    });
    res.status(httpStatusCode.OKE).json({
      message: "Change password succesfully",
      statusCode: httpStatusCode.OKE,
    });
  } catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      message: error.toString(),
      statusCode: httpStatusCode.BAD_REQUEST,
    });
  }
};
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

const updateUser = async (req, res) => {
  const { gmail, phone, address } = req.body;
  const { username } = req.params || req.cookies["username"];

  try {
    const updatedUser = await userRepository.updateUser({
      username,
      gmail,
      phone,
      address,
    });
    res.status(httpStatusCode.OKE).json({
      data: updatedUser,
      statusCode: httpStatusCode.OKE,
    });
  } catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      stausCode: httpStatusCode.BAD_REQUEST,
      message: error.toString(),
    });
  }
};
const getUserByUsername = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  if (username === undefined) {
    return res.status(400).json({
      message: "Need an username",
      statusCode: httpStatusCode.BAD_REQUEST,
    });
  }
  try {
    const user = await userRepository.getUserByUsername({ username });
    const returnedUser = { ...user._doc, password: "" };
    res.status(200).json({
      data: returnedUser,
      statusCode: httpStatusCode.OKE,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: httpStatusCode.BAD_REQUEST,
      message: "Need an username",
    });
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
  getUserByUsername,
  updateUser,
  resetPassword,
};
