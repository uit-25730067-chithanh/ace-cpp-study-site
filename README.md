# ACE Team • Ôn thi Nhập môn lập trình (C++) — Vue (CDN) + GitHub Pages

Trang web tĩnh, không cần build tool — dùng **Vue 3 CDN**. Có thể deploy ngay lên **GitHub Pages**.

## Tính năng

- Ôn theo **chương** (tóm tắt + mini quiz + đánh dấu hoàn thành).
- **10 đề ôn tập** sinh từ ngân hàng câu hỏi, làm lại **không giới hạn**, lưu **điểm cao nhất**. Mỗi đề ít nhất 50 câu hỏi - dựa theo tài liệu "DeThi\_" trong /docs
- **Flashcards** có đánh dấu “đã nhớ”, tùy chọn ẩn thẻ đã nhớ. Ít nhất 20 cards trên mỗi chủ đề.
- **Lưu tiến trình** bằng `localStorage` + **Xuất/Nhập** tiến trình (.json).
- **Trang tài liệu**: cập nhật link slide/đề cương/đề mẫu trong `app.js` → `resources`.

## Cấu trúc

```
index.html
styles.css
app.js
README.md
```

## Chạy local

Mở `index.html` bằng trình duyệt (double click).

## Deploy GitHub Pages

1. Tạo repo GitHub và push 4 file trên.
2. Vào Settings → Pages → Chọn Source: `Deploy from a branch` → Branch `main` (thư mục root).
3. Truy cập URL Pages là xong.

> **Lưu ý router**: Dùng hash (`#/home`, `#/quizzes`), nên refresh không bị 404 trên GH Pages.

## Tùy biến nội dung

- Sửa tóm tắt/chương: `app.js` → `chapters`.
- Sửa ngân hàng câu hỏi: `app.js` → `basePools`. Hàm `buildTenTests()` sẽ tạo 10 đề từ các pool.
- Thay/Thêm flashcards: `app.js` → `flashcards`.
- Cập nhật tài liệu: `app.js` → `resources`.

Chúc ôn thi hiệu quả! ✨
