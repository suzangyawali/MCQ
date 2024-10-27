import React from 'react';
import { Award, RefreshCw, Check, X } from 'lucide-react';

export const ResultsSummary = ({ questions, answers, onRetry }) => {
  const correctAnswers = questions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;
  const percentage = (correctAnswers / questions.length) * 100;

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 animate-ping bg-yellow-100 rounded-full"></div>
          <Award className="w-20 h-20 text-yellow-500 relative" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiz Completed!</h2>
      
      <div className={`text-6xl font-bold mb-6 ${getScoreColor(percentage)}`}>
        {percentage.toFixed(0)}%
      </div>
      
      <p className="text-xl text-gray-600 mb-8">
        You got <span className="font-semibold">{correctAnswers}</span> out of{' '}
        <span className="font-semibold">{questions.length}</span> questions correct
      </p>

      <div className="mb-8 space-y-3">
        {questions.map((q) => (
          <div
            key={q.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
          >
            <span className="text-gray-700 font-medium">Question {q.id}</span>
            {answers[q.id] === q.correctAnswer ? (
              <Check className="w-6 h-6 text-green-500" />
            ) : (
              <X className="w-6 h-6 text-red-500" />
            )}
          </div>
        ))}
      </div>
      
      <button
        onClick={onRetry}
        className="flex items-center justify-center space-x-2 mx-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        <RefreshCw className="w-5 h-5" />
        <span>Try Again</span>
      </button>
    </div>
  );
};