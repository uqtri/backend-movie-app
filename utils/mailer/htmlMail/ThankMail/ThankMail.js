import mailFrom from "../../../../common/mail/mailFrom.js";
import { userRepository } from "../../../../repositories/index.js";
import * as dotenv from "dotenv";
dotenv.config();

const URL = process.env.FRONTEND_URL;
const formatHtmlText = ({ products }) => {
  const productList = products
    .map((movie) => {
      return `
      <li>
        <strong>Phim: </strong> ${movie.name}
      </li>
        `;
    })
    .join("");
  const htmlText = `
      <p>Chúng tôi rất vui khi thông báo rằng bạn đã hoàn tất việc mua phim</strong> tại Movie Box. Đơn hàng của bạn đã được xử lý thành công và hiện tại bạn có thể thưởng thức bộ phim mà bạn đã chọn.</p>
      <p><strong>Thông tin đơn hàng:</strong></p>
      <ul>
        <li><strong>Ngày mua:</strong> ${new Date()}</li>
        ${productList}
      </ul>

      <p>Chúng tôi hy vọng bạn sẽ có những giây phút thư giãn tuyệt vời khi thưởng thức bộ phim này. Để xem phim, bạn có thể click vào đường link dưới đây:</p>

      <a href="${URL}" class="button">Xem phim ngay</a>

      <p>Nếu bạn gặp bất kỳ vấn đề nào trong quá trình xem phim hoặc có bất kỳ câu hỏi nào về đơn hàng, vui lòng phản hồi lại email này. Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn!</p>

      <p><strong>Những lý do bạn sẽ yêu thích bộ phim này:</strong></p>
      <ul>
        <li><strong>Chất lượng hình ảnh:</strong> Full HD với âm thanh vòm tuyệt vời.</li>
        <li><strong>Thể loại phong phú:</strong> Từ hành động, lãng mạn đến khoa học viễn tưởng.</li>
        <li><strong>Chúng tôi luôn cập nhật bộ phim mới nhất:</strong> Luôn có những bộ phim hot nhất hiện nay!</li>
      </ul>

      <p>Cảm ơn bạn đã tin tưởng và chọn Movie Box để giải trí. Hy vọng bạn sẽ có những trải nghiệm tuyệt vời và tiếp tục mua sắm tại đây trong tương lai.</p>

      <p>Trân trọng, <br>
      <strong>Movie Box Team</strong></p>`;
  return htmlText;
};

const ThankMailConfig = async ({ order }) => {
  const userGmail = await userRepository.getEmailByUsername({
    username: order.username,
  });

  const messageConfig = {
    from: mailFrom,
    to: userGmail,
    subject: "ĐẶT HÀNG TỪ MOVIE BOX",
    html: `${formatHtmlText({ products: order.products })}`,
  };
  return messageConfig;
};

export { ThankMailConfig };
