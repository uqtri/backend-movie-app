import mongoose from "mongoose";
const movieSchema = mongoose.Schema({
  name: String,
  id: String,
  price: String,
});
export { movieSchema };
