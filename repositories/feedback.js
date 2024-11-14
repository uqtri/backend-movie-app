import feedback from "../controllers/feedback.js";
import { feedbackModel } from "../models/index.js";

const getAllFeedbacks = async () => {
  try {
    const feedbackList = await feedbackModel.find({});
    if (feedbackList) return feedbackList;
    throw new Error("Fail to conect to db");
  } catch (error) {
    throw error;
  }
};

const isValid = ({ username, feedback }) => {
  if (username === undefined || username == "") return false;
  if (feedback === undefined || feedback == "") return false;
  return true;
};
const addFeedback = async ({ username, feedback }) => {
  if (!isValid({ username, feedback })) {
    throw new Error("feedback or username should not be empty");
  }
  try {
    const newFeedback = await feedbackModel.create({
      username,
      feedback,
    });
    if (newFeedback) return newFeedback;
    throw new Error("Fail to conencto db");
  } catch (error) {
    throw error;
  }
};
export default {
  getAllFeedbacks,
  addFeedback,
};
