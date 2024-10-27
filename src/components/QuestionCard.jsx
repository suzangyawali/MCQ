import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

export const QuestionCard = ({ question, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          Question {question.id}
        </span>
        <h2 className="text-2xl font-bold text-gray-800">{question.question}</h2>
      </div>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`quiz-option ${
              selectedAnswer === index ? 'quiz-option-selected' : 'quiz-option-default'
            }`}
          >
            {selectedAnswer === index ? (
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
            )}
            <span className="text-lg text-gray-700">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};