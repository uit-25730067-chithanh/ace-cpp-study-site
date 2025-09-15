# ACE Team • Ôn thi Nhập môn lập trình (C++) — Vue (CDN) + GitHub Pages

Trang web tĩnh, không cần build tool — dùng **Vue 3 CDN**. Có thể deploy ngay lên **GitHub Pages**.

## Tính năng

- Ôn theo **chương** (tóm tắt + mini quiz + đánh dấu hoàn thành).
- **20 đề ôn tập** với **20 câu mỗi đề**, làm lại **không giới hạn**, lưu **điểm cao nhất**. Phân bổ: 15 trắc nghiệm (75%) + 3 tự luận (15%) + 2 lập trình (10%).
- **Flashcards** có đánh dấu "đã nhớ", tùy chọn ẩn thẻ đã nhớ. Hơn 500 thẻ flashcards đa dạng.
- **Hiển thị kết quả chi tiết**: So sánh đáp án của bạn với đáp án đúng, có chỉ báo trực quan (✓/✗).
- **Lưu tiến trình** bằng `localStorage` + **Xuất/Nhập** tiến trình (.json).
- **Trang tài liệu**: cập nhật link slide/đề cương/đề mẫu trong `data.js` → `resources`.
- **Đề thi theo chủ đề**: Làm đề tập trung vào từng chủ đề cụ thể (20 câu).
- **Sinh đề thi UIT**: Tạo đề thi tự luận theo format chính thức của UIT.

## Cấu trúc

```
index.html          # Giao diện chính
style.css           # CSS styling
app.js              # Logic ứng dụng Vue.js
data.js             # Dữ liệu quiz, flashcards, chapters
docs/               # Tài liệu PDF (slides, đề thi mẫu)
README.md           # Hướng dẫn này
```

## Chạy local

Mở `index.html` bằng trình duyệt (double click).

## Deploy GitHub Pages

1. Tạo repo GitHub và push tất cả file lên.
2. Vào Settings → Pages → Chọn Source: `Deploy from a branch` → Branch `main` (thư mục root).
3. Truy cập URL Pages là xong.

> **Lưu ý router**: Dùng hash (`#/home`, `#/quizzes`), nên refresh không bị 404 trên GH Pages.

## Tùy biến nội dung

- **Sửa tóm tắt/chương**: `data.js` → `window.ACE_CHAPTERS_DATA`.
- **Sửa đề thi**: `data.js` → `window.ACE_QUIZZES_DATA`. Mỗi đề có 20 câu hỏi.
- **Thay/Thêm flashcards**: `data.js` → `window.ACE_FLASHCARDS_DATA`.
- **Cập nhật tài liệu**: `app.js` → `resources`.
- **Thêm đề mới**: Copy format đề có sẵn trong `data.js` và chỉnh sửa nội dung.

## Cấu trúc đề thi

Mỗi đề thi có **20 câu hỏi** với phân bổ:

- **15 câu trắc nghiệm** (75%): Lý thuyết cơ bản
- **3 câu tự luận ngắn** (15%): Viết từ khóa, toán tử
- **2 câu lập trình** (10%): Đoán output của code

## Tính năng nổi bật

- **Hiển thị kết quả chi tiết**: So sánh đáp án của bạn với đáp án đúng
- **Chỉ báo trực quan**: ✓ cho đúng, ✗ cho sai với màu sắc rõ ràng
- **Đề theo chủ đề**: Luyện tập tập trung vào từng chủ đề cụ thể
- **Sinh đề thi UIT**: Tạo đề thi tự luận theo format chính thức

Chúc các bạn ôn thi hiệu quả! ✨
