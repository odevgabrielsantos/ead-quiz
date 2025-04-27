import { useState } from 'react';
import background from '/background.png';
import { Info } from './components/info';
import { Quiz } from './components/quiz';
import { Button } from './components/ui/button';
import { eadQuiz } from './data/ead-quiz';
import { shuffleOptions, shuffleQuestions } from './utils/shuffle';

export function App() {
  const [startedQuiz, setStartedQuiz] = useState(false);

  const shuffledQuestionsList = shuffleQuestions(eadQuiz.questions);
  const shuffledQuiz = {
    ...eadQuiz,
    questions: shuffledQuestionsList.map(shuffleOptions),
  };

  return (
    <div
      className="min-h-dvh w-full bg-cover bg-no-repeat bg-center py-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {startedQuiz ? (
        <Quiz quizData={shuffledQuiz} setStartedQuiz={setStartedQuiz} />
      ) : (
        <div className="flex items-center flex-col max-w-3xl px-4">
          <Info />
          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            Quiz: Fundamentos da Educação a Distância
          </h1>
          <p className="text-center text-white mb-6 text-lg">
            Prepare-se para revisar os principais conceitos sobre a Educação a
            Distância. Explore temas como AVAs, cibercultura, interatividade e
            muito mais!
          </p>
          <Button
            onClick={() => setStartedQuiz(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded hover:scale-105 transition-transform duration-200"
          >
            Iniciar Quiz
          </Button>

          <div className="fixed text-sm md:text-base left-4 bottom-4 text-neutral-100">
            <p>
              &copy; Desenvolvido por Gabriel Santos, Nívia Oliveira e Ramon
              Ferreira
            </p>
            <p>Licenciatura em Computação - UESB</p>
          </div>
        </div>
      )}
    </div>
  );
}
