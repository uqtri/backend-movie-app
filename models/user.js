import mongoose from "mongoose";
import { movieSchema } from "../schema/movieSchema.js";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  gmail: String,
  phone: String,
  address: String,
  name: String,
  shoppingCart: [movieSchema],
  purchasedMovies: [movieSchema],
});

const userModel = mongoose.model("user", userSchema, "users");
userModel.createCollection().then(() => {
  console.log("Collection is created");
});
export default userModel;
