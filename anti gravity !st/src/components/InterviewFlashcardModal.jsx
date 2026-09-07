import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, RotateCw, CheckCircle2, Bookmark, Sparkles, Filter } from 'lucide-react';
import { interviewQuestions } from '../data/interviewBank';

export const InterviewFlashcardModal = ({ isOpen, onClose, activeRoleId }) => {
  const [filter, setFilter] = useState('relevant'); // 'relevant' | 'all' | 'behavioral'
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState({});

  if (!isOpen) return null;

  const filteredQuestions = interviewQuestions.filter(q => {
    if (filter === 'behavioral') return q.category.includes('Behavioral');
    if (filter === 'relevant') return q.roleId === activeRoleId || q.roleId === 'all';
    return true;
  });

  const activeQ = filteredQuestions[currentIdx] || filteredQuestions[0];
  const total = filteredQuestions.length;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIdx(prev => (prev + 1) % total);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIdx(prev => (prev - 1 + total) % total);
  };

  const toggleMastered = (id) => {
    setMasteredCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/95 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              ★
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Technical & Behavioral Interview Prep</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Flashcard Deck & STAR Method Scenarios</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-slate-400" />
            <span className="text-slate-500 dark:text-slate-400">Filter Deck:</span>
            <button
              onClick={() => { setFilter('relevant'); setCurrentIdx(0); setIsFlipped(false); }}
              className={`px-2 py-0.5 rounded-md ${filter === 'relevant' ? 'bg-brand-600 text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:text-slate-200'}`}
            >
              Role Targeted
            </button>
            <button
              onClick={() => { setFilter('behavioral'); setCurrentIdx(0); setIsFlipped(false); }}
              className={`px-2 py-0.5 rounded-md ${filter === 'behavioral' ? 'bg-brand-600 text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:text-slate-200'}`}
            >
              Behavioral (STAR)
            </button>
            <button
              onClick={() => { setFilter('all'); setCurrentIdx(0); setIsFlipped(false); }}
              className={`px-2 py-0.5 rounded-md ${filter === 'all' ? 'bg-brand-600 text-white font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:text-slate-200'}`}
            >
              All Roles
            </button>
          </div>

          <span className="text-slate-500 dark:text-slate-400 font-mono">
            Card {currentIdx + 1} of {total}
          </span>
        </div>

        {/* Flashcard Area */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[260px] rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-850 dark:to-slate-900 border border-slate-200 dark:border-slate-750 hover:border-brand-400 dark:hover:border-slate-600 p-6 flex flex-col justify-between transition-all duration-300 relative group shadow-sm"
          >
            {/* Card Header Meta */}
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">
                {activeQ.category}
              </span>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  activeQ.difficulty === 'Advanced' ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400' : 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400'
                }`}>
                  {activeQ.difficulty}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMastered(activeQ.id);
                  }}
                  title="Mark as Mastered"
                  className={`p-1 rounded-md transition-colors ${
                    masteredCards[activeQ.id] ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Content (Front vs Back) */}
            <div className="my-6">
              {!isFlipped ? (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-2">
                    Interview Question
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    {activeQ.question}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {activeQ.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in duration-150">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
                    Model Answer & Technical Deep Dive
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                    {activeQ.answer}
                  </p>
                </div>
              )}
            </div>

            {/* Click to flip affordance */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:rotate-180 transition-transform" />
                <span>{isFlipped ? 'Click card to see Question' : 'Click card to reveal Answer'}</span>
              </span>
              {masteredCards[activeQ.id] && (
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  ✓ Mastered
                </span>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white flex items-center gap-1.5 transition-colors border border-slate-200 dark:border-transparent shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 text-brand-700 dark:text-brand-300 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              {isFlipped ? 'Show Question' : 'Flip to Answer'}
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white flex items-center gap-1.5 transition-colors border border-slate-200 dark:border-transparent shadow-sm"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
