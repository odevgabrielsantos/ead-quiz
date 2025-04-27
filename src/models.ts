export interface QuizOption {
  id: string
  text: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
  correctOptionId: string
}

export interface QuizData {
  title: string
  questions: QuizQuestion[]
}
