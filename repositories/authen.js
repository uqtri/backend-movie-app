import { userModel } from "../models/index.js";
const authen = async ({ username, password }) => {
  try {
    const user = await userModel.findOne({ username, password });
    if (!user) {
      throw new Error("Wrong username or password");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
export default {
  authen,
};
