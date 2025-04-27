import type { QuizQuestion } from '@/models';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  return shuffleArray(questions);
}

export function shuffleOptions(question: QuizQuestion): QuizQuestion {
  const shuffledOptions = shuffleArray(question.options);
  return { ...question, options: shuffledOptions };
}
