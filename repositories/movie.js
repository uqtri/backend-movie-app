import { userModel } from "../models/index.js";

const postMovie = async ({ username, movie }) => {
  try {
    const user = await userModel.findOne({ username });
    user.purchasedMovies.push(movie);
    await user.save();
    return user.purchasedMovies;
  } catch (error) {
    throw error;
  }
};
const postMovieToShoppingCart = async ({ username, movie }) => {
  try {
    const user = await userModel.findOne({ username });
    user.shoppingCart.push(movie);
    await user.save();
    return user.shoppingCart;
  } catch (error) {
    throw error;
  }
};
const deleteMovieFromShoppingCart = async ({ username, movie }) => {
  try {
    const user = await userModel.findOne({ username });
    user.shoppingCart = user.shoppingCart.filter(
      (currentMovie) => movie._id !== currentMovie._id
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
