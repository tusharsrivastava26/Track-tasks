import React, { useState } from 'react';
import { Sparkles, MessageSquare, ChevronDown, ChevronUp, Lightbulb, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export const MentorCoachWidget = ({ activeRole, userStats, onOpenDailyHub }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [tipIndex, setTipIndex] = useState(0);

  const tips = [
    {
      title: "Break the 'Zero' Barrier",
      text: "Everyone you look up to in tech started with an empty IDE and zero knowledge. Consistency beats talent every single time."
    },
    {
      title: `Tip for ${activeRole.title}`,
      text: `When studying ${activeRole.programmingLanguages[0]?.name || 'core tools'}, don't just memorize syntax. Write out 5 small examples by hand to lock the concept into muscle memory.`
    },
    {
      title: "The 20-Minute Focus Rule",
      text: "If you feel stuck or overwhelmed by a difficult algorithm or topic, promise yourself to focus for just 20 minutes. Usually the resistance fades away once you start."
    },
    {
      title: "Show Your Proof of Work",
      text: "Companies don't hire people who just watched tutorials. They hire people who built projects, broke things, and fixed them. Document your journey on GitHub!"
    }
  ];

  const currentTip = tips[tipIndex % tips.length];

  const cycleNextTip = () => {
    setTipIndex(prev => (prev + 1) % tips.length);
  };

  return (
    <div className="rounded-2xl glass-card border border-brand-200 dark:border-brand-500/20 bg-gradient-to-r from-brand-50/70 via-white to-amber-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-850 p-4 sm:p-5 transition-all duration-300">
      <div className="flex items-center justify-between gap-4">
        
        {/* Mentor Persona Avatar & Info */}
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-brand-500 to-indigo-500 p-0.5 shadow-md shadow-brand-500/20">
              <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-900 flex items-center justify-center text-xl">
                👨‍💻
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] text-white">
              ✓
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Coach Alex</h4>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30">
                Personal Career Mentor
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {userStats.streak > 1 
                ? `🔥 Incredible discipline! You've checked in ${userStats.streak} days consecutively.`
                : `👋 Welcome! I'm here to guide you step-by-step into your dream ${activeRole.shortTitle} role.`}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={cycleNextTip}
            title="Next piece of advice"
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-slate-700 transition-colors hidden sm:inline-flex items-center gap-1"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Next Tip</span>
          </button>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Expanded Coaching Advice */}
      {isExpanded && (
        <div className="mt-4 pt-3.5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
          <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 flex-1">
            <span className="font-bold text-brand-600 dark:text-brand-400 whitespace-nowrap">
              💡 {currentTip.title}:
            </span>
            <span className="leading-relaxed text-slate-600 dark:text-slate-300">
              "{currentTip.text}"
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenDailyHub}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-sm shadow-brand-600/20 transition-all"
            >
              <span>Today's 4 Tasks</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
