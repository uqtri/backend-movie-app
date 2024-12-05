import { resetPasswordMailConfig } from "./resetPasswordMail.js";
import { sendMail } from "../../mailer.js";
const sendResetPasswordMail = async ({ token }) => {
  const info = await sendMail(await resetPasswordMailConfig({ token }));
  return info;
};

export { sendResetPasswordMail };
