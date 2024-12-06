import { ThankMailConfig } from "./ThankMail.js";
import { sendMail } from "../../mailer.js";
const sendThankYouMail = async ({ order }) => {
  const info = await sendMail(await ThankMailConfig({ order }));
  return info;
};

export { sendThankYouMail };
