import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Connect to db succesfully");
  } catch (error) {
    console.log(error);
  }
};
export default {
  connectToDB,
};
