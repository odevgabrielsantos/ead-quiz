import { Button } from '@/components/ui/button';
import { eadQuiz } from '@/data/ead-quiz';
import type { QuizData } from '@/models';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import QuizQuestion from './quiz-question';
import { QuizResult } from './quiz-result';

interface QuizProps {
  quizData: QuizData;
  setStartedQuiz: (started: boolean) => void;
}

export function Quiz(props: QuizProps) {
  const { quizData, setStartedQuiz } = props;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const { width, height } = useWindowSize();

  const handleOptionSelect = (optionId: string) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: optionId,
    });
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setStartedQuiz(false);
  };

  if (quizCompleted) {
    return (
      <>
        <Confetti
          width={width - 20}
          height={height}
          numberOfPieces={250}
          recycle={false}
        />
        <QuizResult
          quizData={eadQuiz}
          userAnswers={userAnswers}
          handleRestartQuiz={handleRestartQuiz}
        />
      </>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center px-4">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-neutral-100">
          {quizData.title}
        </h1>
        <p className="text-neutral-400">
          Questão {currentQuestionIndex + 1} de {quizData.questions.length}
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
        <QuizQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          onSelect={handleOptionSelect}
          selectedOptionId={userAnswers[currentQuestion.id]}
        />

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={isFirstQuestion}
          >
            Anterior
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={!userAnswers[currentQuestion.id]}
          >
            {isLastQuestion ? 'Finalizar' : 'Próxima'}
          </Button>
        </div>
      </div>
    </div>
  );
}
