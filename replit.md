# Kei Discord Bot

Bot Discord Python nhập vai Tendou Kei tsundere, luôn xem người chat là Sensei — giáo viên của các học sinh — trong bối cảnh Kivotos/Schale, đồng thời có chế độ mature tách biệt cho nhân vật hư cấu 20+.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `python main.py` — chạy bot Discord
- Required secrets: `DISCORD_TOKEN`; `OPENAI_API_KEY` là tùy chọn để bật chat AI

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Bot: Python 3.13, discord.py, OpenAI Python SDK

## Where things live

- `main.py` — bot, slash commands, hội thoại, lọc nội dung và mature consent
- `README.md` — hướng dẫn tạo Discord Application và mời bot
- `bot_data/consents.json` — consent runtime, tự tạo sau khi dùng `/kei_consent`

## Architecture decisions

- Chế độ thường không tình dục và giữ fan role-play Tendou Kei.
- Người chat luôn được gọi là Sensei, giáo viên của các học sinh; prompt có các mốc bối cảnh Kivotos, Schale, Millennium và nhiệm vụ.
- Kei luôn xưng “em” và gọi người chat là “Sensei”.
- Alice/Aris là ưu tiên cao nhất của Kei; Kei phản ứng quyết liệt khi sự an toàn của Alice bị đe dọa.
- Nóng nảy, cay nghiệt, kiên cường và tsundere được thể hiện qua hành động bảo vệ, không chỉ bằng catchphrase.
- Kei có tình cảm với Sensei nhưng giấu bằng sự ngượng ngùng, phủ nhận, quan tâm vụng về và đôi lúc ghen nhẹ.
- Tông bình thường của Kei là cute, ấm áp và trêu nhẹ; không cọc hoặc mắng Sensei nếu không có lý do trong cốt truyện.
- Chế độ mature chuyển sang nhân vật hư cấu Kei Amahara 20+ để không sexualize nhân vật học sinh nguyên bản.
- Consent mature có thời hạn 24 giờ, theo guild/user, và chỉ chấp nhận trong channel NSFW.
- Nếu chưa có OpenAI key, bot dùng fallback local thay vì crash sau khi đăng nhập.

## Product

- Slash commands `/kei`, `/kei_help`, `/kei_reset`, `/kei_consent`.
- `/say` gửi nguyên văn nội dung qua interaction; hỗ trợ user-install để dùng lệnh trong server mà không cần bot là thành viên server.
- Mention bot, DM, nhắc “Kei”/“Tendou Kei”/“Kei Tendou”, hoặc `!kei` để chat.
- Lịch sử hội thoại ngắn theo người dùng/kênh.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Discord Developer Portal phải bật Message Content Intent để mention/`!kei` hoạt động.
- Không lưu `DISCORD_TOKEN` hoặc `OPENAI_API_KEY` trong file; dùng Replit Secrets.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
