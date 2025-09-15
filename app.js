// app.js

// BIẾN TOÀN CỤC & CẤU HÌNH
const PASS_SCORE = 80
const STORAGE_KEY = 'ace_cpp_progress_v1'
const TOPIC_LABELS = {
  basics: 'Cơ bản & Cú pháp',
  control: 'Rẽ nhánh & Vòng lặp',
  arrays: 'Mảng & Chuỗi',
  pointers_structs: 'Con trỏ & Struct',
  functions: 'Hàm & Tham chiếu',
}

// ---- KHÔI PHỤC LẠI DỮ LIỆU RESOURCES TẠI ĐÂY ----
const resources = [
  {
    title: 'Đề cương ôn tập IT001 (HK1)',
    url: './docs/IT001_Noidung_CK_2024-2025.pdf',
    note: 'Nội dung cần ôn tập',
  },
  {
    title: 'Đề thi mẫu 01 + đáp án',
    url: './docs/DeThi_IT001-HK1_2025.pdf',
    note: 'Đề thi mẫu kèm đáp án',
  },
  {
    title: 'Đề thi mẫu 02 + đáp án',
    url: './docs/DeThi_IT001-HK1_2025_DA.pdf',
    note: 'Đề thi có đáp án',
  },
  {
    title: 'Slides Chương 1 - Tổng quan',
    url: './docs/Slide_Chap1_TongQuan.pdf',
    note: 'PDF chương 1',
  },
  {
    title: 'Slides Chương 2 - Thuật toán',
    url: './docs/Slide_Chap2_GioiThieuVeThuatToan.pdf',
    note: 'PDF chương 2',
  },
  {
    title: 'Slides Chương 3.1 - Kiểu dữ liệu',
    url: './docs/Slide_Chap3.1_CacKieuDuLieuCoBan.pdf',
    note: 'PDF chương 3.1',
  },
  {
    title: 'Slides Chương 3.2 - Phép toán',
    url: './docs/Slide_Chap3.2_CacPhepToan.pdf',
    note: 'PDF chương 3.2',
  },
  {
    title: 'Slides Chương 3.3 - Nhập xuất',
    url: './docs/Slide_Chap3.3_NhapXuatC++.pdf',
    note: 'PDF chương 3.3',
  },
  {
    title: 'Slides Chương 4.1 - Rẽ nhánh',
    url: './docs/Slide_Chap4.1_CauDieuKien_ReNhanh.pdf',
    note: 'PDF chương 4.1',
  },
  {
    title: 'Slides Chương 4.2 - Vòng lặp',
    url: './docs/Slide_Chap4.2_CauDieuKien_VongLap.pdf',
    note: 'PDF chương 4.2',
  },
  {
    title: 'Slides Chương 5 - Hàm',
    url: './docs/Slide_Chap5_Ham.pdf',
    note: 'PDF chương 5',
  },
  {
    title: 'Slides Chương 6 - Đệ quy',
    url: './docs/Slide_Chap6_HamDeQuy.pdf',
    note: 'PDF chương 6',
  },
  {
    title: 'Slides Chương 7.1 - Mảng 1D',
    url: './docs/Slide_Chap7.1_1D.pdf',
    note: 'PDF chương 7.1',
  },
  {
    title: 'Slides Chương 7.2 - Mảng 2D',
    url: './docs/Slide_Chap7.2_2D.pdf',
    note: 'PDF chương 7.2',
  },
  {
    title: 'Slides Chương 7.3 - Chuỗi',
    url: './docs/Slide_Chap7.3_Chuoi.pdf',
    note: 'PDF chương 7.3',
  },
  {
    title: 'Slides Chương 8.1 - Con trỏ cơ bản',
    url: './docs/Slide_Chap8.1_ConTroCoBan.pdf',
    note: 'PDF chương 8.1',
  },
  {
    title: 'Slides Chương 8.2 - Cấp phát động',
    url: './docs/Slide_Chap8.2_ConTroCapPhatDong.pdf',
    note: 'PDF chương 8.2',
  },
  {
    title: 'Slides Chương 9 - Struct',
    url: './docs/Slide_Chap9_Struct.pdf',
    note: 'PDF chương 9',
  },
]

// LOGIC XỬ LÝ DỮ LIỆU TỪ LOCALSTORAGE
function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch (e) {
    console.error('Failed to load progress from localStorage', e)
    return {}
  }
}

function saveProgress(obj) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
  } catch (e) {
    console.error('Failed to save progress to localStorage', e)
  }
}

