import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema, "users");
userModel.createCollection().then(() => {
  console.log("Collection is created");
});
export default userModel;
