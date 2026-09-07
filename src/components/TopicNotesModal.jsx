import React, { useState, useEffect } from 'react';
import { X, Save, FileText, Check, ExternalLink } from 'lucide-react';

export const TopicNotesModal = ({ isOpen, onClose, topic, savedNote, onSaveNote }) => {
  const [noteContent, setNoteContent] = useState('');
  const [linkContent, setLinkContent] = useState('');
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    if (savedNote) {
      setNoteContent(savedNote.text || '');
      setLinkContent(savedNote.link || '');
    } else {
      setNoteContent('');
      setLinkContent('');
    }
    setJustSaved(false);
  }, [savedNote, topic]);

  if (!isOpen || !topic) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveNote(topic.id, {
      text: noteContent,
      link: linkContent,
      updatedAt: new Date().toISOString()
    });
    setJustSaved(true);
    setTimeout(() => {
      setJustSaved(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl glass-panel border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Study Notes & Practice Log</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-sm">{topic.title}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Personal Study Notes & Key Takeaways
            </label>
            <textarea
              rows={6}
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Jot down algorithmic intuitions, edge cases, formulas, or tricky interview points you learned here..."
              className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl p-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 font-sans shadow-sm"
            ></textarea>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              GitHub Repo / Solution URL
            </label>
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={linkContent}
                onChange={(e) => setLinkContent(e.target.value)}
                placeholder="https://github.com/your-username/repo-name or LeetCode URL"
                className="flex-1 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 shadow-sm"
              />
              {linkContent && (
                <a
                  href={linkContent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                justSaved 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-600/25'
              }`}
            >
              {justSaved ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Notes</span>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
