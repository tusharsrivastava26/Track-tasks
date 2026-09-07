import React, { useState } from 'react';
import { 
  Flame, CheckCircle2, Circle, Calendar, Trophy, 
  ArrowRight, BrainCircuit, Code2, FolderGit2, Users, 
  Play, Sparkles, Check, Plus, Trash2, ExternalLink,
  Award, Clock, CheckSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DailyPreparationHub = ({ 
  activeRole, 
  dailyStatus, 
  onToggleDailyTask, 
  onOpenAptitudeQuiz, 
  onOpenInterviewCards,
  userStats,
  onAddCustomTask,
  onDeleteCustomTask
}) => {
  const [customTaskInput, setCustomTaskInput] = useState('');

  const todayDateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  const coreTasks = [
    {
      id: 'aptitude',
      title: '1. Aptitude & Reasoning Building',
      badge: 'Cognitive Speed',
      icon: BrainCircuit,
      color: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-100 dark:bg-amber-500/10',
      borderColor: 'border-amber-200 dark:border-amber-500/20',
      description: 'Spend 30 minutes solving quantitative aptitude, probability, or logical reasoning puzzles required for placement OA screens.',
      actionText: 'Take Timed Aptitude Quiz',
      onAction: onOpenAptitudeQuiz
    },
    {
      id: 'programming',
      title: '2. Language Programming & DSA',
      badge: 'Core Problem Solving',
      icon: Code2,
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-500/10',
      borderColor: 'border-indigo-200 dark:border-indigo-500/20',
      description: `Practice 1-2 coding problems in ${activeRole.programmingLanguages[0]?.name || 'Java/Python'} or master algorithmic patterns (Two Pointers, Trees, Dynamic Programming).`,
      actionText: 'Solve on LeetCode / NeetCode',
      linkUrl: 'https://neetcode.io/practice'
    },
    {
      id: 'projects',
      title: '3. Hands-On Project Development',
      badge: 'Proof of Execution',
      icon: FolderGit2,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-500/10',
      borderColor: 'border-emerald-200 dark:border-emerald-500/20',
      description: `Work 45-60 mins on your ${activeRole.shortTitle} portfolio project (e.g. ${activeRole.projectBlueprints[0]?.title || 'Capstone'}). Commit code to GitHub.`,
      actionText: 'View Project Milestones',
      actionTabTrigger: 'projects'
    },
    {
      id: 'interview',
      title: '4. Interview Preparation & Fundamentals',
      badge: 'Articulation & Polish',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-500/10',
      borderColor: 'border-purple-200 dark:border-purple-500/20',
      description: 'Review technical concepts (System Design, OS/DBMS, CS fundamentals) or practice a behavioral STAR answer.',
      actionText: 'Launch Flashcards & STAR Prep',
      onAction: onOpenInterviewCards
    }
  ];

  const completedCoreCount = coreTasks.filter(t => dailyStatus[t.id]).length;
  const isAllCoreDone = completedCoreCount === 4;

  const handleTaskClick = (taskId) => {
    const wasDone = dailyStatus[taskId];
    onToggleDailyTask(taskId);

    if (!wasDone) {
      if (completedCoreCount === 3) {
        // Completing the 4th task!
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } else {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 }
        });
      }
    }
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!customTaskInput.trim()) return;
    onAddCustomTask(customTaskInput.trim());
    setCustomTaskInput('');
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Daily Header Banner */}
      <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 relative overflow-hidden transition-colors duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                <span>{userStats.streak} Day Study Streak</span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {todayDateStr}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Daily Preparation Cockpit
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Target role: <span className="font-bold text-slate-900 dark:text-white">{activeRole.title}</span>. Consistency is the single biggest predictor of landing a top tech offer. Complete the 4 pillars below every day.
            </p>
          </div>

          {/* Daily Progress Gauge */}
          <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 min-w-[240px] shadow-sm">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-500 dark:text-slate-400">Today's Daily Target</span>
              <span className="font-bold text-slate-900 dark:text-white">{completedCoreCount} / 4 Done</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
              <div 
                className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-brand-500 to-emerald-500"
                style={{ width: `${(completedCoreCount / 4) * 100}%` }}
              ></div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isAllCoreDone 
                ? '🏆 All 4 pillars completed! Streak secured for today!'
                : `Complete ${4 - completedCoreCount} more task(s) to secure today's streak.`}
            </p>
          </div>
        </div>

        {/* All Completed Celebration Banner */}
        {isAllCoreDone && (
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between gap-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-500/20">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">Awesome Work! Today's 4 Pillars are 100% Done!</h4>
                <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80">You earned +80 Daily Bonus XP and strengthened your job readiness.</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 hidden sm:inline-block">
              Streak +1
            </span>
          </div>
        )}
      </div>

      {/* The 4 Daily Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coreTasks.map((task) => {
          const Icon = task.icon;
          const isDone = !!dailyStatus[task.id];

          return (
            <div
              key={task.id}
              className={`rounded-2xl glass-card p-6 border transition-all duration-200 flex flex-col justify-between ${
                isDone 
                  ? 'border-emerald-400 dark:border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/10' 
                  : 'border-slate-200/90 dark:border-slate-800/80 hover:border-brand-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${task.bgColor} ${task.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {task.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {task.badge}
                      </span>
                    </div>
                  </div>

                  {/* Completion Status Badge */}
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                    isDone 
                      ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/60'
                  }`}>
                    {isDone ? 'Completed' : 'Pending'}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2 mb-4">
                  {task.description}
                </p>

                {/* Interactive Action Button (if any) */}
                <div className="mb-4">
                  {task.onAction ? (
                    <button
                      type="button"
                      onClick={task.onAction}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                    >
                      <Play className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                      <span>{task.actionText}</span>
                    </button>
                  ) : task.linkUrl ? (
                    <a
                      href={task.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                    >
                      <span>{task.actionText}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Mark Completed Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Reward: <strong className="text-brand-600 dark:text-brand-400">+20 XP</strong>
                </span>

                <button
                  type="button"
                  onClick={() => handleTaskClick(task.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isDone 
                      ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 hover:bg-emerald-200' 
                      : 'bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-600/20'
                  }`}
                >
                  {isDone ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Marked Done</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4" />
                      <span>Mark Complete</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Additional Custom Daily Tasks Section */}
      <div className="rounded-3xl glass-panel p-6 border border-slate-200/90 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Custom Daily Focus Items</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Add personal daily goals (e.g. "Review 1 research paper", "Reach out to 2 recruiters")</p>
          </div>
        </div>

        {/* Custom Task Input */}
        <form onSubmit={handleAddCustom} className="flex gap-2 mb-4">
          <input
            type="text"
            value={customTaskInput}
            onChange={(e) => setCustomTaskInput(e.target.value)}
            placeholder="Add a new custom task for today..."
            className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </form>

        {/* Custom Tasks List */}
        {dailyStatus.customTasks && dailyStatus.customTasks.length > 0 ? (
          <div className="space-y-2">
            {dailyStatus.customTasks.map((t) => (
              <div 
                key={t.id}
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleTaskClick(`custom_${t.id}`)}
                    className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                      dailyStatus[`custom_${t.id}`]
                        ? 'bg-emerald-500 text-white'
                        : 'border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800'
                    }`}
                  >
                    {dailyStatus[`custom_${t.id}`] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>
                  <span className={`text-xs ${dailyStatus[`custom_${t.id}`] ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'}`}>
                    {t.text}
                  </span>
                </div>
                <button
                  onClick={() => onDeleteCustomTask(t.id)}
                  className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic">No custom tasks added for today yet.</p>
        )}
      </div>

    </div>
  );
};
