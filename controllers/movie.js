import { movieRepository } from "../repositories/index.js";
import { sendMail } from "../utils/mailer/mailer.js";
const postMovie = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  const movie = req.body;
  try {
    const purchasedMovies = await movieRepository.postMovie({
      username,
      movie,
    });
    const URL = "https://movie-box-it008.vercel.app/";
    const htmlText = `
      <p>Chúng tôi rất vui khi thông báo rằng bạn đã hoàn tất việc mua phim</strong> tại Movie Box. Đơn hàng của bạn đã được xử lý thành công và hiện tại bạn có thể thưởng thức bộ phim mà bạn đã chọn.</p>
      <p><strong>Thông tin đơn hàng:</strong></p>
      <ul>
        <li><strong>Phim:</strong> ${movie.name}</li>
        <li><strong>Ngày mua:</strong> "Date</li>
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
    const messageConfig = {
      from: "Movie Box <moviebox123321@gmail.com>",
      to: "ungquangtri1@gmail.com",
      subject: "NOTICE ABOUT PURCHASING",
      html: htmlText,
    };
    const response = await sendMail(messageConfig);
    res.status(200).json({
      statusCode: "200",
      purchasedMovies,
    });
  } catch (error) {
    res.status(400).json({
      statusCoded: "400",
      message: error.toString(),
    });
  }
};
const postMovieToShoppingCart = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  const movie = req.body;
  try {
    const shoppingCart = await movieRepository.postMovieToShoppingCart({
      username,
      movie,
    });
    res.status(200).json({
      statusCode: "200",
      shoppingCart,
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
      statusCode: "400",
    });
  }
};
const deleteMovieFromShoppingCart = async (req, res) => {
  const { username } = req.params || req.cookies["username"];
  const movie = req.body;

  try {
    const shoppingCart = await movieRepository.deleteMovieFromShoppingCart({
      username,
      movie,
    });
    res.status(200).json({
      message: "200",
      shoppingCart,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: "400",
      message: error.toString(),
    });
  }
};
export default {
  postMovie,
  postMovieToShoppingCart,
  deleteMovieFromShoppingCart,
};
