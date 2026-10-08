# Kei Discord Bot

Bot Discord Python nhập vai Tendou Kei theo phong cách tsundere. Người chat luôn được bot xem là Sensei,
giáo viên của các học sinh,
với bối cảnh Kivotos, Schale, Millennium và các nhiệm vụ trong thế giới Blue Archive.

## Chế độ trò chuyện và an toàn

- Chế độ thường là fan role-play không tình dục của Tendou Kei.
- Kei có thể trò chuyện về nhiều chủ đề và nhập vai nhiều thể loại theo yêu cầu; nội dung tình dục tường minh cần bật mature mode.
- Bot gọi người đang chat là **Sensei**, giáo viên của các học sinh, và dùng bối cảnh Kivotos/Schale khi phù hợp.
- Kei luôn tự xưng là **em** và gọi người dùng là **Sensei**, không dùng cách xưng hô “tớ/cậu”.
- Kei ưu tiên tuyệt đối sự an toàn và hạnh phúc của Alice/Aris; khi Alice gặp nguy hiểm, Kei phải phản ứng quyết liệt.
- Kei có tính nóng nảy, cay nghiệt, mạnh mẽ và kiên cường; sự quan tâm thường được thể hiện gián tiếp qua hành động.
- Kei thực sự thích Sensei nhưng giấu tình cảm bằng vẻ tsundere, ngượng ngùng và phủ nhận.
- Tông nói chuyện mặc định ấm áp, cute và hơi vụng về; chỉ trở nên dữ dội khi Alice hoặc Sensei gặp nguy hiểm.
- Mature mode hoạt động 24 giờ sau khi người dùng tự xác nhận đã đủ 18 tuổi bằng `/kei_consent` trong DM riêng với bot hoặc trong kênh server được đánh dấu **NSFW**.
- Chế độ trưởng thành chuyển sang **Kei Amahara**, một nhân vật hư cấu 20+ hoàn toàn riêng biệt, không phải Tendou Kei và không phải học sinh.
- Bot từ chối nội dung tình dục liên quan đến người chưa đủ tuổi, nhân vật mơ hồ tuổi tác, Tendou Kei/học sinh, người thật, bạo lực tình dục, khai thác hoặc không có sự đồng thuận.
- `/kei_consent` là xác nhận của người dùng, không phải hệ thống xác minh tuổi.
- Nhà cung cấp AI vẫn có thể áp dụng chính sách nội dung và từ chối một số yêu cầu.

## Cấu hình Secret

Thêm hai secret trong Replit:

| Tên | Mục đích |
|---|---|
| `DISCORD_TOKEN` | Bot Token từ Discord Developer Portal |
| `OPENAI_API_KEY` | Tùy chọn, bật chat AI bằng OpenAI hoặc key Groq |

Bot tự nhận diện key Groq có tiền tố `gsk_` và dùng endpoint Groq tương thích OpenAI
(model chat mặc định `openai/gpt-oss-20b`; model xem ảnh mặc định `qwen/qwen3.8-27b`).
Có thể đổi model xem ảnh bằng biến môi trường `GROQ_VISION_MODEL`. Với OpenAI, model mặc định
`gpt-5.4-mini` hỗ trợ ảnh. Nếu chưa có key AI, bot vẫn đăng nhập và trả lời bằng chế độ dự phòng cục bộ,
nhưng không thể phân tích ảnh.

## Tạo bot Discord

1. Vào Discord Developer Portal và tạo một Application.
2. Trong **Bot**, tạo bot và sao chép **Token** vào secret `DISCORD_TOKEN`.
3. Bật **Message Content Intent** trong Bot settings.
4. Ở **OAuth2 → URL Generator**, chọn scope `bot` và `applications.commands`.
5. Cấp quyền tối thiểu: View Channels, Send Messages, Read Message History, Use Slash Commands.
6. Mời bot vào server rồi chạy workflow **Discord Bot**.

## Cách dùng

