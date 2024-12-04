import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();
const optionConfig = {
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};
const transporter = nodemailer.createTransport(optionConfig);

const sendMail = async (messageConfig) => {
  try {
    console.log(messageConfig, "@#!@#");
    const response = await transporter.sendMail(messageConfig);
    return response;
  } catch (error) {
    console.error("Error sending email:", error.toString());
  }
};
export { sendMail };
