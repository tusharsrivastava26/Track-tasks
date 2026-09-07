import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Clock, Award, RotateCcw, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { aptitudeQuestions } from '../data/aptitudeBank';

export const AptitudeQuizModal = ({ isOpen, onClose, onCompleteQuiz }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Pick 5 questions for quick daily test
  const quizQuestions = aptitudeQuestions.slice(0, 5);
  const currentQ = quizQuestions[currentIdx];

  const handleSelect = (optIdx) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optIdx
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    if (score >= 3) {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    if (onCompleteQuiz) {
      onCompleteQuiz(score);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIdx(0);
  };

  const score = calculateScore();
  const totalQuestions = quizQuestions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/95 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
              Q
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Daily Aptitude Practice Quiz</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">5 High-Yield Quantitative & Logical Placement Questions</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          
          {!isSubmitted ? (
            <>
              {/* Question Progress & Category */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">
                  Question {currentIdx + 1} of {totalQuestions}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200 dark:border-slate-700">
                  {currentQ.subCategory} ({currentQ.difficulty})
                </span>
              </div>

              {/* Question Text */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800">
                <p className="text-sm sm:text-base text-slate-900 dark:text-slate-100 font-medium whitespace-pre-line leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[currentQ.id] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => handleSelect(oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                        isSelected 
                          ? 'bg-brand-50 dark:bg-brand-500/20 border-brand-500 text-brand-700 dark:text-brand-200 font-bold' 
                          : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                      }`}
                    >
                      <span>{opt}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isSelected ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-400 dark:border-slate-600'
                      }`}>
                        {isSelected && '✓'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  Previous
                </button>

                {currentIdx < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIdx(prev => Math.min(totalQuestions - 1, prev + 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition-all"
                  >
                    Submit Quiz
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Results & Review */
            <div className="space-y-6">
              
              {/* Score Banner */}
              <div className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 font-extrabold text-2xl">
                  {score}/{totalQuestions}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {score >= 4 ? 'Outstanding Mastery! 🎉' : score >= 3 ? 'Good Effort! Keep practicing.' : 'Needs More Review!'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  You scored {Math.round((score / totalQuestions) * 100)}% accuracy. +30 Aptitude Bonus XP awarded!
                </p>
              </div>

              {/* Detailed Solutions Breakdown */}
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Detailed Explanations</h5>
                {quizQuestions.map((q, idx) => {
                  const userChoice = selectedAnswers[q.id];
                  const isCorrect = userChoice === q.correctIndex;

                  return (
                    <div key={q.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Q{idx + 1}: {q.question.slice(0, 100)}...
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isCorrect ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        <span>Your Answer: </span>
                        <span className={isCorrect ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-rose-600 dark:text-rose-400 font-semibold'}>
                          {userChoice !== undefined ? q.options[userChoice] : 'Not Answered'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="text-emerald-600 dark:text-emerald-400">
                          <span>Correct Answer: </span>
                          <span className="font-semibold">{q.options[q.correctIndex]}</span>
                        </div>
                      )}
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed border border-slate-200 dark:border-transparent">
                        <strong className="text-amber-600 dark:text-amber-400">Explanation: </strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white"
                >
                  Close & Log Daily Task
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
