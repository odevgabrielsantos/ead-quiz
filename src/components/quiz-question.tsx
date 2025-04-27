import type { QuizOption } from '@/models';

interface QuizQuestionProps {
  question: string;
  options: QuizOption[];
  onSelect: (optionId: string) => void;
  selectedOptionId?: string;
}

export default function QuizQuestion({
  question,
  options,
  onSelect,
  selectedOptionId,
}: QuizQuestionProps) {
  return (
    <div>
      <h2 className="text-base font-bold mb-4">{question}</h2>
      <div className="space-y-3">
        {options.map(option => (
          <div key={option.id} className="relative">
            <input
              type="radio"
              id={`option-${option.id}`}
              name="quiz-option"
              className="sr-only"
              checked={selectedOptionId === option.id}
              onChange={() => onSelect(option.id)}
            />
            <label
              htmlFor={`option-${option.id}`}
              className={`block w-full p-4 rounded-md border cursor-pointer transition-colors duration-200 select-none ${
                selectedOptionId === option.id
                  ? 'bg-gray-100 border-gray-400'
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
