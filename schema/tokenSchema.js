import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
  token: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 180,
  },
  username: String,
});

export default tokenSchema;
