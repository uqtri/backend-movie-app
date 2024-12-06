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
      { username },
      {
        $set: {
          token: hashedtoken,
          username,
        },
      },
      {
        new: true, // Return the updated document
        upsert: true,
      }
    );
    console.log("CHECK!@#", await bcrypt.compare(randomToken, hashedtoken));
    console.log(randomToken, " ", hashedtoken, "HERE");
    return { token: randomToken, username };
  } catch (erorr) {
    throw erorr;
  }
};
export default {
  signToken,
};
