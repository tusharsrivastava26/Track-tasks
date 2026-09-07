import React from 'react';
import { 
  Code2, BarChart3, Sparkles, BrainCircuit, Globe, 
  ArrowRight, CheckCircle2, TrendingUp, DollarSign, 
  Clock, BookOpen, Layers, Award, Sparkle
} from 'lucide-react';
import { jobRoles } from '../data/rolesData';
import { calculateRoleProgress } from '../utils/storage';

const iconMap = {
  Code2,
  BarChart3,
  Sparkles,
  BrainCircuit,
  Globe
};

export const RoleColumnsView = ({ 
  activeRole, 
  onSelectRole, 
  onExploreRole,
  completedTopics 
}) => {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Section (Humanoid & Welcoming) */}
      <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 transition-colors duration-200">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 rounded-full bg-brand-500/10 dark:bg-brand-600/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-amber-500/10 dark:bg-emerald-600/10 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-4">
            <Sparkle className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Zero to Advanced Career Launchpad</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Select Your Target Role.<br />
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-emerald-600 dark:from-brand-400 dark:via-indigo-300 dark:to-emerald-400 bg-clip-text text-transparent">
              Conquer Daily Roadmaps. Land the Job.
            </span>
          </h1>
          
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Welcome to your personal career operating system. Choose from the 5 major tech career paths below. Each column features required skills, languages, and a structured 5-phase roadmap from complete beginner (Zero) to interview-ready. Click any column to explore or set it as your daily focus!
          </p>

          {/* 4 Pillars Mini-Badges */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> 1. Aptitude Building
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span> 2. Language & DSA Drills
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 3. Real-World Projects
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> 4. Interview Preparation
            </span>
          </div>
        </div>
      </div>

      {/* Role Columns Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Career Pathways</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400">
              5 Distinct Roles
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Click any column card to explore skills, programming languages, and step-by-step roadmap
          </p>
        </div>
      </div>

      {/* Responsive Columns Grid (5 Columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {jobRoles.map((role) => {
          const IconComponent = iconMap[role.icon] || Code2;
          const progress = calculateRoleProgress(role, completedTopics);
          const isActive = activeRole.id === role.id;

          return (
            <div
              key={role.id}
              onClick={() => onExploreRole(role)}
              className={`group relative rounded-2xl glass-card transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer border ${
                isActive 
                  ? 'border-brand-500 dark:border-brand-500 shadow-xl shadow-brand-500/10 ring-2 ring-brand-500/30' 
                  : 'border-slate-200/90 dark:border-slate-800/80 hover:border-brand-300 dark:hover:border-slate-700 hover:shadow-lg'
              }`}
            >
              {/* Active Indicator Top Ribbon */}
              {isActive && (
                <div className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[10px] uppercase font-extrabold tracking-wider py-1 px-3 text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Active Career Focus</span>
                </div>
              )}

              {/* Column Content */}
              <div className="p-5 flex-1 flex flex-col">
                
                {/* Header Info */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm"
                    style={{ backgroundColor: `${role.theme.primary}18`, color: role.theme.primary }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                    {role.badge}
                  </span>
                </div>

                {/* Role Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {role.tagline}
                </p>

                {/* Quick Stats: Salary & Demand */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Avg Salary</span>
                    <span className="font-bold text-slate-900 dark:text-slate-200">{role.avgSalary}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Market Demand</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{role.marketDemand}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Roadmap Progress</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${progress}%`,
                        backgroundColor: role.theme.primary 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Required Languages Section */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider block mb-2">
                    Primary Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {role.programmingLanguages.map((lang, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Skills Snapshot */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider block mb-2">
                    Core Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skillsMatrix[0].skills.slice(0, 3).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Roadmap Phases Pill */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>5 Structured Phases</span>
                  </span>
                  <span className="text-slate-500 font-mono text-[10px]">Zero → Pro</span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectRole(role);
                  }}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isActive 
                      ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 font-bold' 
                      : 'bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-600/20'
                  }`}
                >
                  {isActive ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Target Goal Active</span>
                    </>
                  ) : (
                    <>
                      <span>Start Preparing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onExploreRole(role);
                  }}
                  className="w-full py-1.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-center"
                >
                  Explore Roadmap & Skills
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
