# Quy ước làm việc cho agent — WMS-FE

## Mục tiêu

Tuân thủ kiến trúc Vue 3/Vite hiện có, giữ thay đổi đúng phạm vi yêu cầu và ưu
tiên các thành phần UI, token thiết kế và quy ước đã có của dự án.

## Stack và quy ước chung

- Vue 3, Vite, TypeScript, Vue Router, Pinia, Tailwind CSS v4 và shadcn-vue.
- Dùng alias `@/` cho mã nguồn trong `src/`; không thay bằng đường dẫn tương đối
  dài khi alias phù hợp.
- Viết component Vue bằng `<script setup lang="ts">`.
- Tuân theo Prettier: 2 spaces, single quote, không semicolon, độ dài dòng tối đa
  100 ký tự.
- Chỉ thay đổi các tệp cần thiết cho yêu cầu. Không sửa, định dạng lại hoặc dọn
  dẹp mã không liên quan.

## Tổ chức mã nguồn

- `src/app/`: router, layout và wiring cấp ứng dụng.
- `src/components/ui/`: primitive tái sử dụng từ shadcn-vue. Không sửa primitive
  khi có thể ghép (compose) chúng trong feature hoặc component cấp ứng dụng.
- `src/modules/`: feature theo nghiệp vụ; chứa UI, state, logic và service thuộc
  riêng feature đó.
- `src/lib/`: utility dùng chung, không đặt logic nghiệp vụ ở đây.
- `src/resources/`: tài nguyên tĩnh và stylesheet toàn cục.

Với feature mới, dùng `src/modules/<feature>/`. Chỉ tạo thư mục khi có nhu cầu:

```text
src/modules/<feature>/
├── <feature>.route.ts
├── views/
├── components/
├── composables/
├── services/
├── types/
└── constants/
```

- Route của feature đặt ở `<feature>.route.ts` tại gốc module và được đăng ký từ
  router trong `src/app/router/`.
- Giữ dữ liệu, service, composable và component gần feature sử dụng chúng; chỉ
  đưa lên tầng dùng chung khi thực sự có từ hai nơi độc lập cần tái sử dụng.

## UI và CSS

- Ưu tiên utility class Tailwind và component shadcn-vue có sẵn.
- Khi cần primitive chưa có, ưu tiên bổ sung theo hệ thống shadcn-vue thay vì tự
  xây một primitive trùng lặp.
- Chỉ dùng scoped/custom CSS khi Tailwind không biểu đạt được yêu cầu. CSS đó phải
  giới hạn trong component và kèm một chú thích ngắn giải thích lý do.
- Không hard-code lại màu, spacing, radius hoặc token thiết kế trong custom CSS.
- Chỉ khai báo token, font, reset hoặc style nền tảng toàn cục trong
  `src/resources/styles/main.css`.

## Quy trình thực hiện

1. Đọc các file, component, route và quy ước liên quan trước khi chỉnh sửa.
2. Khi yêu cầu mơ hồ, nêu rõ giả định hoặc hỏi lại nếu giả định đó ảnh hưởng đáng
   kể đến hành vi hay phạm vi.
3. Thực hiện diff nhỏ nhất đáp ứng yêu cầu; không thay đổi public interface hoặc
   cấu trúc module ngoài phạm vi nếu chưa cần thiết.
4. Không chạy formatter hoặc script có `--fix` trừ khi yêu cầu công việc nêu rõ
   việc tự động sửa định dạng/lint.
5. Khi hoàn tất, báo cáo thay đổi chính, lệnh xác minh đã chạy cùng kết quả, và
   phần chưa thể kiểm tra (nếu có).

## Xác minh

Dùng các lệnh không tự sửa mã sau khi thay đổi phù hợp:

```sh
pnpm type-check
pnpm exec oxlint .
pnpm exec eslint .
```

Chạy thêm `pnpm build` khi thay đổi router, cấu hình, entry point hoặc tích hợp
diện rộng.

Không bổ sung test framework chỉ cho mục đích xác minh, vì dự án hiện chưa cấu
hình test runner. Với thay đổi UI, kiểm tra thủ công route/luồng bị ảnh hưởng nếu
môi trường chạy được.

## Baseline kiểm tra hiện tại

Các lỗi sau đã tồn tại trước thay đổi; không coi chúng là lỗi mới do tác vụ:

- Oxlint báo import không dùng trong `vite.config.ts` và `src/stores/app.store.ts`
  là file rỗng.
- ESLint báo `vue/multi-word-component-names` cho các primitive shadcn-vue hiện
  có trong `src/components/ui/`.
- `pnpm type-check` hiện chạy thành công.

Không tạo lỗi mới trong phạm vi thay đổi. Nếu các lỗi baseline vẫn xuất hiện khi
xác minh, nêu rõ chúng trong báo cáo thay vì che giấu hoặc tự ý sửa ngoài phạm vi.
