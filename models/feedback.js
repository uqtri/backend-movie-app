import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  username: String,
  feedback: String,
});

const feedbackModel = mongoose.model("feedback", feedbackSchema, "feedbacks");

feedbackModel.createCollection().then(() => {
  console.log("Create feedbacks collection succesfully");
});
export default feedbackModel;
