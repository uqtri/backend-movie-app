import { feedbackRepository } from "../repositories/index.js";

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbackList = await feedbackRepository.getAllFeedback();

    res.status(200).json({
      data: feedbackList,
    });
  } catch (erorr) {
    res.status(404).json({
      message: "Not found feedback",
    });
  }
};

const addFeedback = async (req, res) => {
  const { username, feedback } = req.body;
  console.log(username, feedback, "@@");

  try {
    const newFeedback = await feedbackRepository.addFeedback({
      username,
      feedback,
    });
    if (newFeedback) {
      res.status(200).json({
        message: "Send feedback succesfully",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};
export default {
  getAllFeedbacks,
  addFeedback,
};
