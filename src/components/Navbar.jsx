import React, { useState } from 'react';
import { 
  Compass, Flame, Zap, Award, Download, Upload, RotateCcw, 
  ChevronDown, CheckCircle2, Target, Calendar, Sun, Moon
} from 'lucide-react';
import { jobRoles } from '../data/rolesData';
import { exportProgressData, importProgressData } from '../utils/storage';

export const Navbar = ({ 
  activeRole, 
  setActiveRole, 
  userStats, 
  onOpenStats, 
  onResetProgress,
  activeView,
  setActiveView,
  theme,
  onToggleTheme
}) => {
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [importStatus, setImportStatus] = useState(null);

  const handleImportClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = importProgressData(event.target.result);
        if (res.success) {
          setImportStatus('Progress restored!');
          setTimeout(() => {
            window.location.reload();
          }, 800);
        } else {
          alert('Failed to import backup file: ' + res.error);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand & Mode Navigation */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div 
            onClick={() => setActiveView('columns')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                  Career<span className="text-brand-600 dark:text-brand-400">Forge</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30">
                  Zero to Hero
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">Tech Career Readiness Portal</p>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveView('columns')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'columns' 
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
              }`}
            >
              Role Columns
            </button>
            <button
              onClick={() => setActiveView('roadmap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'roadmap' 
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
              }`}
            >
              Active Roadmap
            </button>
            <button
              onClick={() => setActiveView('daily')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeView === 'daily' 
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Daily Hub
            </button>
          </nav>
        </div>

        {/* Active Target Role Selector */}
        <div className="relative">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-all text-xs font-medium shadow-sm"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeRole.theme.primary }}></span>
              <span className="text-slate-500 dark:text-slate-400 hidden lg:inline">Target:</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold">{activeRole.shortTitle}</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {roleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/60 mb-1">
                <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Switch Target Role</p>
              </div>
              {jobRoles.map(role => (
                <button
                  key={role.id}
                  onClick={() => {
                    setActiveRole(role);
                    setRoleDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                    activeRole.id === role.id 
                      ? 'bg-brand-50 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300 font-semibold' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: role.theme.primary }}></span>
                    <span>{role.shortTitle}</span>
                  </div>
                  {activeRole.id === role.id && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gamification Badges, Dark Theme Toggle & Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Streak Counter */}
          <div 
            title="Current Daily Streak"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold"
          >
            <Flame className="w-4 h-4 text-orange-500 animate-pulse-subtle" />
            <span>{userStats.streak}d</span>
          </div>

          {/* Level & XP */}
          <button
            onClick={onOpenStats}
            title="Click to view detailed career stats"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold transition-colors"
          >
            <Zap className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>Lvl {userStats.level}</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">({userStats.totalXP} XP)</span>
          </button>

          {/* Readiness Score */}
          <button
            onClick={onOpenStats}
            title="Overall Readiness Score"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold transition-colors"
          >
            <Target className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{userStats.readinessScore}%</span>
            <span className="hidden md:inline text-[10px] text-slate-500 dark:text-slate-400 font-normal">Ready</span>
          </button>

          {/* THEME TOGGLE ON UPPER RIGHT (Sun/Moon) */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all shadow-sm"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline text-[11px] font-medium">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span className="hidden sm:inline text-[11px] font-medium">Dark</span>
              </>
            )}
          </button>

          {/* Backup / Restore Menu */}
          <div className="flex items-center border-l border-slate-200 dark:border-slate-800 pl-1.5 sm:pl-2 gap-0.5">
            <button
              onClick={exportProgressData}
              title="Download Progress Backup (JSON)"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handleImportClick}
              title="Restore Backup from JSON"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Upload className="w-4 h-4" />
            </button>
            <button
              onClick={onResetProgress}
              title="Reset All Progress"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};
