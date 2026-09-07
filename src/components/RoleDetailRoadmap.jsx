import React, { useState } from 'react';
import { 
  CheckCircle2, Circle, ChevronDown, ChevronUp, BookOpen, 
  ExternalLink, FileText, Clock, Award, Star, Code2, 
  CheckSquare, ArrowLeft, Play, Sparkles, FolderGit2, Check,
  Target, Filter, ShieldCheck, DollarSign, Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { calculateRoleProgress } from '../utils/storage';

export const RoleDetailRoadmap = ({ 
  role, 
  isActiveRole, 
  onSelectAsActive, 
  onBackToColumns,
  completedTopics,
  onToggleTopic,
  onOpenNotes
}) => {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'skills' | 'languages' | 'projects' | 'certifications'
  const [expandedTopics, setExpandedTopics] = useState({});
  const [filterPillar, setFilterPillar] = useState('all'); // 'all' | 'programming' | 'aptitude' | 'project' | 'interview'
  const [certCostFilter, setCertCostFilter] = useState('all'); // 'all' | 'unpaid' | 'paid'
  const [certTierFilter, setCertTierFilter] = useState('all'); // 'all' | 'Tier S' | 'Tier A'

  const progress = calculateRoleProgress(role, completedTopics);

  const toggleExpand = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const handleToggleCheck = (topicId, e) => {
    e.stopPropagation();
    const willBeChecked = !completedTopics[topicId];
    onToggleTopic(topicId);

    if (willBeChecked) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  // Filter certifications
  const roleCerts = role.certifications || [];
  const filteredCertifications = roleCerts.filter(c => {
    const matchesCost = 
      certCostFilter === 'all' || 
      (certCostFilter === 'unpaid' && c.costType.toLowerCase().includes('unpaid')) ||
      (certCostFilter === 'paid' && !c.costType.toLowerCase().includes('unpaid'));
    
    const matchesTier = 
      certTierFilter === 'all' || 
      c.tier === certTierFilter;

    return matchesCost && matchesTier;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Top Breadcrumb & Role Hero Header */}
      <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 relative overflow-hidden transition-colors duration-200">
        <div 
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: role.theme.primary }}
        ></div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={onBackToColumns}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Roles</span>
          </button>

          <div className="flex items-center gap-3">
            {isActiveRole ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Active Target Role</span>
              </span>
            ) : (
              <button
                onClick={() => onSelectAsActive(role)}
                className="px-4 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-lg shadow-brand-600/30 transition-all flex items-center gap-1.5"
              >
                <Target className="w-3.5 h-3.5" />
                <span>Set as Active Daily Goal</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                {role.category}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {role.experienceLevel}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {role.title} Roadmap
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {role.description}
            </p>
          </div>

          {/* Quick Stats Panel */}
          <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-800/80 min-w-[220px] shadow-sm">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-500 dark:text-slate-400">Readiness Progress</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">{progress}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: role.theme.primary }}
              ></div>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex justify-between">
              <span>Avg Compensation:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{role.avgSalary}</span>
            </div>
          </div>
        </div>

        {/* Section Tabs (Including Tier A/S Certifications) */}
        <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-200 dark:border-slate-800/80 pt-4">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'roadmap'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            Step-by-Step Roadmap (Zero to Advanced)
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'skills'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            Required Skills Matrix
          </button>
          <button
            onClick={() => setActiveTab('languages')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'languages'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            Programming Languages & Tools
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'projects'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            Project Portfolio Blueprints
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-amber-600 to-brand-600 text-white shadow-md shadow-amber-600/25'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Tier A/S Industry Certifications ({roleCerts.length})</span>
          </button>
        </div>

      </div>

      {/* TAB 1: ROADMAP (Zero to Advanced) */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          
          {/* Pillar Filters Bar */}
          <div className="flex items-center justify-between flex-wrap gap-3 bg-white dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Filter className="w-3.5 h-3.5" />
              <span className="font-semibold">Filter by 4 Pillars:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Pillars' },
                { id: 'programming', label: 'Programming & DSA' },
                { id: 'aptitude', label: 'Aptitude & Math' },
                { id: 'project', label: 'Projects & Systems' },
                { id: 'interview', label: 'Interview Prep' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setFilterPillar(item.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    filterPillar === item.id
                      ? 'bg-slate-900 dark:bg-slate-800 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Phased Roadmap Sequence */}
          <div className="space-y-6">
            {role.phases.map((phase) => {
              const filteredTopics = phase.topics.filter(t => 
                filterPillar === 'all' || t.pillar === filterPillar
              );

              if (filteredTopics.length === 0 && filterPillar !== 'all') {
                return null;
              }

              const totalPhaseTopics = phase.topics.length;
              const completedPhaseTopics = phase.topics.filter(t => completedTopics[t.id]).length;
              const phasePercent = totalPhaseTopics > 0 ? Math.round((completedPhaseTopics / totalPhaseTopics) * 100) : 0;

              return (
                <div 
                  key={phase.phaseId}
                  className="rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 overflow-hidden"
                >
                  {/* Phase Header */}
                  <div className="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 font-bold border border-brand-200 dark:border-brand-500/30">
                          {phase.duration}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {completedPhaseTopics} of {totalPhaseTopics} topics completed
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                        {phase.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {phase.description}
                      </p>
                    </div>

                    {/* Mini Progress */}
                    <div className="sm:text-right min-w-[140px]">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{phasePercent}% Completed</span>
                      <div className="w-full sm:w-36 h-2 rounded-full bg-slate-200 dark:bg-slate-800 mt-1.5 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${phasePercent}%`, backgroundColor: role.theme.primary }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Topic Items List */}
                  <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {filteredTopics.map((topic) => {
                      const isDone = !!completedTopics[topic.id];
                      const isExpanded = !!expandedTopics[topic.id];

                      return (
                        <div 
                          key={topic.id}
                          className={`transition-colors ${isDone ? 'bg-brand-50/40 dark:bg-brand-500/5' : 'hover:bg-slate-50/80 dark:hover:bg-slate-850/40'}`}
                        >
                          {/* Topic Summary Row */}
                          <div 
                            onClick={() => toggleExpand(topic.id)}
                            className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 cursor-pointer"
                          >
                            <div className="flex items-start sm:items-center gap-3.5 flex-1">
                              
                              {/* Checkbox Trigger */}
                              <button
                                type="button"
                                onClick={(e) => handleToggleCheck(topic.id, e)}
                                className={`mt-0.5 sm:mt-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                                  isDone 
                                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30' 
                                    : 'border-2 border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-white dark:bg-slate-900'
                                }`}
                              >
                                {isDone && <Check className="w-4 h-4 stroke-[3]" />}
                              </button>

                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className={`text-sm font-semibold ${isDone ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100'}`}>
                                    {topic.title}
                                  </span>
                                  
                                  {/* Difficulty Badge */}
                                  <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                                    topic.difficulty === 'Beginner' 
                                      ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                                      : topic.difficulty === 'Intermediate'
                                      ? 'bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20'
                                      : 'bg-purple-50 dark:bg-purple-500/15 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20'
                                  }`}>
                                    {topic.difficulty}
                                  </span>

                                  {/* Pillar Tag */}
                                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                                    {topic.pillar}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Meta & Expand Trigger */}
                            <div className="flex items-center gap-3">
                              <span className="hidden sm:flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                                {topic.estimatedHours}h
                              </span>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenNotes(topic);
                                }}
                                title="Add personal notes or solution link"
                                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                              >
                                <FileText className="w-4 h-4" />
                              </button>

                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4 text-slate-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-slate-400" />
                              )}
                            </div>
                          </div>

                          {/* Expanded Content Drawer */}
                          {isExpanded && (
                            <div className="px-5 pb-5 pt-1 bg-slate-50/90 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/60 space-y-3.5">
                              
                              {/* Key Concepts */}
                              <div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                                  Key Concepts to Master
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {topic.keyConcepts.map((concept, idx) => (
                                    <span 
                                      key={idx}
                                      className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-750 shadow-sm"
                                    >
                                      {concept}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Hands-on Practice Challenge */}
                              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1.5 mb-1">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  Actionable Practice Challenge
                                </span>
                                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {topic.practiceChallenge}
                                </p>
                              </div>

                              {/* Resource Link & Notes Trigger */}
                              <div className="flex items-center justify-between flex-wrap gap-2 pt-2">
                                <a
                                  href={topic.resource}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold transition-colors"
                                >
                                  <span>Recommended Free Learning Guide</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>

                                <button
                                  onClick={() => onOpenNotes(topic)}
                                  className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>Open Study Notes</span>
                                </button>
                              </div>

                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* TAB 2: SKILLS MATRIX */}
      {activeTab === 'skills' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {role.skillsMatrix.map((cat, idx) => (
            <div key={idx} className="rounded-2xl glass-card p-6 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-xs text-slate-500 font-normal">{cat.skills.length} Competencies</span>
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/60">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          skill.level === 'Crucial'
                            ? 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20'
                            : skill.level === 'Essential'
                            ? 'bg-brand-50 dark:bg-brand-500/15 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-500/20'
                            : 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: LANGUAGES & TOOLS */}
      {activeTab === 'languages' && (
        <div className="space-y-4">
          <div className="rounded-2xl glass-card p-6 border border-slate-200/90 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
              Programming Languages & Technical Depth Required
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {role.programmingLanguages.map((lang, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-bold text-slate-900 dark:text-white">{lang.name}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-500/15 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-500/20">
                        {lang.importance}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {lang.roleInJob}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      Mastery Checklist
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {lang.masteryTarget}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PROJECT BLUEPRINTS */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Portfolio Projects Blueprint</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Employers hire proof of execution over certificates. Complete these multi-tiered projects to demonstrate real-world competency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {role.projectBlueprints.map((proj) => (
              <div key={proj.id} className="rounded-2xl glass-card p-6 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                      {proj.difficulty}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{proj.techStack}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Milestones Checklist */}
                  <div className="mt-5 space-y-2.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block">
                      Execution Milestones
                    </span>
                    {proj.milestones.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-mono text-brand-600 dark:text-brand-400 shrink-0 mt-0.5 font-bold">
                          {mIdx + 1}
                        </span>
                        <span className="leading-relaxed">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <FolderGit2 className="w-4 h-4 text-slate-400" />
                    <span>Upload to GitHub</span>
                  </span>
                  <button 
                    onClick={() => alert(`Tip: Create a new repository for ${proj.title} and document each milestone in the README!`)}
                    className="text-xs font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    View Project Tips
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: INDUSTRY CERTIFICATIONS (TIER A & S) */}
      {activeTab === 'certifications' && (
        <div className="space-y-6">
          
          {/* Overview Banner */}
          <div className="p-6 rounded-2xl glass-card border border-brand-200 dark:border-brand-500/20 bg-gradient-to-r from-brand-50/60 via-white to-amber-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  <span>Tier A & Tier S Recruiter Valued</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {roleCerts.length} Verified Authentic Credentials
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                Official Certifications Endorsed by Hiring Managers
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Reputable certifications from <strong>Harvard, AWS, Google Cloud, Microsoft, Meta, and freeCodeCamp</strong> validate your skills through ATS filters and hiring committees at Tier A startups and Tier S FAANG/MNC companies. Both 100% free/unpaid and official paid vouchers are suggested below.
              </p>
            </div>

            {/* Recruiter Tier Guide Pill */}
            <div className="flex flex-col gap-1.5 bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 text-[11px] min-w-[220px] shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-600 dark:text-amber-400">Tier S:</span>
                <span className="text-slate-600 dark:text-slate-300">FAANG, AWS, Google, Harvard</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-purple-600 dark:text-purple-400">Tier A:</span>
                <span className="text-slate-600 dark:text-slate-300">Enterprise MNCs, Top Unicorns</span>
              </div>
            </div>
          </div>

          {/* Filter Chips Bar (Cost & Tier) */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter by Cost:</span>
              </span>
              <button
                onClick={() => setCertCostFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  certCostFilter === 'all'
                    ? 'bg-slate-900 dark:bg-slate-800 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                All ({roleCerts.length})
              </button>
              <button
                onClick={() => setCertCostFilter('unpaid')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                  certCostFilter === 'unpaid'
                    ? 'bg-emerald-600 text-white'
                    : 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10'
                }`}
              >
                <Gift className="w-3 h-3" />
                <span>Unpaid (100% Free)</span>
              </button>
              <button
                onClick={() => setCertCostFilter('paid')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                  certCostFilter === 'paid'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                <DollarSign className="w-3 h-3" />
                <span>Paid / Exam Voucher</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Recruiter Tier:</span>
              <button
                onClick={() => setCertTierFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-medium ${certTierFilter === 'all' ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
              >
                All
              </button>
              <button
                onClick={() => setCertTierFilter('Tier S')}
                className={`px-2.5 py-1 rounded-lg font-bold text-amber-600 dark:text-amber-400 ${certTierFilter === 'Tier S' ? 'bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30' : 'hover:text-amber-500'}`}
              >
                Tier S
              </button>
              <button
                onClick={() => setCertTierFilter('Tier A')}
                className={`px-2.5 py-1 rounded-lg font-bold text-purple-600 dark:text-purple-400 ${certTierFilter === 'Tier A' ? 'bg-purple-100 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30' : 'hover:text-purple-500'}`}
              >
                Tier A
              </button>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCertifications.map((cert) => {
              const isFree = cert.costType.toLowerCase().includes('unpaid');

              return (
                <div 
                  key={cert.id}
                  className="rounded-2xl glass-card p-6 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                          cert.tier === 'Tier S'
                            ? 'bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-500/20 dark:to-yellow-500/20 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-500/40'
                            : 'bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/30'
                        }`}>
                          ★ {cert.tier}
                        </span>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          {cert.recommendedPhase}
                        </span>
                      </div>

                      {/* Pricing Tag */}
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1 ${
                        isFree 
                          ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}>
                        {isFree ? <Gift className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <DollarSign className="w-3 h-3 text-slate-500" />}
                        <span>{cert.costType}</span>
                      </span>
                    </div>

                    {/* Issuer & Title */}
                    <div className="mb-2">
                      <span className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider block">
                        {cert.issuer}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                        Fee: <span className="font-semibold text-slate-800 dark:text-slate-200">{cert.estimatedCost}</span>
                      </p>
                    </div>

                    {/* Skills Covered Pills */}
                    <div className="my-3.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                        Core Competencies Tested
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skillsCovered.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recruiter Value Callout */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 text-xs">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Why Top Recruiters Value This:</span>
                      </span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                        "{cert.recruiterValue}"
                      </p>
                    </div>
                  </div>

                  {/* Action Link to Official Portal */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {cert.credentialType}
                    </span>

                    <a
                      href={cert.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-600/20 transition-all group"
                    >
                      <span>Official Certification Portal</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};
