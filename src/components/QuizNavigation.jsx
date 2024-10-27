import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const QuizNavigation = ({
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
  onSubmit,
  canSubmit,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
      <button
        onClick={onPrev}
        disabled={currentQuestion === 0}
        className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl transition-all duration-300
          ${
            currentQuestion === 0
              ? 'text-gray-400 cursor-not-allowed opacity-50'
              : 'text-blue-600 hover:bg-blue-50 hover:shadow-md'
          }`}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Previous</span>
      </button>
      
      <div className="flex items-center justify-center px-4 py-2 bg-blue-50 rounded-xl">
        <span className="text-blue-700 font-medium">
          {currentQuestion + 1} / {totalQuestions}
        </span>
      </div>
      
      {currentQuestion === totalQuestions - 1 ? (
        <button
          onClick={onSubmit}
          disabled={!canSubmit}
          className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
            canSubmit
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg transform hover:scale-105'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all duration-300"
        >
          <span className="font-medium">Next</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};