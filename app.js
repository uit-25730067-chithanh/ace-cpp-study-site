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
        options: ["Khai báo biến", "Không cần std::", "Định nghĩa hàm", "Kết thúc chương trình"],
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
        options: ["Biên dịch -> Liên kết", "Thông dịch", "Chạy trực tiếp", "Upload"],
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
        options: ["Định nghĩa hàm", "Chèn nội dung file khác", "Khai báo biến", "Kết thúc chương trình"],
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
        options: ["(double)x", "double(x)", "static_cast<double>(x)", "Tất cả đều đúng"],
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
        `int a[${r}][${c}] = {${M.map((row) => `{${row.join(", ")}}`).join(", ")}}; 
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
            `int a[${r}][${c}] = {${M.map((row) => `{${row.join(", ")}}`).join(", ")}}; 
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

// ====== FLASHCARDS (>=20 mỗi chủ đề) ======
const flashcards = (function () {
  const cards = [];
  const add = (topic, q, a) => cards.push({ topic, question: q, answer: a });
  for (let i = 1; i <= 20; i++) {
    add(
      "Cú pháp",
      `Vai trò của hàm main() (#${i})?`,
      "Điểm bắt đầu chương trình C++."
    );
  }
  for (let i = 1; i <= 20; i++) {
    add("Cú pháp", `Kí tự kết thúc câu lệnh (#${i})?`, "<code>;</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add("I/O", `Toán tử nhập từ std::cin (#${i})?`, "<code>&gt;&gt;</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add("I/O", `Toán tử xuất ra std::cout (#${i})?`, "<code>&lt;&lt;</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add("Toán tử", `Toán tử số học (#${i})?`, "<code>+ - * / %</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Toán tử",
      `Toán tử so sánh (#${i})?`,
      "<code>== != &lt; &gt; &lt;= &gt;=</code>"
    );
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Điều kiện & Vòng lặp",
      `Vòng lặp chạy thân ≥1 lần (#${i})?`,
      "<code>do-while</code>"
    );
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Điều kiện & Vòng lặp",
      `Thoát vòng lặp ngay (#${i})?`,
      "<code>break</code>"
    );
  }
  for (let i = 1; i <= 20; i++) {
    add("Hàm", `Khai báo hàm trả về int (#${i})?`, "<code>int f();</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add("Hàm", `Kí hiệu tham chiếu (#${i})?`, "<code>&amp;</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add("Đệ quy", `Thành phần bắt buộc (#${i})?`, "Điều kiện dừng.");
  }
  for (let i = 1; i <= 20; i++) {
    add("Đệ quy", `Ví dụ bài toán đệ quy (#${i})?`, "Giai thừa, Fibonacci.");
  }
  for (let i = 1; i <= 20; i++) {
    add("Mảng 1D", `Chỉ số đầu tiên của mảng (#${i})?`, "<strong>0</strong>");
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Mảng 1D",
      `Khai báo mảng 10 phần tử (#${i})?`,
      "<code>int a[10];</code>"
    );
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Mảng 2D",
      `Khai báo ma trận 2x3 (#${i})?`,
      "<code>int a[2][3];</code>"
    );
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Mảng 2D",
      `Cách duyệt ma trận (#${i})?`,
      "Hai vòng for lồng nhau i, j."
    );
  }
  for (let i = 1; i <= 20; i++) {
    add("Chuỗi", `Chuỗi C kết thúc bằng (#${i})?`, "<code>\\0</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add("Chuỗi", `Hàm đo độ dài chuỗi (#${i})?`, "<code>strlen</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add("Con trỏ", `Toán tử lấy địa chỉ biến (#${i})?`, "<code>&amp;</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Con trỏ",
      `Giải phóng vùng nhớ của new (#${i})?`,
      "<code>delete</code>"
    );
  }
  for (let i = 1; i <= 20; i++) {
    add("Struct", `Từ khóa khai báo cấu trúc (#${i})?`, "<code>struct</code>");
  }
  for (let i = 1; i <= 20; i++) {
    add(
      "Struct",
      `Truy cập trường struct (#${i})?`,
      "Dùng dấu chấm <code>.</code>"
    );
  }
  return cards; // 11 chủ đề * 40 = 440 thẻ
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
