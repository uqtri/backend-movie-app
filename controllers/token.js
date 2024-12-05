import { httpStatusCode } from "../httpStatusCode/httpStatusCode.js";
import { tokenRepository } from "../repositories/index.js";
import { sendResetPasswordMail } from "../utils/mailer/htmlMail/ResetPasswordMail/send.js";
const resetPassword = async (req, res) => {
  const { username } = req.params;
  const { newPassword } = req.body;

  try {
    const token = await tokenRepository.signToken({ username });
    const response = await sendResetPasswordMail({ token });
    const status = tokenRepository.resetPassword({
      token,
      username,
      newPassword,
    });
    if (status.oke === true)
      res.status(httpStatusCode.OKE).json({
        message: "Your link for reseting password has been sent to your email",
        statusCode: httpStatusCode.OKE,
      });
    throw new Error("Failed to reset password");
  } catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      message: error.toString(),
      statusCode: httpStatusCode.BAD_REQUEST,
    });
  }
};

export default {
  resetPassword,
};
