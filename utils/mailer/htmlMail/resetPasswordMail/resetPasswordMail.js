import mailFrom from "../../../../common/mail/mailFrom.js";
import { userRepository } from "../../../../repositories/index.js";
import * as dotenv from "dotenv";
dotenv.config();
const URL = process.env.FRONTEND_URL;
const formatHtmlText = ({ token }) => {
  const resetLink =
    URL + `/reset-password?username=${token.username}&token=${token.token}`;
  const htmlText = `
    <p>Xin chào <strong>${token.username}</strong>,</p>

    <p>Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn tại Movie Box. Nếu bạn đã yêu cầu đặt lại mật khẩu, vui lòng nhấp vào liên kết dưới đây để thiết lập mật khẩu mới:</p>

    <p>
      <a href="${resetLink}" style="display: inline-block; background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">
        Đặt lại mật khẩu
      </a>
    </p>

    <p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này. Mật khẩu của bạn sẽ không bị thay đổi.</p>

    <p>Để bảo mật tài khoản của bạn, hãy đảm bảo không chia sẻ liên kết này với bất kỳ ai.</p>

    <p><strong>Lưu ý:</strong> Liên kết này sẽ hết hạn sau 3 phút kể từ khi bạn nhận được email này. Hãy đảm bảo hoàn tất việc đặt lại mật khẩu trong thời gian này.</p>

    <p>Trân trọng, <br>
    <strong>Đội ngũ hỗ trợ Movie Box</strong></p>
  `;

  return htmlText;
};

const resetPasswordMailConfig = async ({ token }) => {
  const userGmail = await userRepository.getEmailByUsername({
    username: token.username,
  });

  const messageConfig = {
    from: mailFrom,
    to: userGmail,
    subject: "ĐẶT LẠI MẬT KHẨU TỪ MOVIE BOX",
    html: `${formatHtmlText({ token })}`,
  };
  return messageConfig;
};

export { resetPasswordMailConfig };
