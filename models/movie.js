import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  name: string,
});

const movieModel = mongoose.model("movie", movieSchema);
