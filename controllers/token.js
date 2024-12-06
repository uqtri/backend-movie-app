import { httpStatusCode } from "../httpStatusCode/httpStatusCode.js";
import { tokenRepository } from "../repositories/index.js";
import { sendResetPasswordMail } from "../utils/mailer/htmlMail/resetPasswordMail/send.js";
const resetPassword = async (req, res) => {
  const { username } = req.params;
  try {
    const token = await tokenRepository.signToken({ username });
    console.log(token, "TOKENNN");
    const response = await sendResetPasswordMail({ token });

    res.status(httpStatusCode.OKE).json({
      message: "Your link for reseting password has been sent to your email",
      statusCode: httpStatusCode.OKE,
    });
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
