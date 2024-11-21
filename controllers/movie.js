import { movieRepository } from "../repositories/index.js";
const postMovie = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  const { movieName } = req.body;
  try {
    const purchasedMovies = await movieRepository.postMovie({
      username,
      movieName,
    });
    res.status(200).json({
      statusCode: "200",
      purchasedMovies,
    });
  } catch (error) {
    res.status(400).json({
      statusCoded: "400",
      message: error.toString(),
    });
  }
};
const postMovieToShoppingCart = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  const { movieName } = req.body;

  try {
    const shoppingCart = await movieRepository.postMovieToShoppingCart({
      username,
      movieName,
    });
    res.status(200).json({
      statusCode: "200",
      shoppingCart,
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
      statusCode: "400",
    });
  }
};
const deleteMovieFromShoppingCart = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  const { movieName } = req.body;

  try {
    const shoppingCart = await movieRepository.deleteMovieFromShoppingCart({
      username,
      movieName,
    });
    res.status(200).json({
      message: "200",
      shoppingCart,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: "400",
      message: error.toString(),
    });
  }
};
export default {
  postMovie,
  postMovieToShoppingCart,
  deleteMovieFromShoppingCart,
};
