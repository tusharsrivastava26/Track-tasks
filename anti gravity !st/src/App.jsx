import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { RoleColumnsView } from './components/RoleColumnsView';
import { RoleDetailRoadmap } from './components/RoleDetailRoadmap';
import { DailyPreparationHub } from './components/DailyPreparationHub';
import { MentorCoachWidget } from './components/MentorCoachWidget';
import { AptitudeQuizModal } from './components/AptitudeQuizModal';
import { InterviewFlashcardModal } from './components/InterviewFlashcardModal';
import { TopicNotesModal } from './components/TopicNotesModal';
import { StatsModal } from './components/StatsModal';
import { jobRoles, getJobRoleById } from './data/rolesData';
import { 
  getStorageItem, setStorageItem, 
  calculateRoleProgress, calculateXPAndLevel 
} from './utils/storage';
import confetti from 'canvas-confetti';

export function App() {
  // 1. Theme State (Default to 'light' as requested)
  const [theme, setTheme] = useState(() => getStorageItem('theme_mode', 'light'));

  useEffect(() => {
    setStorageItem('theme_mode', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 2. Core State
  const [activeRoleId, setActiveRoleId] = useState(() => getStorageItem('active_role_id', 'sde'));
  const [activeView, setActiveView] = useState(() => getStorageItem('active_view', 'columns')); // 'columns' | 'roadmap' | 'daily'
  
  // Inspected role for roadmap deep dive (can be different from active preparation role)
  const [inspectedRoleId, setInspectedRoleId] = useState(() => getStorageItem('inspected_role_id', 'sde'));

  // 3. Persistent Tracking State
  const [completedTopics, setCompletedTopics] = useState(() => getStorageItem('completed_topics', {}));
  const [studyNotes, setStudyNotes] = useState(() => getStorageItem('study_notes', {}));
  
  // Daily status keyed by YYYY-MM-DD
  const todayKey = new Date().toISOString().split('T')[0];
  const [dailyStatusMap, setDailyStatusMap] = useState(() => getStorageItem('daily_status_map', {}));
  const todayDaily = dailyStatusMap[todayKey] || {
    aptitude: false,
    programming: false,
    projects: false,
    interview: false,
    customTasks: []
  };

  // Streak & User Stats
  const [streakData, setStreakData] = useState(() => getStorageItem('streak_data', {
    streak: 1,
    lastActiveDate: todayKey,
    quizzesCompleted: 0
  }));

  // 4. Modals
  const [isAptitudeQuizOpen, setIsAptitudeQuizOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [notesModalState, setNotesModalState] = useState({ isOpen: false, topic: null });

  // Sync active and inspected roles
  const activeRole = getJobRoleById(activeRoleId);
  const inspectedRole = getJobRoleById(inspectedRoleId);

  // Sync to storage
  useEffect(() => {
    setStorageItem('active_role_id', activeRoleId);
  }, [activeRoleId]);

  useEffect(() => {
    setStorageItem('inspected_role_id', inspectedRoleId);
  }, [inspectedRoleId]);

  useEffect(() => {
    setStorageItem('active_view', activeView);
  }, [activeView]);

  useEffect(() => {
    setStorageItem('completed_topics', completedTopics);
  }, [completedTopics]);

  useEffect(() => {
    setStorageItem('study_notes', studyNotes);
  }, [studyNotes]);

  useEffect(() => {
    setStorageItem('daily_status_map', dailyStatusMap);
  }, [dailyStatusMap]);

  useEffect(() => {
    setStorageItem('streak_data', streakData);
  }, [streakData]);

  // Compute stats
  const completedTopicCount = Object.values(completedTopics).filter(Boolean).length;
  let completedDailyPillars = 0;
  Object.values(dailyStatusMap).forEach(d => {
    if (d.aptitude) completedDailyPillars++;
    if (d.programming) completedDailyPillars++;
    if (d.projects) completedDailyPillars++;
    if (d.interview) completedDailyPillars++;
  });

  const xpStats = calculateXPAndLevel(
    completedTopicCount, 
    completedDailyPillars, 
    streakData.quizzesCompleted || 0
  );

  const activeRoleProgress = calculateRoleProgress(activeRole, completedTopics);
  
  // Readiness score = 70% role roadmap progress + 30% habit consistency
  const dailyTargetTodayRatio = (
    (todayDaily.aptitude ? 1 : 0) +
    (todayDaily.programming ? 1 : 0) +
    (todayDaily.projects ? 1 : 0) +
    (todayDaily.interview ? 1 : 0)
  ) / 4;
  const readinessScore = Math.min(100, Math.round((activeRoleProgress * 0.75) + (dailyTargetTodayRatio * 25)));

  const userStats = {
    ...xpStats,
    streak: streakData.streak,
    readinessScore
  };

  // --- Handlers ---
  const handleSelectRole = (role) => {
    setActiveRoleId(role.id);
    setInspectedRoleId(role.id);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleExploreRole = (role) => {
    setInspectedRoleId(role.id);
    setActiveView('roadmap');
  };

  const handleToggleTopic = (topicId) => {
    setCompletedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const handleToggleDailyTask = (taskId) => {
    const currentToday = dailyStatusMap[todayKey] || {
      aptitude: false,
      programming: false,
      projects: false,
      interview: false,
      customTasks: []
    };

    const updatedToday = {
      ...currentToday,
      [taskId]: !currentToday[taskId]
    };

    setDailyStatusMap(prev => ({
      ...prev,
      [todayKey]: updatedToday
    }));

    // Update streak if completing all 4 core tasks
    const allFourDone = updatedToday.aptitude && updatedToday.programming && updatedToday.projects && updatedToday.interview;
    if (allFourDone && streakData.lastActiveDate !== todayKey) {
      setStreakData(prev => ({
        ...prev,
        streak: prev.streak + 1,
        lastActiveDate: todayKey
      }));
    }
  };

  const handleAddCustomTask = (text) => {
    const currentToday = dailyStatusMap[todayKey] || {
      aptitude: false,
      programming: false,
      projects: false,
      interview: false,
      customTasks: []
    };

    const newTask = { id: Date.now().toString(), text };
    const updated = {
      ...currentToday,
      customTasks: [...(currentToday.customTasks || []), newTask]
    };

    setDailyStatusMap(prev => ({
      ...prev,
      [todayKey]: updated
    }));
  };

  const handleDeleteCustomTask = (taskId) => {
    const currentToday = dailyStatusMap[todayKey] || {
      aptitude: false,
      programming: false,
      projects: false,
      interview: false,
      customTasks: []
    };

    const updated = {
      ...currentToday,
      customTasks: (currentToday.customTasks || []).filter(t => t.id !== taskId)
    };

    setDailyStatusMap(prev => ({
      ...prev,
      [todayKey]: updated
    }));
  };

  const handleCompleteQuiz = (score) => {
    setStreakData(prev => ({
      ...prev,
      quizzesCompleted: (prev.quizzesCompleted || 0) + 1
    }));
    // Auto mark daily aptitude task as completed
    const currentToday = dailyStatusMap[todayKey] || {};
    setDailyStatusMap(prev => ({
      ...prev,
      [todayKey]: {
        ...currentToday,
        aptitude: true
      }
    }));
  };

  const handleSaveNote = (topicId, noteData) => {
    setStudyNotes(prev => ({
      ...prev,
      [topicId]: noteData
    }));
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress, completed topics, and streaks? This cannot be undone.')) {
      setCompletedTopics({});
      setDailyStatusMap({});
      setStudyNotes({});
      setStreakData({ streak: 1, lastActiveDate: todayKey, quizzesCompleted: 0 });
      alert('All progress has been reset.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 font-sans">
      
      {/* Top App Navbar with Theme Toggle on Upper Right */}
      <Navbar
        activeRole={activeRole}
        setActiveRole={(r) => {
          setActiveRoleId(r.id);
          setInspectedRoleId(r.id);
        }}
        userStats={userStats}
        onOpenStats={() => setIsStatsModalOpen(true)}
        onResetProgress={handleResetProgress}
        activeView={activeView}
        setActiveView={setActiveView}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full space-y-6">
        
        {/* Humanoid AI Career Coach Widget */}
        <MentorCoachWidget
          activeRole={activeRole}
          userStats={userStats}
          onOpenDailyHub={() => setActiveView('daily')}
        />

        {/* VIEW 1: Role Columns Deck (Side-by-side comparative columns) */}
        {activeView === 'columns' && (
          <RoleColumnsView
            activeRole={activeRole}
            onSelectRole={handleSelectRole}
            onExploreRole={handleExploreRole}
            completedTopics={completedTopics}
          />
        )}

        {/* VIEW 2: Inspected / Active Role Deep-Dive Roadmap & Skills */}
        {activeView === 'roadmap' && (
          <RoleDetailRoadmap
            role={inspectedRole}
            isActiveRole={activeRole.id === inspectedRole.id}
            onSelectAsActive={handleSelectRole}
            onBackToColumns={() => setActiveView('columns')}
            completedTopics={completedTopics}
            onToggleTopic={handleToggleTopic}
            onOpenNotes={(topic) => setNotesModalState({ isOpen: true, topic })}
          />
        )}

        {/* VIEW 3: Daily Preparation Hub (The 4 Daily Pillars) */}
        {activeView === 'daily' && (
          <DailyPreparationHub
            activeRole={activeRole}
            dailyStatus={todayDaily}
            onToggleDailyTask={handleToggleDailyTask}
            onOpenAptitudeQuiz={() => setIsAptitudeQuizOpen(true)}
            onOpenInterviewCards={() => setIsInterviewModalOpen(true)}
            userStats={userStats}
            onAddCustomTask={handleAddCustomTask}
            onDeleteCustomTask={handleDeleteCustomTask}
          />
        )}

      </main>

      {/* Modals */}
      <AptitudeQuizModal
        isOpen={isAptitudeQuizOpen}
        onClose={() => setIsAptitudeQuizOpen(false)}
        onCompleteQuiz={handleCompleteQuiz}
      />

      <InterviewFlashcardModal
        isOpen={isInterviewModalOpen}
        onClose={() => setIsInterviewModalOpen(false)}
        activeRoleId={activeRole.id}
      />

      <TopicNotesModal
        isOpen={notesModalState.isOpen}
        onClose={() => setNotesModalState({ isOpen: false, topic: null })}
        topic={notesModalState.topic}
        savedNote={notesModalState.topic ? studyNotes[notesModalState.topic.id] : null}
        onSaveNote={handleSaveNote}
      />

      <StatsModal
        isOpen={isStatsModalOpen}
        onClose={() => setIsStatsModalOpen(false)}
        activeRole={activeRole}
        userStats={userStats}
        completedTopics={completedTopics}
      />

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 glass-panel py-6 mt-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 CareerForge • From Zero to Advanced Tech Offer.</p>
          <div className="flex items-center gap-4">
            <span>SDE</span>
            <span>•</span>
            <span>Data Analyst</span>
            <span>•</span>
            <span>AI Engineer</span>
            <span>•</span>
            <span>Data Scientist</span>
            <span>•</span>
            <span>Web Developer</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
