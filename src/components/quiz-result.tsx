import type { QuizData } from '@/models';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircle, XCircle } from 'lucide-react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from './ui/button';

interface QuizResultProps {
  quizData: QuizData;
  userAnswers: Record<string, string>;
  handleRestartQuiz: () => void;
}

function getFunnyMessage(percentage: number) {
  if (percentage === 100)
    return 'Parabéns! Você está antenado no conteúdo! Pode virar até tutor agora 😎';
  if (percentage >= 80)
    return 'Mandou muito bem! Dá pra dizer que você domina o assunto 🎓';
  if (percentage >= 60) return 'Nada mal! Mas talvez uma revisãozinha ajude 📘';
  if (percentage >= 40)
    return 'Hmm... você assistiu às videoaulas no 2x, né? 🐢➡️🚀';
  if (percentage > 0)
    return 'A intenção foi boa, mas... talvez seja hora de reler o material 😅';
  return 'Zero? 🤯 Nem o botão de responder você achou? Tente novamente!';
}

function getPrintTimestamp(): string {
  const now = new Date();
  const formatted = format(now, "dd 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {
    locale: ptBR,
  });

  return `Tentativa de envio realizada em ${formatted}.`;
}

export function QuizResult(props: QuizResultProps) {
  const { quizData, userAnswers, handleRestartQuiz } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const calculateScore = () => {
    let correctAnswers = 0;

    for (const question of quizData.questions) {
      if (userAnswers[question.id] === question.correctOptionId) {
        correctAnswers++;
      }
    }

    return {
      score: correctAnswers,
      total: quizData.questions.length,
      percentage: Math.round(
        (correctAnswers / quizData.questions.length) * 100
      ),
    };
  };

  const { score, total, percentage } = calculateScore();

  return (
    <div
      className="max-w-5xl mx-auto p-6 bg-neutral-50 rounded-lg shadow-md"
      ref={contentRef}
    >
      <h2 className="text-2xl font-bold mb-4">Resultado do Quiz</h2>

      <div className="text-center mb-6">
        <p className="text-4xl font-bold mb-2">{percentage}%</p>
        <p className="text-lg">
          Você acertou {score} de {total} questões
        </p>
        <p className="text-sm text-neutral-600">
          {getFunnyMessage(percentage)}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold">Detalhes:</h3>
        {quizData.questions.map((question, index) => {
          const isCorrect =
            userAnswers[question.id] === question.correctOptionId;
          const selectedOption = question.options.find(
            opt => opt.id === userAnswers[question.id]
          );
          const correctOption = question.options.find(
            opt => opt.id === question.correctOptionId
          );

          return (
            <div key={question.id} className="p-4 border rounded-md">
              <div className="flex items-start gap-2">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium">
                    Questão {index + 1}: {question.question}
                  </p>
                  <p className="text-sm mt-1">
                    Sua resposta:{' '}
                    <span
                      className={isCorrect ? 'text-green-600' : 'text-red-600'}
                    >
                      {selectedOption?.text || 'Não respondida'}
                    </span>
                  </p>
                  {!isCorrect && (
                    <p className="text-sm mt-1 text-green-600">
                      Resposta correta: {correctOption?.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-between print:hidden">
          <Button onClick={handleRestartQuiz} variant="link">
            Voltar ao início
          </Button>
          <Button onClick={() => reactToPrintFn()} variant="secondary">
            Imprimir Resultado
          </Button>
        </div>
        <p className='text-neutral-500 text-sm hidden print:block'>{getPrintTimestamp()}</p>
      </div>
    </div>
  );
}
