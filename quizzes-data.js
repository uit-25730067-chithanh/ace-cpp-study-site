const basePools = (function () {
  const pools = {}

  // Hàm hỗ trợ tạo câu hỏi
  const qCO = (text, code, ans) => ({ type: 'code-out', text, code, answer: String(ans) })
  const qS = (text, ans) => ({ type: 'short', text, answer: String(ans) })
  const qM = (text, opts, idx) => ({ type: 'mcq', text, options: opts, answer: idx })

  // === POOL: CƠ BẢN & CÚ PHÁP ===
  pools.basics = [
    qCO('Output của biểu thức a/b (chia nguyên)?', 'int a=7, b=2; \nstd::cout << a/b;', 3),
    qCO('Output của biểu thức a/b (chia nguyên)?', 'int a=10, b=3; \nstd::cout << a/b;', 3),
    qS('Toán tử nhập dữ liệu từ std::cin là gì?', '>>'),
    qS('Toán tử xuất dữ liệu ra std::cout là gì?', '<<'),
    qM('Hàm bắt đầu chương trình C++?', ['start()', 'main()', 'init()', 'entry()'], 1),
    qM('Thư viện nhập/xuất chuẩn?', ['<stdio.h>', '<iostream>', '<system>', '<cstdiostream>'], 1),
    qM(
      'Khai báo hằng đúng?',
      ['const int X=10;', 'int const=10;', 'let X=10;', 'final int X=10;'],
      0
    ),
    qM('Kiểu lưu ký tự 1 byte?', ['string', 'char', 'bool', 'byte'], 1),
    qM('Kết thúc câu lệnh trong C++ bằng?', [',', ';', '\\n', '.'], 1),
    qCO('Output của a+b*c ?', 'int a=5, b=6, c=7; \nstd::cout << a+b*c;', 47),
  ]

  // === POOL: ĐIỀU KIỆN & VÒNG LẶP ===
  pools.control = [
    qCO(
      'Giá trị s sau for (1..n)?',
      'int s = 0; \nfor(int i=1; i<=5; i++)\n{\n    s += i;\n}\nstd::cout << s;',
      15
    ),
    qCO(
      'do-while chạy ít nhất 1 lần. Giá trị i cuối cùng?',
      'int i = 3; \ndo\n{\n    i++;\n} while(i < 5);\nstd::cout << i;',
      5
    ),
    qM('Từ khóa thoát vòng lặp ngay?', ['continue', 'break', 'stop', 'exit()'], 1),
    qM(
      'switch/case phù hợp cho:',
      ['Giá trị rời rạc', 'Điều kiện phức tạp', 'Chuỗi dài', 'Kiểu double'],
      0
    ),
    qCO(
      'Chương trình dưới đây in gì?',
      'int sum = 0, item = 0; \ndo { item++; sum += item; if (sum > 4) break; } while (item < 5); \nstd::cout << "sum = "<< sum;',
      'sum = 6'
    ),
    qCO(
      'Kết quả của đoạn chương trình `if ((i<10) && (++i<n))` khi i=5, n=20 là gì?',
      'int i=5, n=20; if((i<10) && (++i<n)){} std::cout << i;',
      '6'
    ),
    qCO(
      'Kết quả của đoạn chương trình `if ( (i < 10) || (++i < n) )` khi i=5, n=20 là gì?',
      'int i=5, n=20; if((i<10) || (++i<n)){} std::cout << i;',
      '5'
    ),
    qM(
      'Đoạn chương trình nào tính đúng tổng S = 1/2 + 2/3 + ... + 99/100 ?',
      [
        'for (int i=1; i<=99; i++) { sum += i / (i+1); }',
        'for (int i=1; i<=99; i++) { sum += 1.0*i / (i+1); }',
        'for (int i=1; i<=99; i++) { sum += (float)i / (i+1); }',
        'Cả B và C',
      ],
      3
    ),
    qM(
      'Trong cấu trúc `switch-case`, lệnh nào dùng để thoát khỏi `switch`?',
      ['continue', 'exit', 'break', 'return'],
      2
    ),
    qM(
      'Vòng lặp nào luôn thực hiện thân vòng lặp ít nhất một lần?',
      ['for', 'while', 'do-while', 'range-based for'],
      2
    ),
  ]

  // === POOL: HÀM & THAM CHIẾU ===
  pools.functions = [
    qCO(
      'Cho biết kết quả của chương trình sau:',
      '#include <iostream>\nint f(int &a, int &b) {\n  a=3;\n  b=4;\n  return a + b;\n}\nint main() {\n  int a=1;\n  int b=2;\n  int c=f(a,a);\n  std::cout << a << b << c;\n}',
      '428'
    ),
    qCO(
      'Cho biết kết quả của chương trình sau:',
      '#include <iostream>\nusing namespace std;\nvoid f(int &p1, int p2)\n{\n  p1++;\n  p2++;\n}\nint main()\n{\n  int x1=1;\n  int x2=1;\n  f(x1,x2);\n  cout << "x1 is " << x1 << " x2 is " << x2;\n  return 0;\n}',
      'x1 is 2 x2 is 1'
    ),
    qM(
      'Trong hàm `void maxValue(int v1, int v2, int max)`, tại sao giá trị `max` trong hàm `main` không đổi?',
      [
        'Vì hàm không có `return`',
        'Vì `max` được truyền theo giá trị (pass by value)',
        'Vì `max` là biến toàn cục',
        'Vì `max` chưa được khởi tạo',
      ],
      1
    ),
    qS(
      'Viết lại khai báo hàm `void maxValue(...)` để nó có thể thay đổi giá trị của `max` bên ngoài.',
      'void maxValue(int v1, int v2, int& max)'
    ),
    qS(
      'Sửa các lỗi trong hàm `void Multiply(int a, int na, int b, int nb, int c[])`',
      'Sửa kiểu trả về thành int, tham số mảng thành int a[] và int b[], phép nhân thành a[i]*b[i]'
    ),
    qS(
      'Viết hàm `DemChiaHet2` đếm số lượng phần tử chia hết cho 2 nhưng không chia hết cho 4.',
      'int DemChiaHet2(int a[], int n) { int dem=0; for(int i=0; i<n; i++) { if(a[i]%2==0 && a[i]%4!=0) dem++; } return dem; }'
    ),
    qM(
      'Đâu là một lợi ích của việc sử dụng hàm?',
      [
        'Tái sử dụng code',
        'Tổ chức mã nguồn tốt hơn',
        'Dễ bảo trì và sửa lỗi',
        'Tất cả các đáp án trên',
      ],
      3
    ),
    qM(
      'Kỹ thuật định nghĩa nhiều hàm có cùng tên nhưng khác tham số gọi là gì?',
      ['Function Overriding', 'Function Overloading', 'Function Hiding', 'Function Template'],
      1
    ),
    qM(
      'Một hàm có kiểu trả về là `void` có nghĩa là gì?',
      [
        'Hàm trả về một giá trị không xác định',
        'Hàm không trả về giá trị nào',
        'Hàm trả về một con trỏ rỗng',
        'Hàm bị lỗi',
      ],
      1
    ),
    qM(
      'Khi một đối số được truyền vào hàm theo giá trị (pass by value), điều gì sẽ xảy ra?',
      [
        'Hàm nhận được địa chỉ của biến gốc',
        'Bản sao của giá trị được tạo ra và truyền vào hàm',
        'Mọi thay đổi trong hàm sẽ ảnh hưởng đến biến gốc',
        'Hàm chỉ có thể đọc giá trị, không thể ghi',
      ],
      1
    ),
  ]

  // === POOL: MẢNG & CHUỖI ===
  pools.arrays = [
    qCO(
      'Cho biết kết quả của chương trình sau:',
      '#include <iostream>\nusing namespace std;\nint main()\n{\n  int A[5]={1,2,5,6};\n  int S=1;\n  for(int i=0;i<4;i++)\n    S=-S*A[i];\n  cout<<S;\n  return 0;\n}',
      '60'
    ),
    qCO(
      'Kết quả của `cout << indexOfMax` là gì?',
      'double myList[] = {1, 5, 5, 5, 5, 1};\ndouble max = myList[0];\nint indexOfMax = 0;\nfor (int i=1; i<6; i++) {\n  if (myList[i] > max) {\n    max = myList[i];\n    indexOfMax = i;\n  }\n}\ncout << indexOfMax << endl;',
      '1'
    ),
    qCO(
      'Chương trình sau in ra màn hình cái gì?',
      '#include <iostream>\nusing namespace std;\nint main()\n{\n  int x[5];\n  int i;\n  for (i=0; i<5; i++)\n    x[i] = i;\n  cout << x[i] << " ";\n  return 0;\n}',
      'Lỗi thực thi (runtime error)'
    ),
    qM(
      "Phát biểu nào đúng về `char s1[] = {'a', 'b', 'c'};` và `char s2[] = \"abc\";`?",
      [
        's1 và s2 có cùng kích thước',
        'sizeof(s1) là 3, sizeof(s2) là 4',
        'sizeof(s1) là 3, sizeof(s2) là 3',
        "Cả hai đều kết thúc bằng '\\0'",
      ],
      1
    ),
    qS(
      'Viết hàm kiểm tra một mảng số nguyên có đối xứng hay không.',
      'bool KiemTraDoiXung(int a[], int n) { for(int i=0; i<n/2; i++) { if(a[i] != a[n-i-1]) return false; } return true; }'
    ),
    qM(
      'Đâu là cách khai báo một mảng 2 chiều 3 hàng 4 cột?',
      ['int arr[3,4];', 'int arr[3][4];', 'int arr(3,4);', 'array<array<int, 4>, 3> arr;'],
      1
    ),
    qS('Viết câu lệnh để nối chuỗi `s2` vào sau chuỗi `s1` (C-style strings).', 'strcat(s1, s2);'),
    qM(
      'Hàm `strlen()` trong thư viện `<cstring>` trả về cái gì?',
      [
        "Số ký tự của chuỗi bao gồm cả ký tự '\\0'",
        "Số ký tự của chuỗi không bao gồm ký tự '\\0'",
        'Kích thước của mảng char',
        'Một con trỏ đến ký tự cuối cùng',
      ],
      1
    ),
    qS(
      'Viết hàm nhập mảng `void NhapMang(int a[], int &n)` với tối đa 50 phần tử.',
      'void NhapMang(int a[], int &n) { do { cout<<"Nhap n="; cin>>n; } while(n<1 || n>50); for(int i=0; i<n; i++) cin>>a[i]; }'
    ),
    qS(
      'Viết lệnh gán giá trị 99 cho phần tử ở hàng 2, cột 3 của mảng `int matrix[5][5];`',
      'matrix[1][2] = 99;'
    ),
  ]

  // === POOL: CON TRỎ & STRUCT ===
  pools.pointers_structs = [
    qCO(
      'Cho biết kết quả của chương trình sau:',
      '#include <iostream>\nusing namespace std;\nint main()\n{\n  int x=10;\n  int y=x;\n  int &z=x;\n  y=z*x;\n  z=x+y;\n  cout<<x<<" "<<y<<" "<<z;\n  return 0;\n}',
      '110 100 110'
    ),
    qCO(
      'Cho biết kết quả in ra màn hình là gì?',
      '#include <iostream>\nusing namespace std;\nint main()\n{\n  int n=5;\n  int *a= new int[n];\n  int *p=a;\n  a[0]=2023;\n  for(int i=1; i<n; i++)\n    *(p+i)=a[i-1]+i;\n  for(int i=0; i<n; i++)\n    cout<<a[i]<<" ";\n  return 0;\n}',
      '2023 2024 2026 2029 2033'
    ),
    qCO(
      'Cho biết kết quả của chương trình sau:',
      '#include <iostream>\nusing namespace std;\nstruct Point2D { int x, y; };\nint main()\n{\n  struct Point2D p1={2022,2023};\n  struct Point2D *p2=&p1;\n  (*p2).x=9;\n  p2->y=7;\n  cout<<p1.x <<" "<<p1.y<<" "<<p2->x <<" "<<p2->y;\n  return 0;\n}',
      '9 7 9 7'
    ),
    qCO(
      'Kết quả của chương trình sau là gì?',
      '#include <iostream>\nusing namespace std;\nint main()\n{\n  int n=10;\n  int *ptr=&n;\n  *ptr=50;\n  cout << "n=" << n << endl;\n  cout << "ptr=" << *ptr << endl;\n  return 0;\n}',
      'n=50\nptr=50'
    ),
    qS(
      'Giá trị của x, y, *p, *q khi chương trình chạy đến `delete q;` là bao nhiêu?',
      'int x=50; int *p=&x; int *q= new int(20); *q=x+10; *p=*q+10; int y=*p+*q;',
      'x=70, y=130, *p=70, *q=60'
    ),
    qS(
      'Viết khai báo cho cấu trúc `POINT` trong không gian 3D và `POLYGON` chứa tối đa 100 điểm.',
      'struct POINT { float x, y, z; }; struct POLYGON { int n; POINT a[100]; };'
    ),
    qM('Toán tử nào dùng để lấy địa chỉ của một biến?', ['*', '&', '->', '.'], 1),
    qM(
      'Toán tử nào dùng để truy cập thành viên của một struct thông qua một con trỏ?',
      ['*', '&', '->', '.'],
      2
    ),
    qM(
      'Lệnh nào dùng để giải phóng bộ nhớ được cấp phát cho một mảng động `int *arr = new int[10];`?',
      ['delete arr;', 'delete[] arr;', 'free(arr);', 'arr.release();'],
      1
    ),
    qS(
      'Sự khác biệt chính giữa `struct` và `class` trong C++ là gì?',
      'Mặc định, các thành viên của struct là public, trong khi của class là private.'
    ),
  ]

  return pools
})()

