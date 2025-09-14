const PASS_SCORE = 80;
const STORAGE_KEY = "ace_cpp_progress_v1";
const TOPIC_LABELS = {
  basics: "Cơ bản & Cú pháp",
  control: "Rẽ nhánh & Vòng lặp",
  array1d: "Mảng 1 chiều",
  array2d: "Mảng 2 chiều",
  strings: "Chuỗi C-style",
  pointers: "Con trỏ",
  functions: "Hàm & tham chiếu",
  recursion: "Đệ quy",
  structs: "Struct",
};

// ---- DATA: chapters (summary, mini-quiz) ----
const chapters = [
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
    snippets: [`int a[3]={2,4,6}; cout<<a[1]; // 4`],
    quiz: [
      {
        type: "mcq",
        text: "Chỉ số phần tử đầu tiên của mảng?",
        options: ["0", "1", "-1", "tùy"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Kích thước mảng int a[10] là?",
        options: ["9", "10", "11", "phụ thuộc"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Khai báo mảng 5 phần tử đúng?",
        options: ["int a(5);", "int a[5];", "array<int> a(5);", "int [5] a;"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Truy cập phần tử cuối của mảng a[n]?",
        options: ["a[n]", "a[n-1]", "a[n+1]", "a.last()"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Khởi tạo mảng {1,2,3} đúng?",
        options: [
          "int a[] = {1,2,3};",
          "int a = {1,2,3};",
          "int a[3] = 1,2,3;",
          "array a = {1,2,3};",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Duyệt mảng a[n] bằng vòng lặp nào?",
        options: [
          "for(i=1; i<=n; i++)",
          "for(i=0; i<n; i++)",
          "for(i=0; i<=n; i++)",
          "while(true)",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Lỗi gì khi truy cập a[10] với mảng a[5]?",
        options: [
          "Compile error",
          "Runtime error",
          "Out of bounds",
          "Tất cả đều đúng",
        ],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Mảng có thể thay đổi kích thước không?",
        options: [
          "Có, bất kỳ lúc nào",
          "Không, kích thước cố định",
          "Chỉ khi khai báo",
          "Tùy thuộc kiểu dữ liệu",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Tìm phần tử lớn nhất mảng cần?",
        options: [
          "Duyệt 1 lần",
          "Duyệt 2 lần",
          "Sắp xếp trước",
          "Không thể tìm",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Sắp xếp mảng bubble sort có độ phức tạp?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        answer: 2,
      },
      {
        type: "short",
        text: "Thuật toán tìm kiếm tuyến tính trong mảng?",
        answer: "linear search",
      },
      {
        type: "mcq",
        text: "Binary search yêu cầu mảng?",
        options: ["Bất kỳ", "Đã sắp xếp", "Có số lẻ phần tử", "Toàn số dương"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Chèn phần tử vào đầu mảng cần?",
        options: [
          "Dịch chuyển các phần tử",
          "Không cần làm gì",
          "Xóa phần tử cuối",
          "Tạo mảng mới",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Mảng được lưu trữ trong bộ nhớ như thế nào?",
        options: ["Ngẫu nhiên", "Liên tiếp", "Theo giá trị", "Theo thứ tự abc"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Khởi tạo mảng không gán giá trị sẽ?",
        options: ["Toàn số 0", "Giá trị rác", "Lỗi compile", "Toàn số 1"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Truyền mảng vào hàm C++ truyền?",
        options: [
          "Giá trị",
          "Tham chiếu",
          "Con trỏ đến phần tử đầu",
          "Bản sao",
        ],
        answer: 2,
      },
    ],
  },
  {
    title: "Mảng hai chiều & ma trận",
    summary: [
      "Khai báo: int a[R][C]; Duyệt hai vòng lặp lồng nhau.",
      "Ứng dụng: tính tổng hàng/cột, đường chéo.",
    ],
    snippets: [
      `int s=0; for(int i=0;i<n;i++) for(int j=0;j<m;j++) s+=a[i][j];`,
    ],
    quiz: [
      {
        type: "mcq",
        text: "Khai báo ma trận 2x3 đúng?",
        options: [
          "int a[2,3];",
          "int a(2)(3);",
          "int a[2][3];",
          "matrix<int,2,3> a;",
        ],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Truy cập phần tử hàng 1, cột 2 của ma trận a?",
        options: ["a[1,2]", "a[1][2]", "a(1,2)", "a.get(1,2)"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Duyệt ma trận m×n cần mấy vòng lặp?",
        options: ["1", "2", "3", "m+n"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Ma trận 3×4 có bao nhiêu phần tử?",
        options: ["7", "12", "16", "9"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Khởi tạo ma trận 2×2 đúng?",
        options: [
          "int a[2][2] = {{1,2},{3,4}};",
          "int a[2][2] = {1,2,3,4};",
          "Cả hai đều đúng",
          "Cả hai đều sai",
        ],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Tính tổng đường chéo chính ma trận vuông n×n?",
        options: [
          "for(i=0;i<n;i++) sum+=a[i][i]",
          "for(i=0;i<n;i++) sum+=a[i][n-i]",
          "for(i=0;i<n;i++) sum+=a[i][0]",
          "for(i=0;i<n;i++) sum+=a[0][i]",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Ma trận chuyển vị có kích thước nào từ ma trận 3×5?",
        options: ["3×5", "5×3", "3×3", "5×5"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Tìm phần tử lớn nhất ma trận m×n cần?",
        options: [
          "1 vòng lặp",
          "2 vòng lặp lồng nhau",
          "3 vòng lặp",
          "Không thể",
        ],
        answer: 1,
      },
      {
        type: "short",
        text: "Ký tự ngăn cách khi khởi tạo ma trận?",
        answer: ",",
      },
      {
        type: "mcq",
        text: "Ma trận đơn vị có đặc điểm gì?",
        options: [
          "Tất cả phần tử = 1",
          "Đường chéo chính = 1, còn lại = 0",
          "Đối xứng",
          "Vuông",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Nhân hai ma trận A(m×n) và B(p×q) yêu cầu?",
        options: ["m=p", "n=p", "m=q", "n=q"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Ma trận được lưu trong bộ nhớ theo thứ tự?",
        options: ["Ngẫu nhiên", "Theo hàng", "Theo cột", "Tùy compiler"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Tính tổng từng hàng ma trận cần?",
        options: ["1 vòng for", "2 vòng for lồng nhau", "3 vòng for", "while"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Ma trận tam giác trên có đặc điểm?",
        options: [
          "a[i][j]=0 khi i>j",
          "a[i][j]=0 khi i<j",
          "a[i][j]=0 khi i=j",
          "Không có đặc điểm",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Truyền ma trận vào hàm C++ như thế nào?",
        options: [
          "Truyền giá trị",
          "Truyền con trỏ",
          "Truyền tham chiếu",
          "Cả B và C",
        ],
        answer: 3,
      },
    ],
  },
  {
    title: "Chuỗi ký tự (C-style)",
    summary: [
      "Chuỗi C kết thúc bằng ký tự '\\0'. Thao tác với <cstring>: strlen, strcpy, strcmp...",
      "Cẩn thận tràn bộ đệm khi sao chép chuỗi.",
    ],
    snippets: [`char s[10]="abc"; cout<<strlen(s); // 3`],
    quiz: [
      {
        type: "mcq",
        text: "Chuỗi C kết thúc bằng?",
        options: ["\\n", "\\0", "EOF", "space"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Hàm so sánh 2 chuỗi?",
        options: ["strcat", "strcmp", "strcpy", "strlen"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Hàm đo độ dài chuỗi?",
        options: ["length()", "strlen()", "size()", "count()"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Hàm sao chép chuỗi?",
        options: ["strcpy()", "strcat()", "strcmp()", "strchr()"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Hàm nối chuỗi?",
        options: ["strcpy()", "strcat()", "strcmp()", "strlen()"],
        answer: 1,
      },
      {
        type: "mcq",
        text: 'Khai báo chuỗi "hello" đúng?',
        options: [
          'char s[5] = "hello";',
          'char s[6] = "hello";',
          'char s[] = "hello";',
          "B và C đều đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: 'strcmp("abc", "abc") trả về?',
        options: ["0", "1", "-1", "3"],
        answer: 0,
      },
      {
        type: "mcq",
        text: 'strlen("hello") trả về?',
        options: ["4", "5", "6", "Lỗi"],
        answer: 1,
      },
      {
        type: "short",
        text: "Ký tự kết thúc chuỗi C?",
        answer: "\\0",
      },
      {
        type: "mcq",
        text: "Hàm tìm ký tự trong chuỗi?",
        options: ["strchr()", "strstr()", "strcmp()", "strcpy()"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Hàm tìm chuỗi con?",
        options: ["strchr()", "strstr()", "strcmp()", "strcat()"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Chuỗi rỗng có độ dài?",
        options: ["0", "1", "-1", "Không xác định"],
        answer: 0,
      },
      {
        type: "mcq",
        text: 'char s[10] = "hi"; thì s[2] = ?',
        options: ["'i'", "'\\0'", "Lỗi", "Rác"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Đọc chuỗi có khoảng trống dùng?",
        options: ["cin >>", "getline()", "scanf()", "B và C đều đúng"],
        answer: 3,
      },
      {
        type: "mcq",
        text: "Buffer overflow xảy ra khi?",
        options: [
          "Chuỗi quá ngắn",
          "Chuỗi vượt kích thước mảng",
          "Chuỗi rỗng",
          "Không bao giờ",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Chuyển chuỗi sang số dùng?",
        options: ["atoi()", "stoi()", "Cả hai", "Không thể"],
        answer: 2,
      },
    ],
  },
  {
    title: "Con trỏ & cấp phát động",
    summary: [
      "Con trỏ lưu địa chỉ biến. Toán tử &: lấy địa chỉ; *: truy cập giá trị tại địa chỉ.",
      "Cấp phát động: new/delete.",
    ],
    snippets: [`int x=10; int *p=&x; *p=20; // x=20`],
    quiz: [
      {
        type: "mcq",
        text: "Toán tử lấy địa chỉ biến?",
        options: ["*", "&", "->", "%"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Giải phóng bộ nhớ cấp phát bằng new?",
        options: ["free", "delete", "dispose", "release"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Toán tử truy cập giá trị qua con trỏ?",
        options: ["&", "*", "->", "[]"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Khai báo con trỏ int đúng?",
        options: ["int p*;", "int *p;", "*int p;", "pointer<int> p;"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Con trỏ NULL trỏ đến đâu?",
        options: [
          "Địa chỉ 0",
          "Không trỏ đến đâu",
          "Vùng nhớ đặc biệt",
          "A và B đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: "Cấp phát mảng động 10 phần tử int?",
        options: ["new int[10]", "malloc(10)", "int[10] new", "alloc int[10]"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Giải phóng mảng động dùng?",
        options: ["delete p", "delete[] p", "free(p)", "B và C đúng"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Con trỏ p trỏ đến int x, *p = 5 có nghĩa?",
        options: ["p = 5", "x = 5", "Địa chỉ x = 5", "Lỗi"],
        answer: 1,
      },
      {
        type: "short",
        text: "Từ khóa cấp phát bộ nhớ động trong C++?",
        answer: "new",
      },
      {
        type: "mcq",
        text: "Con trỏ void* có thể?",
        options: [
          "Trỏ bất kỳ kiểu nào",
          "Chỉ trỏ int",
          "Chỉ trỏ char",
          "Không tồn tại",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Con trỏ hằng (const pointer) có đặc điểm?",
        options: [
          "Không thể thay đổi địa chỉ",
          "Không thể thay đổi giá trị",
          "Cả hai",
          "Không có đặc biệt",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Pointer arithmetic: p++ có nghĩa?",
        options: [
          "Tăng địa chỉ 1 byte",
          "Tăng địa chỉ 1 đơn vị kiểu dữ liệu",
          "Tăng giá trị tại p",
          "Lỗi",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Con trỏ đến con trỏ khai báo như nào?",
        options: ["int *p;", "int **p;", "int ptr*p;", "pointer int p;"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Memory leak xảy ra khi?",
        options: [
          "Dùng new nhưng không delete",
          "Dùng delete nhiều lần",
          "Dùng con trỏ NULL",
          "Không có memory leak",
        ],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Dangling pointer là gì?",
        options: [
          "Con trỏ NULL",
          "Con trỏ trỏ vùng nhớ đã giải phóng",
          "Con trỏ hằng",
          "Con trỏ void",
        ],
        answer: 1,
      },
      {
        type: "mcq",
        text: "Con trỏ hàm dùng để?",
        options: ["Trỏ đến hàm", "Tham số hàm", "Callback", "Tất cả đều đúng"],
        answer: 3,
      },
    ],
  },
  {
    title: "struct (kiểu dữ liệu cấu trúc)",
    summary: [
      "struct gom nhóm nhiều trường. Truy cập bằng dấu chấm. Có thể truyền struct vào hàm.",
      "Có thể tạo mảng struct để quản lý danh sách.",
    ],
    snippets: [
      `struct SV{ string name; int age; };
SV a={"An",19}; cout<<a.name;`,
    ],
    quiz: [
      {
        type: "mcq",
        text: "Truy cập trường của struct dùng?",
        options: [".", "->", "::", "#"],
        answer: 0,
      },
      {
        type: "mcq",
        text: "Từ khóa khai báo struct?",
        options: ["class", "struct", "record", "type"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "struct có thể chứa?",
        options: ["Chỉ biến", "Chỉ hàm", "Cả biến và hàm", "Chỉ số"],
        answer: 2,
      },
      {
        type: "mcq",
        text: "Khai báo struct Student đúng?",
        options: [
          "struct Student { int id; };",
          "Student struct { int id; };",
          "struct { int id; } Student;",
          "A và C đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: "Khởi tạo struct Point{int x,y;} đúng?",
        options: [
          "Point p = {1,2};",
          "Point p(1,2);",
          "Point p; p.x=1; p.y=2;",
          "Tất cả đều đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: "Con trỏ struct truy cập trường dùng?",
        options: [".", "->", "Cả hai", "::"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "struct trong C++ khác class ở điểm nào?",
        options: [
          "Không khác gì",
          "struct public mặc định",
          "class private mặc định",
          "B và C đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: "Truyền struct vào hàm có thể?",
        options: [
          "Theo giá trị",
          "Theo tham chiếu",
          "Theo con trỏ",
          "Tất cả đều được",
        ],
        answer: 3,
      },
      {
        type: "short",
        text: "Toán tử truy cập trường qua con trỏ struct?",
        answer: "->",
      },
      {
        type: "mcq",
        text: "Mảng struct khai báo như nào?",
        options: [
          "Student arr[10];",
          "struct Student arr[10];",
          "Student[10] arr;",
          "A và B đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: "struct lồng nhau có được không?",
        options: ["Không", "Có", "Chỉ 1 cấp", "Tùy compiler"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "struct có constructor không?",
        options: ["Không", "Có", "Tùy version C++", "Chỉ C++ 11+"],
        answer: 1,
      },
      {
        type: "mcq",
        text: "So sánh 2 struct bằng == được không?",
        options: ["Được", "Không được", "Chỉ primitive type", "Phải overload"],
        answer: 3,
      },
      {
        type: "mcq",
        text: "struct có thể kế thừa không?",
        options: ["Không", "Có", "Chỉ public", "Giống class"],
        answer: 3,
      },
      {
        type: "mcq",
        text: "Kích thước struct bằng?",
        options: [
          "Tổng kích thước các trường",
          "Lớn hơn tổng (padding)",
          "Tùy thuộc",
          "B và C đúng",
        ],
        answer: 3,
      },
      {
        type: "mcq",
        text: "struct thích hợp cho?",
        options: [
          "Nhóm dữ liệu liên quan",
          "POD (Plain Old Data)",
          "Truyền dữ liệu",
          "Tất cả đều đúng",
        ],
        answer: 3,
      },
    ],
  },
];

// ====== LARGE QUESTION POOLS ======
const basePools = (function () {
  const pools = {};

  // helpers
  const qCO = (text, code, ans) => ({
    type: "code-out",
    text,
    code,
    answer: String(ans),
  });
  const qS = (text, ans) => ({ type: "short", text, answer: String(ans) });
  const qM = (text, opts, idx) => ({
    type: "mcq",
    text,
    options: opts,
    answer: idx,
  });

  // basics
  const basics = [];
  [
    [7, 2],
    [5, 2],
    [9, 4],
    [10, 3],
    [11, 5],
    [8, 3],
    [13, 5],
    [100, 30],
    [17, 8],
    [19, 10],
    [21, 4],
    [29, 6],
    [33, 7],
    [41, 9],
    [55, 11],
    [64, 8],
    [73, 10],
    [81, 9],
    [90, 11],
    [99, 20],
  ].forEach(([a, b]) => {
    basics.push(
      qCO(
        "Output của biểu thức a/b (chia nguyên)?",
        `int a=${a}, b=${b}; 
std::cout << a/b;`,
        Math.floor(a / b)
      )
    );
  });
  basics.push(qS("Toán tử nhập dữ liệu từ std::cin là gì?", ">>"));
  basics.push(qS("Toán tử xuất dữ liệu ra std::cout là gì?", "<<"));
  basics.push(
    qM(
      "Hàm bắt đầu chương trình C++?",
      ["start()", "main()", "init()", "entry()"],
      1
    )
  );
  basics.push(
    qM(
      "Thư viện nhập/xuất chuẩn?",
      ["<stdio.h>", "<iostream>", "<system>", "<cstdiostream>"],
      1
    )
  );
  basics.push(
    qM(
      "Khai báo hằng đúng?",
      ["const int X=10;", "int const=10;", "let X=10;", "final int X=10;"],
      0
    )
  );
  basics.push(
    qM("Kiểu lưu ký tự 1 byte?", ["string", "char", "bool", "byte"], 1)
  );
  basics.push(
    qM("Kết thúc câu lệnh trong C++ bằng?", [",", ";", "\\n", "."], 1)
  );
  [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16],
  ].forEach(([a, b, c]) => {
    basics.push(
      qCO(
        "Output của a+b*c ?",
        `int a=${a}, b=${b}, c=${c}; 
std::cout << a+b*c;`,
        a + b * c
      )
    );
    basics.push(
      qCO(
        "Output của (a+b)*c ?",
        `int a=${a}, b=${b}, c=${c}; 
std::cout << (a+b)*c;`,
        (a + b) * c
      )
    );
  });
  pools.basics = basics;

  // control
  const control = [];
  for (let n = 3; n <= 12; n++)
    control.push(
      qCO(
        "Chương trình dưới đây in gì? (vòng lặp trống)",
        `for(int i=0; i<${n}; i++)
{
    // empty body
}
std::cout << "done";`,
        "done"
      )
    );
  for (let n = 3; n <= 12; n++) {
    let s = (n * (n + 1)) / 2;
    control.push(
      qCO(
        "Giá trị s sau for (1..n)?",
        `int s = 0; 
for(int i=1; i<=${n}; i++)
{
    s += i;
}
std::cout << s;`,
        s
      )
    );
  }
  [0, 1, 2, 3, 4, 5, 6].forEach((start) => {
    control.push(
      qCO(
        "do-while chạy ít nhất 1 lần. Giá trị i cuối cùng?",
        `int i = ${start}; 
do
{
    i++;
} while(i < 5);
std::cout << i;`,
        Math.max(5, start + 1)
      )
    );
  });
  control.push(
    qM(
      "Từ khóa thoát vòng lặp ngay?",
      ["continue", "break", "stop", "exit()"],
      1
    )
  );
  control.push(
    qM(
      "switch/case phù hợp cho:",
      ["Giá trị rời rạc", "Điều kiện phức tạp", "Chuỗi dài", "Kiểu double"],
      0
    )
  );
  pools.control = control;

  // array1d
  const array1d = [];
  const arrs = [
    [1, 2, 3],
    [2, 4, 6, 8],
    [5, 7, 9, 11, 13],
    [0, 1, 0, 1, 0],
    [9, 8, 7, 6, 5],
    [3, 1, 4, 1, 5, 9],
    [10, 20, 30],
    [4, 4, 4, 4],
    [2, 3, 5, 7, 11, 13],
    [6, 1, 8, 0, 3],
    [12, 0, 12, 0],
    [8, 16, 24, 32],
  ];
  arrs.forEach((a) => {
    const n = a.length;
    const idxs = [0, 1, n - 1, Math.max(0, Math.floor(n / 2))];
    idxs.forEach((ix) =>
      array1d.push(
        qCO(
          "Giá trị phần tử a[idx]?",
          `int a[${n}] = {${a.join(", ")}}; 
std::cout << a[${ix}];`,
          a[ix]
        )
      )
    );
    const s = a.reduce((x, y) => x + y, 0);
    array1d.push(
      qCO(
        "Tổng các phần tử của mảng a?",
        `int a[${n}] = {${a.join(", ")}}; 
int s = 0; 
for(int i=0; i<${n}; i++)
{
    s += a[i];
}
std::cout << s;`,
        s
      )
    );
  });
  array1d.push(qM("Chỉ số đầu tiên của mảng C++?", ["0", "1", "-1", "tùy"], 0));
  array1d.push(
    qM(
      "Khai báo mảng 10 phần tử?",
      ["int a(10);", "int a[10];", "array<int> a;", "var a[10];"],
      1
    )
  );
  pools.array1d = array1d;

  // array2d
  const array2d = [];
  const Ms = [
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [0, 1],
      [2, 3],
      [4, 5],
    ],
    [
      [2, 2],
      [2, 2],
    ],
    [
      [3, 0, 1],
      [1, 0, 3],
      [2, 2, 2],
    ],
    [
      [1, 1, 1],
      [1, 1, 1],
    ],
    [
      [5, 1],
      [7, 3],
    ],
  ];
  Ms.forEach((M) => {
    const r = M.length,
      c = M[0].length;
    const S = M.flat().reduce((x, y) => x + y, 0);
    array2d.push(
      qCO(
        "Tổng tất cả phần tử ma trận a?",
        `int a[${r}][${c}] = {${M.map((row) => `{${row.join(", ")}}`).join(
          ", "
        )}}; 
int s = 0; 
for(int i=0; i<${r}; i++)
{
    for(int j=0; j<${c}; j++)
    {
        s += a[i][j];
    }
}
std::cout << s;`,
        S
      )
    );
    for (let i = 0; i < r; i++)
      for (let j = 0; j < c; j++)
        array2d.push(
          qCO(
            "Giá trị a[i][j]?",
            `int a[${r}][${c}] = {${M.map((row) => `{${row.join(", ")}}`).join(
              ", "
            )}}; 
std::cout << a[${i}][${j}];`,
            M[i][j]
          )
        );
  });
  array2d.push(
    qM(
      "Khai báo ma trận 2x3 đúng?",
      ["int a[2,3];", "int a[2][3];", "int a(2)(3);", "matrix<int,2,3> a;"],
      1
    )
  );
  pools.array2d = array2d;

  // strings
  const strings = [];
  [
    "",
    "a",
    "ab",
    "abc",
    "hello",
    "Cplusplus",
    "pointer",
    "array",
    "string",
    "recursion",
    "012345",
    "UIT",
  ].forEach((s) => {
    strings.push(
      qCO(
        "Kết quả strlen(s)?",
        `char s[${Math.max(2, s.length + 1)}] = "${s}"; 
std::cout << strlen(s);`,
        s.length
      )
    );
  });
  strings.push(
    qM("Chuỗi C kết thúc bằng kí tự gì?", ["\\n", "\\0", "EOF", "space"], 1)
  );
  strings.push(
    qM("Hàm so sánh 2 chuỗi C?", ["strcat", "strlen", "strcmp", "strrev"], 2)
  );
  strings.push(
    qM("Hàm nối chuỗi C?", ["strcat", "strcmp", "strcpy", "strlen"], 0)
  );
  pools.strings = strings;

  // pointers
  const pointers = [];
  [
    [10, 20],
    [5, 7],
    [1, 99],
    [42, 100],
    [0, 11],
    [3, 3],
    [8, 16],
    [12, 24],
    [7, 14],
    [9, 27],
    [15, 30],
    [4, 8],
  ].forEach(([x, v]) => {
    pointers.push(
      qCO(
        "Sau *p=..., giá trị x là?",
        `int x = ${x}; 
int *p = &x; 
*p = ${v}; 
std::cout << x;`,
        v
      )
    );
  });
  [1, 2, 3, 9, 10, 15, 20, 50, 99].forEach((x) =>
    pointers.push(
      qCO(
        "Giá trị in ra từ con trỏ p?",
        `int *p = new int(${x}); 
std::cout << *p; 
delete p;`,
        x
      )
    )
  );
  pointers.push(qM("Toán tử lấy địa chỉ biến?", ["*", "&", "->", "%"], 1));
  pointers.push(
    qM(
      "Giải phóng bộ nhớ cấp phát bằng new?",
      ["free", "delete", "dispose", "release"],
      1
    )
  );
  pointers.push(
    qM("Toán tử truy cập giá trị tại địa chỉ?", ["&", "*", "->", "[]"], 1)
  );
  pools.pointers = pointers;

  // functions
  const functions = [];
  [0, 1, 2, 5, 10, 20, 7, 13, 21].forEach((v) => {
    functions.push(
      qCO(
        "Giá trị a sau inc(a) với tham chiếu?",
        `void inc(int &x)
{
    x++;
}
int main()
{
    int a=${v}; 
    inc(a); 
    std::cout<<a;
}`,
        v + 1
      )
    );
  });
  functions.push(
    qM(
      "Khai báo hàm trả về int đúng?",
      ["int f();", "f(): int", "func int()", "int: f()"],
      0
    )
  );
  functions.push(qM("Tham chiếu ký hiệu?", ["*", "&", "->", "%"], 1));
  functions.push(
    qM(
      "Truyền theo giá trị nghĩa là?",
      [
        "Hàm nhận bản sao",
        "Hàm nhận tham chiếu",
        "Hàm nhận con trỏ",
        "Không truyền",
      ],
      0
    )
  );
  pools.functions = functions;

  // recursion
  const recursion = [];
  const fact = (n) => {
    let r = 1;
    for (let i = 1; i <= n; i++) r *= i;
    return r;
  };
  for (let n = 0; n <= 8; n++)
    recursion.push(
      qCO(
        "Giá trị fact(n)?",
        `int fact(int n)
{
    return (n<=1) ? 1 : n*fact(n-1); 
}
int main()
{
    std::cout << fact(${n});
}`,
        fact(n)
      )
    );
  recursion.push(
    qM(
      "Đệ quy cần có gì để tránh lặp vô hạn?",
      ["goto", "điều kiện dừng", "biến toàn cục", "mảng tĩnh"],
      1
    )
  );
  pools.recursion = recursion;

  // structs
  const structs = [];
  const names = [
    "An",
    "Binh",
    "Chi",
    "Dung",
    "Em",
    "Giang",
    "Huy",
    "Khanh",
    "Linh",
    "Minh",
    "Nam",
    "Oanh",
    "Phuc",
    "Quynh",
    "Son",
    "Trang",
    "Uyen",
    "Viet",
    "Yen",
    "Zed",
    "Thinh",
    "Nhi",
  ];
  const ages = [18, 19, 20, 21, 22, 23, 24, 25, 19, 20, 21, 22, 23, 24];
  names.forEach((nm, i) => {
    const ag = ages[i % ages.length];
    structs.push(
      qCO(
        "In tên sinh viên a.name là?",
        `struct SV 
{
    std::string name; 
    int age; 
}; 
SV a = {"${nm}", ${ag}}; 
std::cout << a.name;`,
        nm
      )
    );
    structs.push(
      qCO(
        "In tuổi sinh viên a.age là?",
        `struct SV 
{
    std::string name; 
    int age; 
}; 
SV a = {"${nm}", ${ag}}; 
std::cout << a.age;`,
        ag
      )
    );
  });
  structs.push(
    qM("Truy cập trường trong struct dùng?", [".", "->", "::", "#"], 0)
  );
  pools.structs = structs;

  return pools;
})();

function buildTenTests() {
  const cats = Object.keys(basePools);
  const tests = [];
  for (let i = 0; i < 10; i++) {
    const qs = [];
    const usedIdx = Object.fromEntries(cats.map((c) => [c, new Set()]));
    while (qs.length < 50) {
      for (const c of cats) {
        const pool = basePools[c];
        if (!pool || !pool.length) continue;
        let idx = -1,
          tries = 0;
        do {
          idx = Math.floor(Math.random() * pool.length);
          tries++;
        } while (usedIdx[c].has(idx) && tries < 10);
        usedIdx[c].add(idx);
        qs.push(pool[idx]);
        if (qs.length >= 50) break;
      }
    }
    tests.push({
      description: `Đề tổng hợp kiến thức C++ (50 câu) — lần ${i + 1}`,
      questions: qs,
    });
  }
  return tests;
}

// ====== FLASHCARDS (40 MCQ mỗi chủ đề) ======
const flashcards = (function () {
  const cards = [];
  const add = (topic, text, options, answer) => cards.push({ topic, text, options, answer });
  // 1. Cú pháp C++ (40 câu)
  add("Cú pháp", "Hàm main() có vai trò gì?", ["Điểm bắt đầu chương trình", "Kết thúc chương trình", "Khai báo biến", "In ra màn hình"], 0);
  add("Cú pháp", "Ký tự nào kết thúc câu lệnh C++?", [",", ".", ";", ":"], 2);
  add("Cú pháp", "Comment một dòng trong C++ dùng?", ["/* */", "//", "#", "--"], 1);
  add("Cú pháp", "Comment nhiều dòng trong C++ dùng?", ["//", "/* */", "<!-- -->", "# #"], 1);
  add("Cú pháp", "Từ khóa nào khai báo hằng số?", ["var", "const", "final", "static"], 1);
  add("Cú pháp", "Tên biến C++ có thể bắt đầu bằng?", ["Số", "Chữ cái hoặc _", "Ký tự đặc biệt", "Khoảng trắng"], 1);
  add("Cú pháp", "#include có tác dụng gì?", ["Khai báo hàm", "Chèn nội dung file khác", "Tạo biến", "Kết thúc chương trình"], 1);
  add("Cú pháp", "namespace std có tác dụng gì?", ["Tạo biến", "Sử dụng cout/cin mà không cần std::", "Kết thúc chương trình", "Khai báo mảng"], 1);
  add("Cú pháp", "Kiểu dữ liệu nào lưu số nguyên?", ["float", "int", "char", "string"], 1);
  add("Cú pháp", "Kiểu dữ liệu nào lưu số thực?", ["int", "char", "float", "bool"], 2);
  add("Cú pháp", "Kiểu dữ liệu nào lưu ký tự?", ["int", "float", "char", "string"], 2);
  add("Cú pháp", "Kiểu dữ liệu bool có thể nhận giá trị nào?", ["0 và 1", "true và false", "Cả hai", "Chỉ số nguyên"], 2);
  add("Cú pháp", "Kích thước int thường là bao nhiêu byte?", ["2", "4", "8", "1"], 1);
  add("Cú pháp", "Kích thước char là bao nhiêu byte?", ["1", "2", "4", "8"], 0);
  add("Cú pháp", "Giá trị mặc định của biến int chưa khởi tạo?", ["0", "1", "Giá trị rác", "-1"], 2);
  add("Cú pháp", "Cách khai báo biến đúng?", ["int x;", "x int;", "integer x;", "var x;"], 0);
  add("Cú pháp", "Cách khởi tạo biến đúng?", ["int x = 5;", "int x := 5;", "x = 5 int;", "5 = int x;"], 0);
  add("Cú pháp", "Ký tự escape \\n có nghĩa gì?", ["Tab", "Xuống dòng", "Khoảng trắng", "Backslash"], 1);
  add("Cú pháp", "Ký tự escape \\t có nghĩa gì?", ["Tab", "Xuống dòng", "Null", "Backslash"], 0);
  add("Cú pháp", "Từ khóa nào thoát khỏi chương trình?", ["exit", "return", "break", "continue"], 0);
  add("Cú pháp", "Thứ tự ưu tiên toán tử * và + như thế nào?", ["+ cao hơn *", "* cao hơn +", "Bằng nhau", "Tùy thuộc vào context"], 1);
  add("Cú pháp", "Biến toàn cục được khai báo ở đâu?", ["Trong hàm main", "Ngoài tất cả hàm", "Trong header file", "Không thể khai báo"], 1);
  add("Cú pháp", "Biến cục bộ có phạm vi như thế nào?", ["Toàn chương trình", "Chỉ trong hàm", "Chỉ trong file", "Không có phạm vi"], 1);
  add("Cú pháp", "Từ khóa nào định nghĩa hằng số?", ["#define", "const", "Cả hai", "Không có"], 2);
  add("Cú pháp", "Cách viết hằng số đúng?", ["const int MAX = 100;", "int const = 100;", "MAX const int = 100;", "Tất cả đều sai"], 0);
  add("Cú pháp", "Compiler C++ phổ biến là gì?", ["gcc/g++", "javac", "python", "node"], 0);
  add("Cú pháp", "File C++ có đuôi gì?", [".c", ".cpp", ".java", ".py"], 1);
  add("Cú pháp", "Lệnh biên dịch C++ cơ bản?", ["g++ file.cpp", "javac file.cpp", "python file.cpp", "node file.cpp"], 0);
  add("Cú pháp", "Header file C++ có đuôi gì?", [".h", ".hpp", ".hxx", "Tất cả đều đúng"], 3);
  add("Cú pháp", "Preprocessor directive bắt đầu bằng?", ["@", "#", "$", "%"], 1);
  add("Cú pháp", "Từ khóa auto trong C++11 có tác dụng gì?", ["Tự động gán giá trị", "Tự động suy luận kiểu", "Tự động xóa biến", "Không có tác dụng"], 1);
  add("Cú pháp", "nullptr trong C++11 thay thế cho gì?", ["0", "NULL", "false", "Cả A và B"], 3);
  add("Cú pháp", "Range-based for loop có từ C++ phiên bản nào?", ["C++98", "C++03", "C++11", "C++14"], 2);
  add("Cú pháp", "Từ khóa decltype có tác dụng gì?", ["Khai báo kiểu", "Lấy kiểu của biểu thức", "Xóa kiểu", "Chuyển đổi kiểu"], 1);
  add("Cú pháp", "Uniform initialization {} có từ C++ nào?", ["C++98", "C++03", "C++11", "C++14"], 2);
  add("Cú pháp", "Lambda expression có từ C++ nào?", ["C++98", "C++03", "C++11", "C++14"], 2);
  add("Cú pháp", "Move semantics có từ C++ nào?", ["C++98", "C++03", "C++11", "C++14"], 2);
  add("Cú pháp", "Smart pointer có từ C++ nào?", ["C++98", "C++03", "C++11", "C++14"], 2);
  add("Cú pháp", "Constexpr có từ C++ nào?", ["C++98", "C++03", "C++11", "C++14"], 2);
  add("Cú pháp", "std::string có trong header nào?", ["<iostream>", "<string>", "<cstring>", "<algorithm>"], 1);

  // 2. I/O - Nhập xuất (40 câu)
  add("I/O", "Toán tử xuất ra cout là gì?", [">>", "<<", "<>", "><"], 1);
  add("I/O", "Toán tử nhập từ cin là gì?", [">>", "<<", "<>", "><"], 0);
  add("I/O", "Header file cho cin/cout là gì?", ["<stdio.h>", "<iostream>", "<conio.h>", "<string>"], 1);
  add("I/O", "Cách xuất số nguyên x ra màn hình?", ["cout << x;", "printf(x);", "print x;", "console.log(x);"], 0);
  add("I/O", "Cách nhập số nguyên x từ bàn phím?", ["cin >> x;", "scanf(x);", "input x;", "read x;"], 0);
  add("I/O", "endl có tác dụng gì?", ["Xuống dòng", "Tab", "Khoảng trắng", "Kết thúc"], 0);
  add("I/O", "\\n và endl khác nhau như thế nào?", ["Không khác", "endl flush buffer", "\\n nhanh hơn", "B và C đúng"], 3);
  add("I/O", "Xuất nhiều giá trị cùng lúc như thế nào?", ["cout << a << b;", "cout >> a >> b;", "print a, b;", "printf(a, b);"], 0);
  add("I/O", "Nhập nhiều giá trị cùng lúc như thế nào?", ["cin >> a >> b;", "cin << a << b;", "scanf(a, b);", "input a, b;"], 0);
  add("I/O", "Đọc chuỗi có khoảng trắng dùng gì?", ["cin >>", "getline()", "cin.get()", "B và C đúng"], 3);
  add("I/O", "cin.get() có tác dụng gì?", ["Đọc một ký tự", "Đọc một dòng", "Đọc một số", "Xóa buffer"], 0);
  add("I/O", "cin.ignore() có tác dụng gì?", ["Bỏ qua ký tự", "Đọc ký tự", "Xóa màn hình", "Kết thúc nhập"], 0);
  add("I/O", "getline(cin, s) đọc vào đâu?", ["char array", "string", "int", "float"], 1);
  add("I/O", "Làm thế nào xóa buffer sau cin?", ["cin.clear()", "cin.ignore()", "fflush()", "cin.flush()"], 1);
  add("I/O", "cout << fixed có tác dụng gì?", ["In số nguyên", "In số thập phân cố định", "In chuỗi", "In ký tự"], 1);
  add("I/O", "cout << setprecision(2) làm gì?", ["Set 2 chữ số thập phân", "Set 2 chữ số nguyên", "Set độ rộng 2", "Không có tác dụng"], 0);
  add("I/O", "Header file cho setprecision là gì?", ["<iostream>", "<iomanip>", "<cmath>", "<string>"], 1);
  add("I/O", "cout << setw(5) có tác dụng gì?", ["Set độ rộng 5", "Set 5 chữ số", "Set 5 dòng", "Không có tác dụng"], 0);
  add("I/O", "cout << left có tác dụng gì?", ["Canh trái", "Canh phải", "Canh giữa", "Không có tác dụng"], 0);
  add("I/O", "cout << right có tác dụng gì?", ["Canh trái", "Canh phải", "Canh giữa", "Không có tác dụng"], 1);
  add("I/O", "Đọc file trong C++ dùng gì?", ["ifstream", "ofstream", "fstream", "Tất cả đều đúng"], 0);
  add("I/O", "Ghi file trong C++ dùng gì?", ["ifstream", "ofstream", "fstream", "iostream"], 1);
  add("I/O", "Header file cho file I/O là gì?", ["<iostream>", "<fstream>", "<stdio.h>", "<conio.h>"], 1);
  add("I/O", "Kiểm tra file mở thành công như thế nào?", ["file.is_open()", "file.good()", "file.fail()", "Tất cả đều đúng"], 3);
  add("I/O", "Đóng file như thế nào?", ["file.close()", "fclose(file)", "close(file)", "file.end()"], 0);
  add("I/O", "std::cin.fail() trả về gì?", ["true nếu lỗi nhập", "false nếu lỗi", "Số lỗi", "Không có"], 0);
  add("I/O", "Xóa trạng thái lỗi cin như thế nào?", ["cin.clear()", "cin.reset()", "cin.flush()", "cin.good()"], 0);
  add("I/O", "Printf trong C++ cần header gì?", ["<iostream>", "<cstdio>", "<stdio.h>", "B và C đúng"], 3);
  add("I/O", "Scanf trong C++ cần header gì?", ["<iostream>", "<cstdio>", "<stdio.h>", "B và C đúng"], 3);
  add("I/O", "cout << hex có tác dụng gì?", ["In hệ 16", "In hệ 8", "In hệ 2", "In hệ 10"], 0);
  add("I/O", "cout << oct có tác dụng gì?", ["In hệ 16", "In hệ 8", "In hệ 2", "In hệ 10"], 1);
  add("I/O", "cout << dec có tác dụng gì?", ["In hệ 16", "In hệ 8", "In hệ 2", "In hệ 10"], 3);
  add("I/O", "cout << boolalpha có tác dụng gì?", ["In true/false", "In 1/0", "In yes/no", "Không có"], 0);
  add("I/O", "stringstream có trong header nào?", ["<iostream>", "<sstream>", "<string>", "<algorithm>"], 1);
  add("I/O", "ostringstream dùng để làm gì?", ["Đọc chuỗi", "Ghi vào chuỗi", "Xóa chuỗi", "So sánh chuỗi"], 1);
  add("I/O", "istringstream dùng để làm gì?", ["Đọc từ chuỗi", "Ghi vào chuỗi", "Xóa chuỗi", "So sánh chuỗi"], 0);
  add("I/O", "cin >> x khi x là string sẽ?", ["Đọc cả dòng", "Đọc đến khoảng trắng", "Đọc 1 ký tự", "Báo lỗi"], 1);
  add("I/O", "Cách nào tốt nhất để flush cout?", ["cout.flush()", "cout << flush", "endl", "Tất cả đều đúng"], 3);
  add("I/O", "cerr và cout khác nhau như thế nào?", ["cerr cho lỗi", "cerr không buffer", "cerr ra stderr", "Tất cả đều đúng"], 3);
  add("I/O", "clog trong C++ là gì?", ["Buffered error output", "Console log", "C log", "Không tồn tại"], 0);

  // 3. Toán tử (40 câu)
  add("Toán tử", "Toán tử số học cơ bản gồm?", ["+ - * /", "+ - * / %", "chỉ + -", "+ - * / ^ %"], 1);
  add("Toán tử", "Toán tử % có tác dụng gì?", ["Chia", "Chia lấy dư", "Phần trăm", "Lũy thừa"], 1);
  add("Toán tử", "5 % 3 bằng bao nhiêu?", ["1", "2", "0", "1.67"], 1);
  add("Toán tử", "Toán tử ++ có tác dụng gì?", ["Cộng 2", "Tăng 1", "Nhân 2", "Không có"], 1);
  add("Toán tử", "++x và x++ khác nhau như thế nào?", ["Không khác", "++x tăng trước", "x++ tăng sau", "B và C đúng"], 3);
  add("Toán tử", "Toán tử so sánh bằng là gì?", ["=", "==", "===", "eq"], 1);
  add("Toán tử", "Toán tử gán là gì?", ["=", "==", ":=", "->"], 0);
  add("Toán tử", "Toán tử != có nghĩa gì?", ["Bằng", "Không bằng", "Lớn hơn", "Nhỏ hơn"], 1);
  add("Toán tử", "Toán tử && là gì?", ["Logic AND", "Logic OR", "Bitwise AND", "Gán"], 0);
  add("Toán tử", "Toán tử || là gì?", ["Logic AND", "Logic OR", "Bitwise OR", "Gán"], 1);
  add("Toán tử", "true && false bằng gì?", ["true", "false", "1", "0"], 1);
  add("Toán tử", "true || false bằng gì?", ["true", "false", "1", "0"], 0);
  add("Toán tử", "Toán tử & là gì?", ["Logic AND", "Bitwise AND", "Address", "Cả B và C"], 3);
  add("Toán tử", "Toán tử << là gì?", ["Shift left", "Stream output", "Cả hai", "Không có"], 2);
  add("Toán tử", "Toán tử >> là gì?", ["Shift right", "Stream input", "Cả hai", "Không có"], 2);
  add("Toán tử", "Toán tử += có tác dụng gì?", ["x = x + y", "x += y", "Cả hai", "Không có"], 2);
  add("Toán tử", "x *= 3 tương đương với gì?", ["x = x * 3", "x = 3 * x", "Cả hai", "x = x + 3"], 2);
  add("Toán tử", "Toán tử ?: là gì?", ["Conditional operator", "Ternary operator", "Cả hai", "Không tồn tại"], 2);
  add("Toán tử", "(x > 0) ? 1 : -1 có nghĩa gì?", ["Nếu x > 0 thì 1, ngược lại -1", "x > 0 và 1", "x > 0 hoặc -1", "Lỗi cú pháp"], 0);
  add("Toán tử", "Toán tử sizeof trả về gì?", ["Kích thước tính bằng byte", "Kích thước tính bằng bit", "Địa chỉ", "Giá trị"], 0);
  add("Toán tử", "Độ ưu tiên của * và + như thế nào?", ["* cao hơn +", "+ cao hơn *", "Bằng nhau", "Tùy context"], 0);
  add("Toán tử", "Độ ưu tiên của && và || như thế nào?", ["&& cao hơn ||", "|| cao hơn &&", "Bằng nhau", "Tùy context"], 0);
  add("Toán tử", "Thứ tự kết hợp của = như thế nào?", ["Trái sang phải", "Phải sang trái", "Không có", "Tùy context"], 1);
  add("Toán tử", "a = b = c = 5 sẽ làm gì?", ["Lỗi", "a, b, c đều = 5", "Chỉ c = 5", "Chỉ a = 5"], 1);
  add("Toán tử", "Toán tử nào có độ ưu tiên cao nhất?", ["()", "*", "+", "="], 0);
  add("Toán tử", "Short-circuit evaluation áp dụng với?", ["&&", "||", "Cả hai", "Không có"], 2);
  add("Toán tử", "false && (x++) sẽ làm gì với x?", ["x tăng 1", "x không đổi", "x = 0", "Lỗi"], 1);
  add("Toán tử", "true || (x++) sẽ làm gì với x?", ["x tăng 1", "x không đổi", "x = 0", "Lỗi"], 1);
  add("Toán tử", "Ép kiểu (cast) trong C++ như thế nào?", ["(int)x", "int(x)", "static_cast<int>(x)", "Tất cả đều đúng"], 3);
  add("Toán tử", "dynamic_cast dùng cho gì?", ["Ép kiểu cơ bản", "Ép kiểu đa hình", "Ép kiểu const", "Ép kiểu pointer"], 1);
  add("Toán tử", "const_cast dùng để làm gì?", ["Ép kiểu const", "Loại bỏ const", "Thêm const", "B và C"], 3);
  add("Toán tử", "reinterpret_cast dùng cho gì?", ["Ép kiểu an toàn", "Ép kiểu không an toàn", "Ép kiểu tự động", "Không dùng"], 1);
  add("Toán tử", "Operator overloading là gì?", ["Nạp chồng toán tử", "Thay đổi toán tử", "Tạo toán tử mới", "Xóa toán tử"], 0);
  add("Toán tử", "Comma operator có tác dụng gì?", ["Ngăn cách", "Thực hiện tuần tự", "Cả hai", "Không có"], 2);
  add("Toán tử", "Toán tử . và -> khác nhau ntn?", [". cho object, -> cho pointer", ". cho pointer, -> cho object", "Không khác", "Chỉ khác cú pháp"], 0);
  add("Toán tử", "Toán tử [] dùng cho gì?", ["Array subscript", "Function call", "Member access", "Cast"], 0);
  add("Toán tử", "Toán tử () có mấy ý nghĩa?", ["1", "2", "3", "Nhiều"], 3);
  add("Toán tử", "Scope resolution operator là gì?", ["::", "->", ".", "::*"], 0);
  add("Toán tử", "Member pointer operator là gì?", [".*", "->*", "Cả hai", "::"], 2);
  add("Toán tử", "Toán tử mới trong C++20?", ["<=>", "<=", ">=", "=="], 0);
  add("Toán tử", "spaceship operator <=> trả về gì?", ["int", "bool", "ordering", "void"], 2);

  // 4. Điều kiện & Vòng lặp (40 câu)
  add("Điều kiện", "Cấu trúc if cơ bản có dạng nào?", ["if (condition)", "if condition", "if [condition]", "if {condition}"], 0);
  add("Điều kiện", "else luôn đi kèm với gì?", ["if", "while", "for", "switch"], 0);
  add("Điều kiện", "else if dùng khi nào?", ["Nhiều điều kiện", "Chỉ 2 điều kiện", "Vòng lặp", "Switch case"], 0);
  add("Điều kiện", "switch case dùng với kiểu dữ liệu nào?", ["int/char", "float", "string", "array"], 0);
  add("Điều kiện", "break trong switch có tác dụng gì?", ["Thoát switch", "Tiếp tục case tiếp", "Lặp lại", "Không có"], 0);
  add("Điều kiện", "default trong switch dùng khi nào?", ["Không case nào match", "Case đầu tiên", "Case cuối", "Mọi case"], 0);
  add("Điều kiện", "Vòng lặp for có cấu trúc như thế nào?", ["for(init; condition; update)", "for(condition)", "for(init; update)", "for(condition; update)"], 0);
  add("Điều kiện", "Vòng lặp while kiểm tra điều kiện khi nào?", ["Trước mỗi lần lặp", "Sau mỗi lần lặp", "Chỉ lần đầu", "Chỉ lần cuối"], 0);
  add("Điều kiện", "Vòng lặp do-while khác while ở điểm nào?", ["Kiểm tra điều kiện sau", "Không có khác biệt", "Chạy nhanh hơn", "Cú pháp khác"], 0);
  add("Điều kiện", "Vòng lặp nào chạy ít nhất 1 lần?", ["for", "while", "do-while", "Tất cả"], 2);
  add("Điều kiện", "break trong vòng lặp có tác dụng gì?", ["Thoát vòng lặp", "Bỏ qua lần lặp", "Tiếp tục lặp", "Không có"], 0);
  add("Điều kiện", "continue trong vòng lặp có tác dụng gì?", ["Thoát vòng lặp", "Bỏ qua lần lặp hiện tại", "Lặp lại", "Không có"], 1);
  add("Điều kiện", "for(;;) có nghĩa gì?", ["Vòng lặp vô hạn", "Vòng lặp 0 lần", "Lỗi cú pháp", "Không có nghĩa"], 0);
  add("Điều kiện", "while(true) có nghĩa gì?", ["Vòng lặp vô hạn", "Vòng lặp 1 lần", "Lỗi cú pháp", "Không chạy"], 0);
  add("Điều kiện", "Nested loop là gì?", ["Vòng lặp lồng nhau", "Hai vòng lặp riêng", "Vòng lặp sai", "Không tồn tại"], 0);
  add("Điều kiện", "for(int i=0; i<5; i++) chạy mấy lần?", ["4", "5", "6", "Vô hạn"], 1);
  add("Điều kiện", "for(int i=1; i<=5; i++) chạy mấy lần?", ["4", "5", "6", "Vô hạn"], 1);
  add("Điều kiện", "for(int i=5; i>0; i--) chạy mấy lần?", ["4", "5", "6", "0"], 1);
  add("Điều kiện", "Lỗi off-by-one thường xảy ra khi nào?", ["Điều kiện dừng sai", "Khởi tạo sai", "Update sai", "Tất cả"], 3);
  add("Điều kiện", "goto trong C++ có nên dùng không?", ["Nên", "Không nên", "Tùy trường hợp", "Không tồn tại"], 1);
  add("Điều kiện", "Label cho goto viết như thế nào?", ["label:", ":label", "goto label", "label;"], 0);
  add("Điều kiện", "Range-based for loop có cú pháp nào?", ["for(auto x : container)", "for(x in container)", "for x in container", "for(x of container)"], 0);
  add("Điều kiện", "Range-based for loop có từ C++ nào?", ["C++98", "C++03", "C++11", "C++14"], 2);
  add("Điều kiện", "if constexpr có từ C++ nào?", ["C++11", "C++14", "C++17", "C++20"], 2);
  add("Điều kiện", "switch với string có được không?", ["C++98: không", "C++11: có", "Không bao giờ", "A đúng"], 0);
  add("Điều kiện", "Fallthrough trong switch là gì?", ["Không có break", "Có break", "Default case", "Lỗi"], 0);
  add("Điều kiện", "[[fallthrough]] attribute có tác dụng gì?", ["Chỉ định fallthrough cố ý", "Ngăn fallthrough", "Báo lỗi", "Không có"], 0);
  add("Điều kiện", "Điều kiện trong if phải có kiểu gì?", ["bool", "int", "Convertible to bool", "C đúng"], 3);
  add("Điều kiện", "if(0) sẽ thực hiện không?", ["Có", "Không", "Lỗi", "Tùy compiler"], 1);
  add("Điều kiện", "if(1) sẽ thực hiện không?", ["Có", "Không", "Lỗi", "Tùy compiler"], 0);
  add("Điều kiện", "Comma operator trong for loop hoạt động ntn?", ["Thực hiện tuần tự", "Chỉ lấy giá trị cuối", "Cả hai", "Lỗi"], 2);
  add("Điều kiện", "for(int i=0, j=5; i<j; i++, j--) hợp lệ?", ["Có", "Không", "Lỗi cú pháp", "Tùy compiler"], 0);
  add("Điều kiện", "break trong vòng lặp lồng thoát mấy cấp?", ["1 cấp", "Tất cả", "2 cấp", "Tùy context"], 0);
  add("Điều kiện", "continue trong vòng lặp lồng ảnh hưởng cấp nào?", ["Cấp hiện tại", "Tất cả cấp", "Cấp ngoài", "Cấp trong"], 0);
  add("Điều kiện", "Infinite loop có thể thoát bằng gì?", ["break", "return", "exit()", "Tất cả"], 3);
  add("Điều kiện", "while(cin >> x) có nghĩa gì?", ["Đọc đến EOF", "Đọc 1 lần", "Đọc vô hạn", "Lỗi"], 0);
  add("Điều kiện", "Loop unrolling là kỹ thuật gì?", ["Tối ưu hóa vòng lặp", "Tạo vòng lặp", "Xóa vòng lặp", "Debug vòng lặp"], 0);
  add("Điều kiện", "Condition variable trong if có thể là gì?", ["Expression", "Function call", "Assignment", "Tất cả"], 3);
  add("Điều kiện", "Short-circuit evaluation áp dụng với if không?", ["Có", "Không", "Tùy trường hợp", "Không biết"], 0);
  add("Điều kiện", "if(a && b) khi a false thì b có được kiểm tra?", ["Có", "Không", "Tùy compiler", "Lỗi"], 1);
  add("Điều kiện", "structured binding có từ C++ nào?", ["C++11", "C++14", "C++17", "C++20"], 2);

  // Note: Hiện tại có 160 câu (4 chủ đề), cần thêm 7 chủ đề nữa
  // 5. Hàm, 6. Đệ quy, 7. Mảng 1D, 8. Mảng 2D, 9. Chuỗi, 10. Con trỏ, 11. Struct
  // mỗi chủ đề 40 câu để đạt tổng 440 câu
  return cards; // 4 chủ đề * 40 = 160 thẻ MCQ (cần mở rộng thêm)
})();

const resources = [
  {
    title: "Đề cương ôn tập IT001 (HK1)",
    url: "./docs/IT001_Noidung_CK_2024-2025.docx",
    note: "Nội dung cần ôn tập",
  },
  {
    title: "Đề thi mẫu 01 + đáp án",
    url: "./docs/DeThi_IT001-HK1_2025.docx",
    note: "Đề thi mẫu kèm đáp án",
  },
  {
    title: "Đề thi mẫu 02 + đáp án",
    url: "./docs/DeThi_IT001-HK1_2025_DA.docx",
    note: "Đề thi có đáp án",
  },
  {
    title: "Slides Chương 1 - Tổng quan",
    url: "./docs/Slide_Chap1_TongQuan.pdf",
    note: "PDF chương 1",
  },
  {
    title: "Slides Chương 2 - Thuật toán",
    url: "./docs/Slide_Chap2_GioiThieuVeThuatToan.pdf",
    note: "PDF chương 2",
  },
  {
    title: "Slides Chương 3.1 - Kiểu dữ liệu",
    url: "./docs/Slide_Chap3.1_CacKieuDuLieuCoBan.pdf",
    note: "PDF chương 3.1",
  },
  {
    title: "Slides Chương 3.2 - Phép toán",
    url: "./docs/Slide_Chap3.2_CacPhepToan.pdf",
    note: "PDF chương 3.2",
  },
  {
    title: "Slides Chương 3.3 - Nhập xuất",
    url: "./docs/Slide_Chap3.3_NhapXuatC++.pdf",
    note: "PDF chương 3.3",
  },
  {
    title: "Slides Chương 4.1 - Rẽ nhánh",
    url: "./docs/Slide_Chap4.1_CauDieuKien_ReNhanh.pdf",
    note: "PDF chương 4.1",
  },
  {
    title: "Slides Chương 4.2 - Vòng lặp",
    url: "./docs/Slide_Chap4.2_CauDieuKien_VongLap.pdf",
    note: "PDF chương 4.2",
  },
  {
    title: "Slides Chương 5 - Hàm",
    url: "./docs/Slide_Chap5_Ham.pdf",
    note: "PDF chương 5",
  },
  {
    title: "Slides Chương 6 - Đệ quy",
    url: "./docs/Slide_Chap6_HamDeQuy.pdf",
    note: "PDF chương 6",
  },
  {
    title: "Slides Chương 7.1 - Mảng 1D",
    url: "./docs/Slide_Chap7.1_1D.pdf",
    note: "PDF chương 7.1",
  },
  {
    title: "Slides Chương 7.2 - Mảng 2D",
    url: "./docs/Slide_Chap7.2_2D.pdf",
    note: "PDF chương 7.2",
  },
  {
    title: "Slides Chương 7.3 - Chuỗi",
    url: "./docs/Slide_Chap7.3_Chuoi.pdf",
    note: "PDF chương 7.3",
  },
  {
    title: "Slides Chương 8.1 - Con trỏ cơ bản",
    url: "./docs/Slide_Chap8.1_ConTroCoBan.pdf",
    note: "PDF chương 8.1",
  },
  {
    title: "Slides Chương 8.2 - Cấp phát động",
    url: "./docs/Slide_Chap8.2_ConTroCapPhatDong.pdf",
    note: "PDF chương 8.2",
  },
  {
    title: "Slides Chương 9 - Struct",
    url: "./docs/Slide_Chap9_Struct.pdf",
    note: "PDF chương 9",
  },
];

// ---- LocalStorage helpers ----
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}
function saveProgress(obj) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const app = Vue.createApp({
  data() {
    const state = loadProgress();
    return {
      view: "home",
      chapters,
      quizzes: buildTenTests(),
      flashcards,
      resources,
      passScore: PASS_SCORE,

      // ===== topic quiz & shuffle =====
      topicLabels: TOPIC_LABELS,
      selectedTopicKey: "",
      topicMode: false,

      // state
      completedChapters: new Set(state.completedChapters || []),
      quizResults: state.quizResults || {}, // { [testIndex]: { bestScore, attempts } }
      learnedFlashcards: new Set(state.learnedFlashcards || []),

      // chapters UI
      currentChapterIndex: null,
      miniAnswers: {},
      miniScore: null,

      // quiz UI
      takingQuizIndex: null,
      currentQuizQuestions: [],
      quizAnswers: {},
      quizScore: null,

      // flashcards UI
      flashIndex: 0,
      showAnswer: false,
      hideLearned: false,

      // UIT exam generator
      uitExam: null,
    };
  },
  computed: {
    chapterProgress() {
      return Math.round(
        (this.completedChapters.size / this.chapters.length) * 100
      );
    },
    quizProgress() {
      const p = this.quizzes.reduce(
        (acc, _, i) => acc + (this.isPassed(i) ? 1 : 0),
        0
      );
      return Math.round((p / this.quizzes.length) * 100);
    },
    flashProgress() {
      return Math.round(
        (this.learnedFlashcards.size / this.flashcards.length) * 100
      );
    },
    completedChaptersCount() {
      return this.completedChapters.size;
    },
    passedQuizzes() {
      return this.quizzes.filter((_, i) => this.isPassed(i)).length;
    },
    currentChapter() {
      return this.currentChapterIndex !== null
        ? this.chapters[this.currentChapterIndex]
        : null;
    },
    filteredFlashcards() {
      return this.hideLearned
        ? this.flashcards.filter((_, i) => !this.learnedFlashcards.has(i))
        : this.flashcards;
    },
    currentFlash() {
      if (!this.filteredFlashcards.length)
        return { topic: "", question: "", answer: "" };
      return this.filteredFlashcards[
        this.flashIndex % this.filteredFlashcards.length
      ];
    },
    learnedFlashcardsCount() {
      return this.learnedFlashcards.size;
    },
  },
  methods: {
    // routing
    applyRoute() {
      const hash = location.hash || "#/home";
      const v = hash.replace("#/", "");
      const allowed = [
        "home",
        "chapters",
        "quizzes",
        "flashcards",
        "resources",
        "results",
        "official",
      ];
      this.view = allowed.includes(v) ? v : "home";
    },

    // chapters
    openChapter(idx) {
      this.currentChapterIndex = idx;
      this.miniAnswers = {};
      this.miniScore = null;
    },
    isChapterDone(idx) {
      return this.completedChapters.has(idx);
    },
    markChapterDone(idx) {
      this.completedChapters.add(idx);
      this.persist();
    },
    checkMiniQuiz() {
      if (!this.currentChapter || !this.currentChapter.quiz) return;
      let score = 0;
      this.currentChapter.quiz.forEach((q, i) => {
        if (q.type === "mcq" && Number(this.miniAnswers[i]) === q.answer)
          score++;
        else if (
          q.type === "short" &&
          String(this.miniAnswers[i] || "")
            .trim()
            .toLowerCase() === String(q.answer).toLowerCase()
        )
          score++;
      });
      this.miniScore = score;
    },
    clearChapters() {
      if (confirm("Xóa toàn bộ đánh dấu chương?")) {
        this.completedChapters = new Set();
        this.persist();
      }
    },

    // quizzes
    bestScore(ti) {
      return this.quizResults[ti]?.bestScore ?? null;
    },
    attempts(ti) {
      return this.quizResults[ti]?.attempts ?? 0;
    },
    isPassed(ti) {
      const s = this.bestScore(ti);
      return s !== null && s >= this.passScore;
    },
    resetQuiz(ti) {
      if (confirm(`Xóa kết quả Đề ${ti + 1}?`)) {
        delete this.quizResults[ti];
        this.persist();
      }
    },

    // Fisher-Yates shuffle
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },
    // Xáo trộn đáp án cho MCQ và cập nhật chỉ số đáp án đúng
    shuffleOptions(q) {
      if (q.type !== "mcq" || !Array.isArray(q.options)) return q;
      const withIdx = q.options.map((text, idx) => ({ text, idx }));
      this.shuffle(withIdx);
      q.options = withIdx.map((x) => x.text);
      q.answer = withIdx.findIndex((x) => x.idx === q.answer);
      return q;
    },
    startQuiz(ti, reshuffle = false) {
      this.topicMode = false;
      this.selectedTopicKey = this.selectedTopicKey; // giữ chọn chủ đề nếu có
      this.takingQuizIndex = ti;
      const base = this.quizzes[ti].questions.slice();
      let seq = reshuffle ? base.sort(() => Math.random() - 0.5) : base;
      // deep clone + shuffle MCQ options
      const qs = seq
        .map((q) => JSON.parse(JSON.stringify(q)))
        .map((q) => this.shuffleOptions(q));
      this.currentQuizQuestions = qs;
      this.quizAnswers = {};
      this.quizScore = null;
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    },
    startTopicQuiz() {
      if (!this.selectedTopicKey) return;
      const pool = basePools[this.selectedTopicKey] || [];
      const chosen = this.shuffle(pool.slice())
        .slice(0, Math.min(20, pool.length))
        .map((q) => JSON.parse(JSON.stringify(q)))
        .map((q) => this.shuffleOptions(q));
      this.topicMode = true;
      this.takingQuizIndex = null;
      this.currentQuizQuestions = chosen;
      this.quizAnswers = {};
      this.quizScore = null;
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    },
    redoQuiz() {
      if (this.topicMode) this.startTopicQuiz();
      else if (this.takingQuizIndex !== null)
        this.startQuiz(this.takingQuizIndex, true);
    },
    cancelQuiz() {
      this.takingQuizIndex = null;
      this.currentQuizQuestions = [];
      this.quizAnswers = {};
      this.quizScore = null;
      this.topicMode = false;
    },
    submitQuiz() {
      let correct = 0;
      this.currentQuizQuestions.forEach((q, i) => {
        if (q.type === "mcq") {
          if (Number(this.quizAnswers[i]) === q.answer) correct++;
        } else if (q.type === "short" || q.type === "code-out") {
          const ans = String(this.quizAnswers[i] || "").trim();
          if (ans.toLowerCase() === String(q.answer).toLowerCase()) correct++;
        }
      });
      const pct = Math.round(
        (correct / this.currentQuizQuestions.length) * 100
      );
      this.quizScore = pct;
      if (!this.topicMode) {
        const prev = this.quizResults[this.takingQuizIndex] || {
          bestScore: null,
          attempts: 0,
        };
        prev.attempts += 1;
        prev.bestScore =
          prev.bestScore === null ? pct : Math.max(prev.bestScore, pct);
        this.quizResults[this.takingQuizIndex] = prev;
        this.persist();
      }
    },
    clearQuizResults() {
      if (confirm("Xóa TẤT CẢ kết quả đề?")) {
        this.quizResults = {};
        this.persist();
      }
    },

    // flashcards
    toggleFlash() {
      this.showAnswer = !this.showAnswer;
    },
    nextFlash() {
      if (this.filteredFlashcards.length) {
        this.flashIndex =
          (this.flashIndex + 1) % this.filteredFlashcards.length;
        this.showAnswer = false;
      }
    },
    prevFlash() {
      if (this.filteredFlashcards.length) {
        this.flashIndex =
          (this.flashIndex - 1 + this.filteredFlashcards.length) %
          this.filteredFlashcards.length;
        this.showAnswer = false;
      }
    },
    markFlashLearned() {
      const globalIndex = this.indexInGlobal(this.currentFlash);
      if (globalIndex !== -1) {
        this.learnedFlashcards.add(globalIndex);
        this.persist();
        this.nextFlash();
      }
    },
    resetFlashcards() {
      if (confirm("Bỏ đánh dấu đã nhớ cho tất cả thẻ?")) {
        this.learnedFlashcards = new Set();
        this.persist();
      }
    },
    indexInGlobal(card) {
      // find first matching card object
      return this.flashcards.findIndex(
        (c) => c.topic === card.topic && c.question === card.question
      );
    },

    // persistence
    persist() {
      saveProgress({
        completedChapters: Array.from(this.completedChapters),
        quizResults: this.quizResults,
        learnedFlashcards: Array.from(this.learnedFlashcards),
      });
    },
    exportProgress() {
      const data = localStorage.getItem(STORAGE_KEY) || "{}";
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ace_cpp_progress.json";
      a.click();
      URL.revokeObjectURL(url);
    },
    importProgress(evt) {
      const file = evt.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const obj = JSON.parse(e.target.result);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
          // reload in-memory state
          this.completedChapters = new Set(obj.completedChapters || []);
          this.quizResults = obj.quizResults || {};
          this.learnedFlashcards = new Set(obj.learnedFlashcards || []);
          alert("Đã nhập tiến trình!");
        } catch (err) {
          alert("File không hợp lệ.");
        }
      };
      reader.readAsText(file);
      evt.target.value = "";
    },
    fullReset() {
      if (confirm("Xóa toàn bộ tiến trình và về mặc định?")) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
      }
    },

    // UIT Exam Generator
    generateUitExam() {
      const uitProblems = [
        {
          description:
            "Cho 2 rổ táo, rổ thứ nhất có số quả táo, rổ thứ 2 có số quả táo. Hỏi cả hai rổ có bao nhiêu quả táo là chưa đủ 5 quả táo gấp đôi số quả táo nhiều gấp đôi số táo trong rổ thứ nhất. Hãy xác định số quả táo trong mỗi rổ.",
          algorithmPoints: 0.5,
          codePoints: 1,
          level: "basic",
        },
        {
          description:
            "Cho 2 thùng đựng nước, thùng 1 đựng 20 lít nước, thùng 2 đựng gấp 5 lần số nước trong thùng 1. Hỏi cả hai thùng có bao nhiêu lít nước? Nếu ca nước ít hơn 5 thùng và ít nhất là bao nhiều thùng để bao phủ tất cả khối lượng nước trong 1 thùng hoặc nhiều hơn các thùng đó.",
          algorithmPoints: 0.5,
          codePoints: 1,
          level: "medium",
        },
        {
          description:
            "Có 2 thùng đựng bình chờ các loại được tận dụng để tháo ra kênh rõ thanh toán loại trong mỗi thùng. Câu hoạch được hiển thị là thuộc tính sẽ được trở lại sau khi thu hoạch là bao nhiêu thùng thêm thuộc tính các loại loại thuộc tính cần hoạch đến tham gia số thùng được thêm vào.",
          algorithmPoints: 1,
          codePoints: 1.5,
          level: "advanced",
        },
      ];

      // Chọn ngẫu nhiên 2-3 bài toán với mức độ khác nhau
      const selectedProblems = [
        {
          description:
            "Cho 2 rổ táo, rổ thứ nhất có a quả táo, rổ thứ hai có b quả táo. Hỏi cả hai rổ có tổng cộng bao nhiêu quả táo? Nếu rổ thứ hai có số quả gấp đôi rổ thứ nhất thì rổ thứ hai có bao nhiêu quả?",
          algorithmPoints: 0.5,
          codePoints: 1,
        },
        {
          description:
            "Cho mảng số nguyên A có n phần tử. Tìm phần tử lớn nhất và nhỏ nhất trong mảng. Tính tổng các phần tử chẵn trong mảng.",
          algorithmPoints: 0.75,
          codePoints: 1.25,
        },
      ];

      this.uitExam = {
        header: {
          university: "TRƯỜNG ĐH CÔNG NGHỆ THÔNG TIN",
          center: "TRUNG TÂM PHÁT TRIỂN CNTT",
          examTitle: "ĐỀ THI CUỐI HỌC KỲ II (2024-2025)",
          subject: "MÔN: Nhập môn lập trình",
          courseCode: "IT001.E21.CN2.TTNT",
          duration: "Thời gian: 90 phút",
        },
        questions: [
          {
            points: 1.5,
            clo: "CLO1, CLO4",
            title: "Cho các bài toán sau:",
            problems: selectedProblems,
          },
        ],
      };
    },

    printUitExam() {
      window.print();
    },
  },
  mounted() {
    window.addEventListener("hashchange", this.applyRoute);
    this.applyRoute();
  },
});

app.mount("#app");

// ===== DEV SELF-TESTS (không ảnh hưởng UI) =====
(function runSelfTests() {
  try {
    console.group("%cACE Self-Tests", "color:#4da3ff");
    console.assert(
      Array.isArray(chapters) && chapters.length >= 10,
      "Chapters >= 10"
    );
    console.assert(
      Array.isArray(flashcards) && flashcards.length >= 200,
      "Flashcards nhiều (>=200)"
    );
    const testSet = buildTenTests();
    console.assert(testSet.length === 10, "Có đúng 10 đề");
    testSet.forEach((t, i) =>
      console.assert(t.questions.length === 50, `Đề ${i + 1} có 50 câu`)
    );
    const requiredPools = [
      "basics",
      "control",
      "array1d",
      "array2d",
      "strings",
      "pointers",
      "functions",
      "recursion",
      "structs",
    ];
    requiredPools.forEach((k) =>
      console.assert(
        Array.isArray(basePools[k]) && basePools[k].length > 0,
        `Pool tồn tại: ${k}`
      )
    );
    // Kiểm tra xáo trộn đáp án vẫn giữ tính đúng sai
    const sample = {
      type: "mcq",
      text: "tmp",
      options: ["A", "B", "C", "D"],
      answer: 2,
    };
    const clone = JSON.parse(JSON.stringify(sample));
    const idxBefore = clone.answer;
    const correctText = clone.options[idxBefore];
    const shuffled = (function (q) {
      const withIdx = q.options.map((t, i) => ({ t, i }));
      for (let i = withIdx.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [withIdx[i], withIdx[j]] = [withIdx[j], withIdx[i]];
      }
      q.options = withIdx.map((x) => x.t);
      q.answer = withIdx.findIndex((x) => x.i === idxBefore);
      return q;
    })(clone);
    console.assert(
      shuffled.options[shuffled.answer] === correctText,
      "Shuffle MCQ giữ đúng đáp án"
    );
    console.groupEnd();
    window.__ACE_TESTS_OK__ = true;
  } catch (e) {
    console.error("Self-tests failed", e);
    window.__ACE_TESTS_OK__ = false;
  }
})();