// ỨNG DỤNG VUE
const app = Vue.createApp({
  data() {
    const state = loadProgress()
    // Tải dữ liệu từ các biến toàn cục (do các file -data.js cung cấp)
    const chapters = window.ACE_CHAPTERS_DATA || []
    const flashcards = window.ACE_FLASHCARDS_DATA || []
    const quizzes = window.ACE_QUIZZES_DATA || []

    return {
      view: 'home',
      chapters: chapters,
      quizzes: quizzes,
      flashcards: flashcards,
      resources: resources, // Sử dụng biến resources đã khôi phục ở trên
      passScore: PASS_SCORE,
      topicLabels: TOPIC_LABELS,
      selectedTopicKey: '',
      topicMode: false,

      // State người dùng
      completedChapters: new Set(state.completedChapters || []),
      quizResults: state.quizResults || {},
      learnedFlashcards: new Set(state.learnedFlashcards || []),

      // Trạng thái giao diện
      currentChapterIndex: 0, // Mặc định chọn chương 1
      currentMiniQuiz: [],
      miniAnswers: {},
      miniScore: null,
      takingQuizIndex: null,
      currentQuizQuestions: [],
      quizAnswers: {},
      quizScore: null,
      flashIndex: 0,
      showAnswer: false,
      hideLearned: false,
      uitExam: null,
    }
  },

  computed: {
    chapterProgress() {
      if (this.chapters.length === 0) return 0
      return Math.round((this.completedChapters.size / this.chapters.length) * 100)
    },
    quizProgress() {
      if (this.quizzes.length === 0) return 0
      const p = this.quizzes.reduce((acc, _, i) => acc + (this.isPassed(i) ? 1 : 0), 0)
      return Math.round((p / this.quizzes.length) * 100)
    },
    flashProgress() {
      if (this.flashcards.length === 0) return 0
      return Math.round((this.learnedFlashcards.size / this.flashcards.length) * 100)
    },
    completedChaptersCount() {
      return this.completedChapters.size
    },
    passedQuizzes() {
      return this.quizzes.filter((_, i) => this.isPassed(i)).length
    },
    currentChapter() {
      return this.currentChapterIndex !== null ? this.chapters[this.currentChapterIndex] : null
    },
    filteredFlashcards() {
      return this.hideLearned
        ? this.flashcards.filter((_, i) => !this.learnedFlashcards.has(i))
        : this.flashcards
    },
    currentFlash() {
      if (!this.filteredFlashcards.length) return { topic: '', text: '', answer: '' }
      return this.filteredFlashcards[this.flashIndex % this.filteredFlashcards.length]
    },
    learnedFlashcardsCount() {
      return this.learnedFlashcards.size
    },
  },

  methods: {
    // Điều hướng
    applyRoute() {
      const hash = location.hash || '#/home'
      const v = hash.replace('#/', '')
      const allowed = [
        'home',
        'chapters',
        'quizzes',
        'flashcards',
        'resources',
        'results',
        'official',
      ]
      this.view = allowed.includes(v) ? v : 'home'
    },

    // Xử lý chương học và Mini Quiz
    openChapter(idx) {
      this.currentChapterIndex = idx
      this.currentMiniQuiz = this.generateChapterQuiz(idx)
      this.miniAnswers = {}
      this.miniScore = null
    },
    generateChapterQuiz(chapterIndex) {
      const chapterToPoolMap = {
        0: 'basics',
        1: 'basics',
        2: 'control',
        3: 'functions',
        4: 'recursion',
        5: 'arrays',
        6: 'arrays',
        7: 'arrays',
        8: 'pointers_structs',
        9: 'pointers_structs',
      }
      const poolKey = chapterToPoolMap[chapterIndex]
      const basePools = window.basePools || {}
      if (!poolKey || !basePools[poolKey]) {
        return []
      }
      const pool = basePools[poolKey]
      const shuffledPool = this.shuffle([...pool])
      return shuffledPool.slice(0, 10)
    },
    isChapterDone(idx) {
      return this.completedChapters.has(idx)
    },
    markChapterDone(idx) {
      this.completedChapters.add(idx)
      this.persist()
    },
    checkMiniQuiz() {
      if (!this.currentMiniQuiz) return
      let score = 0
      this.currentMiniQuiz.forEach((q, i) => {
        if (q.type === 'mcq' && Number(this.miniAnswers[i]) === q.answer) {
          score++
        } else if (
          (q.type === 'short' || q.type === 'code-out') &&
          String(this.miniAnswers[i] || '')
            .trim()
            .toLowerCase() === String(q.answer).toLowerCase()
        ) {
          score++
        }
      })
      this.miniScore = score
    },
    clearChapters() {
      if (confirm('Xóa toàn bộ đánh dấu chương?')) {
        this.completedChapters = new Set()
        this.persist()
      }
    },

    // Xử lý các Đề ôn tập lớn
    bestScore(ti) {
      return this.quizResults[ti]?.bestScore ?? null
    },
    attempts(ti) {
      return this.quizResults[ti]?.attempts ?? 0
    },
    isPassed(ti) {
      const s = this.bestScore(ti)
      return s !== null && s >= this.passScore
    },
    resetQuiz(ti) {
      if (confirm(`Xóa kết quả Đề ${ti + 1}?`)) {
        delete this.quizResults[ti]
        this.persist()
      }
    },
    startQuiz(ti, reshuffle = false) {
      this.topicMode = false
      this.takingQuizIndex = ti
      const baseQuestions = this.quizzes[ti].questions.slice()
      const randomizedQuestions = reshuffle ? this.shuffle(baseQuestions) : baseQuestions

      this.currentQuizQuestions = randomizedQuestions
        .map((q) => JSON.parse(JSON.stringify(q)))
        .map((q) => this.shuffleOptions(q))
      this.quizAnswers = {}
      this.quizScore = null
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    submitQuiz() {
      let correct = 0
      this.currentQuizQuestions.forEach((q, i) => {
        if (this.isAnswerCorrect(q, i)) {
          correct++
        }
      })
      const pct =
        this.currentQuizQuestions.length > 0
          ? Math.round((correct / this.currentQuizQuestions.length) * 100)
          : 0
      this.quizScore = pct
      if (!this.topicMode && this.takingQuizIndex !== null) {
        const prev = this.quizResults[this.takingQuizIndex] || { bestScore: null, attempts: 0 }
        prev.attempts += 1
        prev.bestScore = prev.bestScore === null ? pct : Math.max(prev.bestScore, pct)
        this.quizResults[this.takingQuizIndex] = prev
        this.persist()
      }
    },
    cancelQuiz() {
      this.takingQuizIndex = null
      this.topicMode = false
      this.quizScore = null
      this.currentQuizQuestions = []
    },
    redoQuiz() {
      if (this.takingQuizIndex !== null) {
        this.startQuiz(this.takingQuizIndex, true)
      }
    },

    // Các hàm helper cho hiển thị kết quả quiz
    isAnswerCorrect(q, qi) {
      const userAnswer = this.quizAnswers[qi]
      if (q.type === 'mcq') {
        return Number(userAnswer) === q.answer
      } else if (q.type === 'short' || q.type === 'code-out') {
        return (
          String(userAnswer || '')
            .trim()
            .toLowerCase() === String(q.answer).toLowerCase()
        )
      }
      return false
    },
    getUserAnswerDisplay(q, qi) {
      const userAnswer = this.quizAnswers[qi]
      if (q.type === 'mcq') {
        if (userAnswer === undefined || userAnswer === null || userAnswer === '')
          return 'Không chọn'
        return q.options[userAnswer] || 'Lựa chọn không hợp lệ'
      }
      return userAnswer || 'Không trả lời'
    },
    getCorrectAnswerDisplay(q) {
      if (q.type === 'mcq') {
        return q.options[q.answer]
      }
      return q.answer
    },

    // Tiện ích xáo trộn
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr
    },
    shuffleOptions(q) {
      if (q.type !== 'mcq' || !Array.isArray(q.options)) return q
      const correctAnswerText = q.options[q.answer]
      this.shuffle(q.options)
      q.answer = q.options.findIndex((opt) => opt === correctAnswerText)
      return q
    },

    // Xử lý Flashcards
    toggleFlash() {
      this.showAnswer = !this.showAnswer
    },
    nextFlash() {
      if (this.filteredFlashcards.length) {
        this.flashIndex = (this.flashIndex + 1) % this.filteredFlashcards.length
        this.showAnswer = false
      }
    },
    prevFlash() {
      if (this.filteredFlashcards.length) {
        this.flashIndex =
          (this.flashIndex - 1 + this.filteredFlashcards.length) % this.filteredFlashcards.length
        this.showAnswer = false
      }
    },
    markFlashLearned() {
      const card = this.currentFlash
      const globalIndex = this.flashcards.findIndex((c) => c.text === card.text)
      if (globalIndex !== -1) {
        this.learnedFlashcards.add(globalIndex)
        this.persist()
        this.nextFlash()
      }
    },
    resetFlashcards() {
      if (confirm('Bỏ đánh dấu đã nhớ cho tất cả thẻ?')) {
        this.learnedFlashcards = new Set()
        this.persist()
      }
    },

    // Lưu trữ và quản lý tiến trình
    persist() {
      saveProgress({
        completedChapters: Array.from(this.completedChapters),
        quizResults: this.quizResults,
        learnedFlashcards: Array.from(this.learnedFlashcards),
      })
    },
    exportProgress() {
      const data = localStorage.getItem(STORAGE_KEY) || '{}'
      const blob = new Blob([data], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'ace_cpp_progress.json'
      a.click()
      URL.revokeObjectURL(url)
    },
    importProgress(evt) {
      const file = evt.target.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const result = e.target?.result
          if (typeof result === 'string') {
            const obj = JSON.parse(result)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
            this.completedChapters = new Set(obj.completedChapters || [])
            this.quizResults = obj.quizResults || {}
            this.learnedFlashcards = new Set(obj.learnedFlashcards || [])
            alert('Đã nhập tiến trình!')
          }
        } catch (err) {
          alert('File không hợp lệ.')
        }
      }
      reader.readAsText(file)
      evt.target.value = ''
    },
    fullReset() {
      if (confirm('Xóa toàn bộ tiến trình và về mặc định?')) {
        localStorage.removeItem(STORAGE_KEY)
        location.reload()
      }
    },

    // Chức năng tạo đề thi UIT
    // Chức năng tạo đề thi UIT (ĐÃ SỬA LỖI HOÀN CHỈNH)
    // Chức năng tạo đề thi UIT (Phiên bản nâng cấp, lấy từ basePools)
    generateUitExam() {
      const basePools = window.basePools || {}
      const allQuestions = Object.values(basePools).flat()

      // Lọc câu hỏi theo từng loại
      const mcqQuestions = allQuestions.filter((q) => q.type === 'mcq')
      const shortAnswerQuestions = allQuestions.filter((q) => q.type === 'short')
      const programmingProblems = allQuestions.filter((q) => q.type === 'code-out')

      // Chọn ngẫu nhiên câu hỏi cho mỗi phần
      const selectedMCQ = this.shuffle(mcqQuestions)
        .slice(0, 5)
        .map((q, i) => ({
          id: i + 1,
          question: q.text,
          options: q.options.map((opt, oi) => `${String.fromCharCode(65 + oi)}. ${opt}`),
          answer: String.fromCharCode(65 + q.answer),
          points: 0.2,
        }))

      const selectedShort = this.shuffle(shortAnswerQuestions)
        .slice(0, 2)
        .map((q, i) => ({
          id: i + 1,
          question: q.text,
          points: 1.0,
        }))

      const selectedProgramming = this.shuffle(programmingProblems)
        .slice(0, 2)
        .map((q, i) => ({
          id: i + 1,
          description: q.text,
          algorithmPoints: 0.5,
          codePoints: 1.0,
          sampleInput: `(Xem code mẫu)`,
          sampleOutput: q.answer,
        }))

      this.uitExam = {
        header: {
          university: 'TRƯỜNG ĐH CÔNG NGHỆ THÔNG TIN',
          center: 'TRUNG TÂM PHÁT TRIỂN CNTT',
          examTitle: 'ĐỀ THI CUỐI HỌC KỲ I (2024-2025)',
          subject: 'MÔN: Nhập môn lập trình',
          courseCode: 'IT001.E33.CN2.TTNT',
          duration: 'Thời gian: 90 phút',
          instructions: 'Sinh viên không được sử dụng tài liệu',
          totalPoints: '10.0 điểm',
        },
        sections: [
          {
            id: 1,
            title: 'PHẦN I: TRẮC NGHIỆM (1.0 điểm)',
            type: 'multiple_choice',
            questions: selectedMCQ,
            note: 'Chọn đáp án đúng nhất (mỗi câu 0.2 điểm)',
          },
          {
            id: 2,
            title: 'PHẦN II: TỰ LUẬN NGẮN (2.0 điểm)',
            type: 'short_answer',
            questions: selectedShort,
            note: 'Trả lời ngắn gọn và chính xác (mỗi câu 1.0 điểm)',
          },
          {
            id: 3,
            title: 'PHẦN III: LẬP TRÌNH (7.0 điểm)',
            type: 'programming',
            questions: selectedProgramming,
            note: 'Trình bày thuật toán và viết code hoàn chỉnh.',
          },
        ],
        format: {
          totalPoints: 10.0,
          duration: '90 phút',
          questionTypes: ['Trắc nghiệm', 'Tự luận', 'Lập trình'],
        },
      }
    },
    printUitExam() {
      window.print()
    },
  },

  mounted() {
    window.addEventListener('hashchange', this.applyRoute)
    this.applyRoute()

    // Khởi tạo chương 1 mặc định
    if (this.currentChapterIndex === 0) {
      this.openChapter(0)
    }
  },
})

app.mount('#app')
