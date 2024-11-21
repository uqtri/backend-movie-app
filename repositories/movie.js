import { userModel } from "../models/index.js";

const postMovie = async ({ username, movieName }) => {
  try {
    const user = await userModel.findOne({ username });
    user.purchasedMovies.push({ name: movieName });
    await user.save();
    return user.purchasedMovies;
  } catch (error) {
    throw error;
  }
};
const postMovieToShoppingCart = async ({ username, movieName }) => {
  try {
    const user = await userModel.findOne({ username });
    user.shoppingCart.push({ name: movieName });
    await user.save();
    return user.shoppingCart;
  } catch (error) {
    throw error;
  }
};
const deleteMovieFromShoppingCart = async ({ username, movieName }) => {
  try {
    const user = await userModel.findOne({ username });
    user.shoppingCart = user.shoppingCart.filter(
      (movie) => movie.name !== movieName
    );
    user.save();
    return user.shoppingCart;
  } catch (error) {
    throw error;
  }
};
export default {
  postMovie,
  postMovieToShoppingCart,
  deleteMovieFromShoppingCart,
};
