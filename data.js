// Global data variables for ACE C++ Study App
// Generated with 520 flashcards
// Generated at: 9/14/2025, 11:14:37 PM

window.ACE_CHAPTERS_DATA = [
  {
    title: "Tổng quan C++ & cấu trúc chương trình",
    summary: [
      "C/C++ là ngôn ngữ biên dịch. Chương trình C++ bắt đầu chạy từ hàm main().",
      "Biên dịch -> liên kết -> chạy. Thư viện iostream hỗ trợ nhập/xuất với std::cin/std::cout.",
      "Cú pháp dòng lệnh, comment // và /* */; kết thúc câu lệnh bằng dấu chấm phẩy ;",
    ],
    snippets: [
`#include <iostream>
using namespace std;
int main(){
  cout << "Hello"; 
  return 0;
}`,
    ],
    quiz: [
      {
        type: "mcq",
        text: "Hàm nào là điểm bắt đầu chương trình C++?",
        options: ["start()", "main()", "init()", "entry()"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Để in ra màn hình dùng đối tượng nào?",
        options: ["std::in", "std::cout", "printf", "System.out"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "C++ là ngôn ngữ thuộc loại nào?",
        options: ["Thông dịch", "Biên dịch", "Script", "Markup"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Thư viện nào cần include để sử dụng std::cout?",
        options: ["<stdio.h>", "<iostream>", "<string>", "<vector>"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Câu lệnh nào kết thúc chương trình C++?",
        options: ["return 0;", "exit();", "break;", "continue;"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Ký tự nào kết thúc mỗi câu lệnh C++?",
        options: [".", "?", ";", ","],
        answer: 2,
      },
      {
        type: "mcq",
        text: "using namespace std; có tác dụng gì?",
        options: [
          "Khai báo biến",
          "Không cần std::",
          "Định nghĩa hàm",
          "Kết thúc chương trình",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Comment một dòng trong C++ dùng ký tự?",
        options: ["//", "/*/", ";", "--"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Comment nhiều dòng C++ dùng cú pháp?",
        options: ["// //", "/* */", "<!-- -->", "# #"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Phần mở rộng file mã nguồn C++?",
        options: [".c", ".cpp", ".java", ".py"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Trình biên dịch C++ phổ biến là?",
        options: ["javac", "python", "gcc/g++", "node"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Quá trình từ code sang file thực thi?",
        options: [
          "Biên dịch -> Liên kết",
          "Thông dịch",
          "Chạy trực tiếp",
          "Upload",
        ],
        answer: 0,
      },
      {
        type: "short",
        text: "Tên hàm bắt buộc có trong mọi chương trình C++?",
        answer: "main",
      },
      {
        type: "short",
        text: "Từ khóa dùng để trả về giá trị từ hàm?",
        answer: "return",
      },
      {
        type: "mcq",
        text: "#include có tác dụng?",
        options: [
          "Định nghĩa hàm",
          "Chèn nội dung file khác",
          "Khai báo biến",
          "Kết thúc chương trình",
        ],
        answer: 1,
      },
    ],
  },
  {
    title: "Biến, kiểu dữ liệu, toán tử, nhập/xuất",
    summary: [
      "Kiểu cơ bản: int, double, char, bool. Hằng số khai báo với const.",
      "Toán tử số học + - * / %, so sánh == != < <= > >=, logic && || !",
      "Nhập xuất căn bản: std::cin >> x; std::cout << x;",
    ],
    snippets: [
`int a = 5, b = 2;
double c = (double)a / b; // 2.5`,
    ],
    quiz: [
      {
        type: "mcq",
        text: "Khai báo hằng số đúng?",
        options: [
          "const int x=5;",
          "int const=5;",
          "let x=5;",
          "final int x=5;",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Biểu thức 7/2 trong C++ cho kết quả?",
        options: ["3.5", "4", "3", "2"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Kiểu dữ liệu nào lưu số thực?",
        options: ["int", "double", "char", "bool"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Kiểu dữ liệu nào lưu ký tự?",
        options: ["string", "char", "int", "text"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Kiểu bool có thể nhận giá trị nào?",
        options: ["0, 1", "true, false", "yes, no", "T, F"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Toán tử % dùng để?",
        options: ["Chia", "Lấy phần dư", "Nhân", "Cộng"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Toán tử so sánh khác nhau?",
        options: ["=", "!=", "<>", "=/="],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Toán tử logic VÀ trong C++?",
        options: ["&", "&&", "and", "AND"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Toán tử logic HOẶC trong C++?",
        options: ["|", "||", "or", "OR"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Toán tử logic PHỦ định trong C++?",
        options: ["~", "!", "not", "NOT"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Ép kiểu từ int sang double dùng?",
        options: [
          "(double)x",
          "double(x)",
          "static_cast<double>(x)",
          "Tất cả đều đúng",
        ],
        answer: 3,
      },
      {
        type: "short",
        text: "Toán tử nhập dữ liệu từ bàn phím?",
        answer: ">>",
      },
      {
        type: "short",
        text: "Toán tử xuất dữ liệu ra màn hình?",
        answer: "<<",
      },
      {
        type: "mcq",
        text: "Khai báo biến int đúng?",
        options: ["int a;", "integer a;", "Int a;", "int: a;"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Biểu thức 5 % 3 cho kết quả?",
        options: ["1", "2", "1.67", "5"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Độ ưu tiên toán tử: * và +?",
        options: ["* cao hơn +", "+ cao hơn *", "Bằng nhau", "Tùy thuộc"],
        answer: 0,
      },
    ],
  },
  {
    title: "Cấu trúc rẽ nhánh & vòng lặp",
    summary: [
      "Rẽ nhánh: if/else, else-if. Switch dùng cho so sánh giá trị rời rạc.",
      "Vòng lặp: for, while, do-while. Chú ý điều kiện dừng và lỗi off-by-one.",
    ],
    snippets: [`for(int i=0;i<3;i++){ cout<<i<<" "; } // 0 1 2`],
    quiz: [
      {
        type: "mcq",
        text: "Vòng lặp nào luôn chạy thân ít nhất 1 lần?",
        options: ["for", "while", "do-while", "foreach"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Câu lệnh thoát khỏi vòng lặp ngay lập tức?",
        options: ["continue", "break", "exit", "stop"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Cấu trúc if-else được dùng để?",
        options: ["Lặp", "Rẽ nhánh", "Khai báo biến", "Gọi hàm"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "switch-case phù hợp với kiểu dữ liệu nào?",
        options: ["float", "double", "int/char", "string dài"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Câu lệnh continue có tác dụng?",
        options: [
          "Thoát vòng lặp",
          "Bỏ qua lần lặp hiện tại",
          "Dừng chương trình",
          "Gọi hàm",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Vòng lặp for thích hợp khi?",
        options: [
          "Không biết số lần lặp",
          "Biết trước số lần lặp",
          "Lặp vô hạn",
          "Không bao giờ lặp",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Vòng lặp while kiểm tra điều kiện?",
        options: [
          "Sau khi chạy thân",
          "Trước khi chạy thân",
          "Giữa thân",
          "Không kiểm tra",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Cấu trúc else if được dùng khi?",
        options: [
          "Chỉ có 2 lựa chọn",
          "Nhiều điều kiện liên tiếp",
          "Vòng lặp",
          "Khai báo mảng",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Câu lệnh break trong switch có tác dụng?",
        options: [
          "Tiếp tục case tiếp theo",
          "Thoát khỏi switch",
          "Lặp lại switch",
          "Không có tác dụng",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Vòng lặp lồng nhau là gì?",
        options: [
          "Vòng lặp bên trong vòng lặp khác",
          "Hai vòng lặp riêng biệt",
          "Vòng lặp sai",
          "Không tồn tại",
        ],
        answer: 0,
      },
      {
        type: "short",
        text: "Từ khóa để thoát vòng lặp ngay lập tức?",
        answer: "break",
      },
      {
        type: "short",
        text: "Từ khóa để bỏ qua lần lặp hiện tại?",
        answer: "continue",
      },
      {
        type: "mcq",
        text: "Điều kiện trong while phải có kiểu?",
        options: ["int", "bool", "string", "float"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Vòng lặp do-while khác while ở điểm nào?",
        options: [
          "Cú pháp khác",
          "Kiểm tra điều kiện sau",
          "Chạy nhanh hơn",
          "Không khác gì",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Lỗi off-by-one thường xảy ra khi?",
        options: [
          "Dùng sai toán tử",
          "Sai điều kiện dừng",
          "Quên dấu ;",
          "Sai kiểu dữ liệu",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Cú pháp for(int i=0; i<n; i++) có nghĩa?",
        options: [
          "i từ 0 đến n",
          "i từ 0 đến n-1",
          "i từ 1 đến n",
          "i từ 1 đến n-1",
        ],
        answer: 1,
      },
    ],
  },
  {
    title: "Hàm & phạm vi",
    summary: [
      "Hàm có kiểu trả về, danh sách tham số. Tham số truyền theo giá trị mặc định.",
      "Có thể dùng tham chiếu (&) để thay đổi đối số bên ngoài.",
    ],
    snippets: [`void increment(int &x){ x++; }`],
    quiz: [
      {
        type: "mcq",
        text: "Tham chiếu trong C++ ký hiệu bằng?",
        options: ["*", "&", "->", "%"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Câu lệnh nào khai báo hàm trả về int?",
        options: ["int f();", "f(): int", "func int()", "int: f()"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Hàm main() trả về kiểu dữ liệu gì?",
        options: ["void", "int", "char", "bool"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Truyền tham số theo giá trị có nghĩa là?",
        options: [
          "Hàm nhận bản sao",
          "Hàm nhận địa chỉ",
          "Hàm nhận tham chiếu",
          "Không truyền gì",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Truyền tham số theo tham chiếu có nghĩa là?",
        options: [
          "Hàm nhận bản sao",
          "Hàm có thể thay đổi biến gốc",
          "Hàm chạy nhanh hơn",
          "Hàm không cần tham số",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Từ khóa void có nghĩa là?",
        options: [
          "Hàm trả về số nguyên",
          "Hàm không trả về gì",
          "Hàm có tham số",
          "Hàm riêng tư",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Hàm có thể có bao nhiêu câu lệnh return?",
        options: ["Chỉ 1", "Tối đa 2", "Không giới hạn", "Không có return"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Biến cục bộ được khai báo ở đâu?",
        options: [
          "Ngoài tất cả hàm",
          "Bên trong hàm",
          "Trong file header",
          "Trước main()",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Biến toàn cục được khai báo ở đâu?",
        options: [
          "Trong hàm",
          "Ngoài tất cả hàm",
          "Trong main()",
          "Không tồn tại",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Phạm vi (scope) của biến cục bộ là?",
        options: [
          "Toàn chương trình",
          "Chỉ trong hàm khai báo",
          "Chỉ trong file",
          "Trong tất cả file",
        ],
        answer: 1,
      },
      {
        type: "short",
        text: "Từ khóa để trả về giá trị từ hàm?",
        answer: "return",
      },
      {
        type: "mcq",
        text: "Hàm có thể gọi hàm khác không?",
        options: ["Không thể", "Có thể", "Chỉ trong main()", "Chỉ hàm void"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Tham số mặc định được viết ở đâu?",
        options: ["Khai báo hàm", "Định nghĩa hàm", "Cả hai", "Không có"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Overloading hàm có nghĩa là?",
        options: [
          "Hàm quá tải",
          "Hàm có cùng tên khác tham số",
          "Hàm lồng nhau",
          "Hàm đệ quy",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Prototype hàm có tác dụng gì?",
        options: [
          "Khai báo hàm trước khi định nghĩa",
          "Gọi hàm",
          "Xóa hàm",
          "Sao chép hàm",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Hàm inline có đặc điểm gì?",
        options: [
          "Chạy chậm",
          "Mã được chèn trực tiếp",
          "Không có tham số",
          "Luôn đệ quy",
        ],
        answer: 1,
      },
    ],
  },
  {
    title: "Đệ quy",
    summary: [
      "Hàm đệ quy gọi lại chính nó; cần điều kiện dừng để tránh lặp vô hạn.",
      "Ví dụ: giai thừa, Fibonacci.",
    ],
    snippets: [`int fact(int n){ return (n<=1)?1:n*fact(n-1); }`],
    quiz: [
      {
        type: "mcq",
        text: "Điều gì cần có trong hàm đệ quy?",
        options: ["goto", "biến toàn cục", "điều kiện dừng", "mảng tĩnh"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "fact(3) với fact(n) = n*fact(n-1), fact(1)=1 là?",
        options: ["3", "5", "6", "9"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Đệ quy là gì?",
        options: [
          "Hàm gọi hàm khác",
          "Hàm gọi chính nó",
          "Hàm có nhiều tham số",
          "Hàm không có return",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Điều kiện dừng trong đệ quy có tác dụng gì?",
        options: [
          "Làm chương trình chậm",
          "Ngăn lặp vô hạn",
          "Tăng tốc độ",
          "Không có tác dụng",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Fibonacci(0) = 0, Fibonacci(1) = 1, Fibonacci(2) = ?",
        options: ["0", "1", "2", "3"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Đệ quy có nhược điểm gì?",
        options: [
          "Khó hiểu",
          "Tốn bộ nhớ stack",
          "Chậm hơn vòng lặp",
          "Tất cả đều đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: "Base case trong đệ quy là gì?",
        options: [
          "Trường hợp cơ bản không đệ quy",
          "Trường hợp phức tạp nhất",
          "Trường hợp lỗi",
          "Không tồn tại",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Stack overflow xảy ra khi nào?",
        options: [
          "Đệ quy không có điều kiện dừng",
          "Đệ quy quá nhanh",
          "Đệ quy quá chậm",
          "Không bao giờ",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Tính giai thừa 0! = ?",
        options: ["0", "1", "Không xác định", "Lỗi"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Đệ quy tuyến tính là gì?",
        options: [
          "Hàm gọi chính nó 1 lần",
          "Hàm gọi chính nó 2 lần",
          "Hàm không đệ quy",
          "Hàm lặp vô hạn",
        ],
        answer: 0,
      },
      {
        type: "short",
        text: "Bài toán kinh điển dùng đệ quy tính giai thừa?",
        answer: "factorial",
      },
      {
        type: "mcq",
        text: "Đệ quy nhị phân là gì?",
        options: [
          "Hàm gọi chính nó 1 lần",
          "Hàm gọi chính nó 2 lần",
          "Hàm có 2 tham số",
          "Hàm trả về bool",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Tháp Hà Nội là bài toán gì?",
        options: ["Vòng lặp", "Đệ quy", "Mảng", "Con trỏ"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Đệ quy đuôi (tail recursion) là gì?",
        options: [
          "Đệ quy ở cuối hàm",
          "Đệ quy ở đầu hàm",
          "Đệ quy ở giữa",
          "Không tồn tại",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Có thể thay thế đệ quy bằng gì?",
        options: [
          "Không thể thay thế",
          "Vòng lặp + stack",
          "Chỉ vòng lặp",
          "Chỉ mảng",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Khi nào nên dùng đệ quy?",
        options: [
          "Luôn luôn",
          "Không bao giờ",
          "Khi bài toán có cấu trúc đệ quy",
          "Khi muốn chậm",
        ],
        answer: 2,
      },
    ],
  },
  {
    title: "Mảng một chiều",
    summary: [
      "Mảng có kích thước cố định, chỉ số từ 0..n-1. Truy cập ngoài phạm vi gây lỗi.",
      "Duyệt mảng bằng for; nhớ khởi tạo giá trị.",
    ],
    snippets: [`int a[3]={2,4,6}; cout<<a[1];

window.ACE_FLASHCARDS_DATA = [
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 1 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 2 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 3 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 4 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 5 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 6 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 7 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 8 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 9 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 10 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 11 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 12 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 13 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 14 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 15 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 16 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 17 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 18 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 19 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 20 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 21 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 22 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 23 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 24 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 25 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 26 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 27 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 28 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 29 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 30 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 31 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 32 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 33 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 34 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 35 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 36 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 37 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 38 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 39 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Tổng quan C++",
    "text": "Câu hỏi 40 về Tổng quan C++?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 1 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 2 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 3 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 4 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 5 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 6 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 7 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 8 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 9 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 10 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 11 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 12 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 13 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 14 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 15 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 16 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 17 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 18 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 19 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 20 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 21 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 22 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 23 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 24 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 25 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 26 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 27 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 28 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 29 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 30 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 31 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 32 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 33 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 34 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 35 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 36 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 37 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 38 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 39 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Kiểu dữ liệu",
    "text": "Câu hỏi 40 về Kiểu dữ liệu?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 1 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 2 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 3 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 4 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 5 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 6 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 7 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 8 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 9 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 10 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 11 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 12 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 13 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 14 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 15 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 16 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 17 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 18 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 19 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 20 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 21 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 22 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 23 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 24 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 25 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 26 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 27 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 28 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 29 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 30 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 31 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 32 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 33 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 34 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 35 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 36 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 37 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 38 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 39 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Toán tử",
    "text": "Câu hỏi 40 về Toán tử?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 1 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 2 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 3 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 4 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 5 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 6 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 7 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 8 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 9 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 10 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 11 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 12 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 13 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 14 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 15 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 16 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 17 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 18 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 19 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 20 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 21 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 22 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 23 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 24 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 25 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 26 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 27 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 28 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 29 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 30 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 31 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 32 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 33 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 34 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 35 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 36 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 37 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 38 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 39 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Nhập xuất",
    "text": "Câu hỏi 40 về Nhập xuất?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 1 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 2 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 3 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 4 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 5 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 6 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 7 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 8 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 9 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 10 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 11 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 12 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 13 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 14 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 15 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 16 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 17 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 18 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 19 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 20 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 21 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 22 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 23 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 24 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 25 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 26 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 27 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 28 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 29 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 30 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 31 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 32 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 33 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 34 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 35 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 36 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 37 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 38 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 39 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Điều kiện",
    "text": "Câu hỏi 40 về Điều kiện?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 1 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 2 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 3 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 4 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 5 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 6 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 7 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 8 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 9 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 10 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 11 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 12 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 13 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 14 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 15 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 16 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 17 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 18 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 19 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 20 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 21 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 22 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 23 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 24 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 25 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 26 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 27 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 28 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 29 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 30 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 31 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 32 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 33 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 34 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 35 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 36 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 37 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 38 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 39 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Vòng lặp",
    "text": "Câu hỏi 40 về Vòng lặp?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 1 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 2 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 3 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 4 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 5 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 6 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 7 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 8 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 9 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 10 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 11 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 12 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 13 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 14 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 15 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 16 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 17 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 18 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 19 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 20 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 21 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 22 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 23 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 24 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 25 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 26 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 27 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 28 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 29 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 30 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 31 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 32 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 33 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 34 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 35 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 36 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 37 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 38 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 39 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Hàm",
    "text": "Câu hỏi 40 về Hàm?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 1 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 2 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 3 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 4 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 5 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 6 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 7 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 8 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 9 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 10 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 11 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 12 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 13 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 14 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 15 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 16 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 17 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 18 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 19 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 20 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 21 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 22 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 23 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 24 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 25 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 26 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 27 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 28 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 29 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 30 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 31 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 32 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 33 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 34 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 35 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 36 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 37 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 38 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 39 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Đệ quy",
    "text": "Câu hỏi 40 về Đệ quy?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 1 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 2 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 3 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 4 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 5 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 6 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 7 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 8 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 9 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 10 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 11 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 12 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 13 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 14 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 15 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 16 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 17 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 18 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 19 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 20 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 21 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 22 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 23 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 24 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 25 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 26 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 27 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 28 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 29 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 30 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 31 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 32 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 33 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 34 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 35 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 36 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 37 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 38 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 39 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 1D",
    "text": "Câu hỏi 40 về Mảng 1D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 1 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 2 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 3 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 4 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 5 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 6 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 7 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 8 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 9 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 10 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 11 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 12 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 13 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 14 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 15 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 16 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 17 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 18 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 19 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 20 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 21 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 22 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 23 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 24 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 25 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 26 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 27 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 28 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 29 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 30 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 31 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 32 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 33 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 34 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 35 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 36 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 37 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 38 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 39 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Mảng 2D",
    "text": "Câu hỏi 40 về Mảng 2D?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 1 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 2 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 3 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 4 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 5 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 6 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 7 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 8 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 9 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 10 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 11 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 12 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 13 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 14 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 15 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 16 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 17 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 18 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 19 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 20 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 21 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 22 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 23 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 24 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 25 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 26 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 27 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 28 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 29 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 30 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 31 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 32 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 33 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 34 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 35 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 36 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 37 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 38 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 39 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Chuỗi",
    "text": "Câu hỏi 40 về Chuỗi?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 1 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 2 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 3 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 4 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 5 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 6 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 7 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 8 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 9 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 10 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 11 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 12 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 13 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 14 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 15 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 16 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 17 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 18 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 19 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 20 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 21 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 22 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 23 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 24 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 25 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 26 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 27 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 28 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 29 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 30 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 31 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 32 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 33 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 34 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 35 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 36 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 37 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 38 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 39 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Con trỏ",
    "text": "Câu hỏi 40 về Con trỏ?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 1 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 2 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 3 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 4 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 5 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 6 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 7 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 8 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 9 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 10 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 11 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 12 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 13 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 14 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 15 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 16 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 17 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 18 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 19 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 20 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 21 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 22 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 23 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 24 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 25 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 26 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 27 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 28 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 29 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 30 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 31 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 32 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 33 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 34 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 0
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 35 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 3
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 36 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 37 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 38 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 39 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 1
  },
  {
    "topic": "Struct",
    "text": "Câu hỏi 40 về Struct?",
    "options": [
      "Đáp án A",
      "Đáp án B",
      "Đáp án C",
      "Đáp án D"
    ],
    "answer": 2
  }
];

window.ACE_DATA_LOADED = true;
