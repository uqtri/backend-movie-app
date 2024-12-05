import { tokenModel } from "../models/index.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();
const signToken = async ({ username }) => {
  try {
    const randomToken = crypto.randomBytes(32).toString("hex");
    const hashedtoken = await bcrypt.hash(
      randomToken,
      Number(process.env.SALT_OR_ROUNDS)
    );
    const token = await tokenModel.findOneAndUpdate(
      { username }, // Query: Look for an existing document with the given username
      {
        $set: {
          token: hashedtoken,
          username, // Optional, if you need to ensure the username is updated
        },
      },
      {
        new: true, // Return the updated document
        upsert: true, // Create the document if it doesn't exist
      }
    );
    return token;
  } catch (erorr) {
    throw erorr;
  }
};
export default {
  signToken,
};
