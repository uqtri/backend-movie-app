import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  name: string,
  id: Number,
  price: Number,
});

const movieModel = mongoose.model("movie", movieSchema);
