import React, { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { QuizNavigation } from './components/QuizNavigation';
import { ResultsSummary } from './components/ResultsSummary';
import { questions } from './data/questions';
import { Brain } from 'lucide-react';

function App() {
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
  });

  const handleSelectAnswer = (answerId) => {
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questions[prev.currentQuestionIndex].id]: answerId,
      },
    }));
  };

  const handleNext = () => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }));
  };

  const handlePrev = () => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex - 1,
    }));
  };

  const handleSubmit = () => {
    setQuizState((prev) => ({
      ...prev,
      isCompleted: true,
    }));
  };

  const handleRetry = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
    });
  };

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const canSubmit = Object.keys(quizState.answers).length === questions.length;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Quiz Master
            </h1>
          </div>
        </div>

        <div className="transition-all duration-300 ease-in-out">
          {!quizState.isCompleted ? (
            <div className="space-y-6">
              <QuestionCard
                question={currentQuestion}
                selectedAnswer={quizState.answers[currentQuestion.id]}
                onSelectAnswer={handleSelectAnswer}
              />
              <QuizNavigation
                currentQuestion={quizState.currentQuestionIndex}
                totalQuestions={questions.length}
                onNext={handleNext}
                onPrev={handlePrev}
                onSubmit={handleSubmit}
                canSubmit={canSubmit}
              />
            </div>
          ) : (
            <ResultsSummary
              questions={questions}
              answers={quizState.answers}
              onRetry={handleRetry}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;