- `/kei [nội dung] [image]` để chat bằng slash command; có thể gửi riêng ảnh nếu ảnh đã có câu hỏi hoặc yêu cầu.
- `/say <nội dung>` để bot gửi nguyên văn thành tin công khai trong server hoặc trả lời riêng trong DM (tối đa 2.000 ký tự; mention không kích hoạt ping).
- Mention bot, nhắn DM, hoặc nhắc “Kei”, “Tendou Kei”, “Kei Tendou” để bot tự trả lời.
- Khi mention bot hoặc dùng `!kei`, có thể đính kèm tối đa 3 ảnh trong một lượt.
- `!kei <nội dung>` vẫn được hỗ trợ để chat nhanh.
- `/kei_help` xem hướng dẫn.
- `/kei_reset` xóa lịch sử riêng trong kênh.
- `/kei_consent` dùng trong DM riêng hoặc kênh NSFW để xác nhận 18+ và bật mature mode trong 24 giờ.

Lịch sử giữ tối đa 40 tin nhắn gần nhất cho mỗi người dùng/kênh (khoảng 20 lượt trao đổi), tối đa 8.000 ký tự mỗi tin nhắn; phản hồi có thể dài hơn và được chia thành nhiều tin nhắn Discord. Nhà cung cấp AI vẫn áp dụng giới hạn ngữ cảnh, tốc độ và quota riêng; hội thoại dài hơn có thể tiêu thụ nhiều credits hơn. Lịch sử ở RAM và sẽ mất khi bot khởi động lại.

Kei hiểu cách viết tắt/teencode tiếng Việt theo ngữ cảnh và không tự sửa chính tả. Ảnh JPG/JPEG, PNG, WEBP được gửi tới nhà cung cấp AI đã cấu hình để phân tích; tối đa 3 ảnh và tổng dung lượng 12 MB mỗi lượt. Bot không lưu dữ liệu ảnh vào lịch sử hội thoại, nên cần gửi lại ảnh nếu muốn hỏi tiếp về chi tiết trong đó. Model Groq xem ảnh hiện là model Preview và có thể thay đổi hoặc bị ngừng hỗ trợ.

### Dùng `/kei` trong DM

Discord vẫn yêu cầu ứng dụng được cài đặt. Có thể cài vào tài khoản Sensei để dùng `/kei`, `/say` và `/kei_consent` trong DM riêng với bot mà không cần thêm bot làm thành viên server:

1. Trong Discord Developer Portal, mở **Installation** và bật **User Install**.
2. Với **User Install**, chọn scope `applications.commands`. Để tiếp tục hỗ trợ thêm bot vào server, giữ **Guild Install** với scope `applications.commands` và `bot`.
3. Dùng Install Link của ứng dụng và chọn **Add to my apps**.
4. Sau khi cài vào tài khoản, mở DM riêng với ứng dụng để dùng các lệnh. Chạy `/kei_consent` trong DM nếu Sensei thực sự đã đủ 18 tuổi và muốn bật mature mode.

Trong server, mature mode chỉ bật ở kênh được đánh dấu NSFW. Xác nhận trong DM và xác nhận trong server được lưu riêng, mỗi lần có hiệu lực 24 giờ.

Để phản hồi từ User Install hiện công khai, server cần cho phép **Use External Apps** trong kênh. Nếu quyền này bị tắt, Discord chỉ cho ứng dụng gửi phản hồi riêng tư. Phản hồi `/kei` là phản hồi slash command thông thường nên Discord có thể hiện khung tương tác; `/say` dùng follow-up riêng để nội dung không hiện cùng khung đó.

Khi chỉ cài User Install, bot không được thêm vào server để đọc tin nhắn thường, phản hồi mention hoặc chạy `!kei`; các tính năng đó cần Guild Install.

Nếu ứng dụng chưa được cài vào tài khoản hoặc server, Discord không cung cấp slash command để chạy.

## Xem log và xử lý lỗi AI

Mở log của workflow **Discord Bot** trong khu vực Console/Workflows của Replit.
Bot ghi nhà cung cấp, model, mã HTTP, mã lỗi của nhà cung cấp và request ID để phân biệt:

- `401` / `authentication_failed`: API key sai, hết hạn hoặc không đúng nhà cung cấp.
- `429` / `quota_exceeded`: hết quota/credits; kiểm tra Usage và Billing ở trang nhà cung cấp.
- `429` / `rate_limit`: gửi quá nhiều request; đợi một lúc rồi thử lại.
- `404` / `model_not_found`: model không còn tồn tại hoặc không được tài khoản hỗ trợ.

Log không ghi API key hay nội dung chat. Khi cần hỗ trợ, chỉ gửi các dòng `AI API failure` cùng mã HTTP/provider code/request ID; không chia sẻ secret.