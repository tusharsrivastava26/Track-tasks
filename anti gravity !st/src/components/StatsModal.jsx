import React from 'react';
import { X, Trophy, Zap, Target, Flame, CheckCircle2, Clock, BookOpen, Layers } from 'lucide-react';
import { calculateRoleProgress } from '../utils/storage';

export const StatsModal = ({ isOpen, onClose, activeRole, userStats, completedTopics }) => {
  if (!isOpen) return null;

  const roleProgress = calculateRoleProgress(activeRole, completedTopics);

  // Calculate pillar counts
  let programmingCount = 0;
  let aptitudeCount = 0;
  let projectCount = 0;
  let interviewCount = 0;
  let totalHours = 0;

  activeRole.phases.forEach(phase => {
    phase.topics.forEach(t => {
      if (completedTopics[t.id]) {
        totalHours += t.estimatedHours;
        if (t.pillar === 'programming') programmingCount++;
        else if (t.pillar === 'aptitude') aptitudeCount++;
        else if (t.pillar === 'project') projectCount++;
        else if (t.pillar === 'interview') interviewCount++;
      }
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Career Readiness & Analytics Hub</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Target Role: {activeRole.title}</p>
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
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">{userStats.readinessScore}%</span>
              <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mt-0.5">Readiness Score</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <Flame className="w-5 h-5 text-orange-500 dark:text-orange-400 mx-auto mb-1" />
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">{userStats.streak} Days</span>
              <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mt-0.5">Study Streak</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-1" />
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">{userStats.totalXP}</span>
              <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mt-0.5">Total XP</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <Clock className="w-5 h-5 text-brand-600 dark:text-brand-400 mx-auto mb-1" />
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">{totalHours}h</span>
              <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mt-0.5">Hours Invested</span>
            </div>
          </div>

          {/* Level Progress Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-50 to-indigo-50/50 dark:from-brand-950/60 dark:to-slate-900 border border-brand-200 dark:border-brand-500/20 shadow-sm">
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-brand-800 dark:text-brand-300">Level {userStats.level}: {userStats.title}</span>
              </div>
              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{userStats.totalXP} / {userStats.nextLevelXP} XP</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 transition-all duration-500"
                style={{ width: `${userStats.levelProgress}%` }}
              ></div>
            </div>
          </div>

          {/* 4 Pillars Progress Distribution */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Preparation Pillar Balance
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase block">1. Aptitude</span>
                <span className="text-base font-bold text-slate-900 dark:text-slate-100">{aptitudeCount} Topics</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase block">2. Coding / DSA</span>
                <span className="text-base font-bold text-slate-900 dark:text-slate-100">{programmingCount} Topics</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase block">3. Projects</span>
                <span className="text-base font-bold text-slate-900 dark:text-slate-100">{projectCount} Topics</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase block">4. Interview</span>
                <span className="text-base font-bold text-slate-900 dark:text-slate-100">{interviewCount} Topics</span>
              </div>
            </div>
          </div>

          {/* Roadmap Phase Completion Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Roadmap Phase Breakdown
            </h4>
            <div className="space-y-2.5">
              {activeRole.phases.map(phase => {
                const total = phase.topics.length;
                const done = phase.topics.filter(t => completedTopics[t.id]).length;
                const pct = total > 0 ? Math.round((done / total) * 100) : 0;

                return (
                  <div key={phase.phaseId} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shadow-sm">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{phase.title.split(':')[0]}</span>
                        <span className="text-slate-500 dark:text-slate-400">{done}/{total} done ({pct}%)</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${pct}%`, backgroundColor: activeRole.theme.primary }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Placement Advice Banner */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-xs text-indigo-800 dark:text-indigo-300 space-y-1">
            <span className="font-bold block">💡 Placement Readiness Tip:</span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Aim for at least 75% total roadmap completion and a minimum of 2 deployed portfolio projects with clean GitHub READMEs before sending out your first job applications.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
