import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  name: String,
  id: String,
  price: String,
});

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  gmail: String,
  shoppingCart: [movieSchema],
  purchasedMovies: [movieSchema],
});

const userModel = mongoose.model("user", userSchema, "users");
userModel.createCollection().then(() => {
  console.log("Collection is created");
});
export default userModel;