// Hàm tạo 20 đề thi, mỗi đề tối đa 20 câu
function buildTwentyTests() {
  const categories = Object.keys(basePools)
  const tests = []

  for (let i = 0; i < 20; i++) {
    const questions = []
    const usedIndices = {}
    categories.forEach((cat) => (usedIndices[cat] = new Set()))

    const targetCounts = { mcq: 12, 'code-out': 4, short: 4 }
    const currentCounts = { mcq: 0, 'code-out': 0, short: 0 }

    const shuffledCategories = [...categories].sort(() => 0.5 - Math.random())

    // Lấy câu hỏi một cách cân bằng từ các chủ đề
    for (const category of shuffledCategories) {
      if (questions.length >= 20) break
      const pool = basePools[category]
      if (!pool || pool.length === 0) continue

      const shuffledPool = [...pool].sort(() => 0.5 - Math.random())

      for (const question of shuffledPool) {
        if (questions.length >= 20) break
        if (currentCounts[question.type] < targetCounts[question.type]) {
          // Kiểm tra xem câu hỏi đã được thêm vào chưa
          const questionIdentifier = JSON.stringify(question)
          if (!questions.some((q) => JSON.stringify(q) === questionIdentifier)) {
            questions.push(question)
            currentCounts[question.type]++
          }
        }
      }
    }

    // Nếu vẫn chưa đủ, lấp đầy bằng bất kỳ câu hỏi nào còn lại
    while (questions.length < 20) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]
      const pool = basePools[randomCategory]
      if (!pool || pool.length === 0) continue

      const randomQuestion = pool[Math.floor(Math.random() * pool.length)]
      const questionIdentifier = JSON.stringify(randomQuestion)

      if (!questions.some((q) => JSON.stringify(q) === questionIdentifier)) {
        questions.push(randomQuestion)
      } else {
        // Nếu tất cả câu hỏi đã được thêm, thoát vòng lặp
        if (questions.length >= Object.values(basePools).flat().length) break
      }
    }

    tests.push({
      description: `Đề tổng hợp IT001 - Đề ${i + 1}`,
      questions: questions.slice(0, 20), // Đảm bảo không vượt quá 20 câu
    })
  }
  return tests
}

// Tạo dữ liệu và gán vào biến window
window.ACE_QUIZZES_DATA = buildTwentyTests()
window.basePools = basePools
